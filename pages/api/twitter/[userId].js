// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchAllProfiles, getUsersVotes } from '../../../api/supabase';

export default async function handler(req, res) {
  let followingList = await fetch(
    `https://api.twitter.com/1.1/friends/ids.json?` +
      new URLSearchParams({ user_id: req.query.userId, stringify_ids: true }),
    {
      headers: {
        Authorization: process.env.TWITTER_TOKEN,
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
  let followingSet = new Set(followingList.ids);
  const allProfiles = await fetchAllProfiles();
  const followingProfiles = allProfiles.filter(({ twitter_id }) =>
    followingSet.has(twitter_id)
  );

  const followingProfileMap = new Map(
    followingProfiles.map((profile) => [profile.id, profile])
  );

  const followingVotes = await getUsersVotes(
    followingProfiles.map(({ id }) => id)
  );

  const twitterIds = chunkArray(
    followingProfiles.map(({ twitter_id }) => twitter_id),
    100
  );

  const twitterUsers = await Promise.all(
    twitterIds.map(async (twitterIdList) => {
      const twitterUserList = await fetch(
        'https://api.twitter.com/1.1/users/lookup.json?' +
          new URLSearchParams({ user_id: twitterIdList.join(',') }),
        {
          method: 'POST',
          headers: {
            Authorization: process.env.TWITTER_TOKEN,
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          return res;
        });
      return twitterUserList.map(
        ({ id_str, screen_name, profile_image_url_https }) => {
          return {
            id: id_str,
            username: screen_name,
            image: profile_image_url_https,
          };
        }
      );
    })
  );

  const twitterMap = new Map(
    twitterUsers.flat().map((user) => [user.id, user])
  );
  let returnObj = {};
  let currentUserId = '';
  let currentTwitterId = '';
  for (let i = 0; i < followingVotes.length; i++) {
    currentUserId = followingVotes[i].user_id;
    currentTwitterId = followingProfileMap.get(currentUserId).twitter_id;
    returnObj[followingVotes[i].option_id] = (
      returnObj[followingVotes[i].option_id] || []
    ).concat([
      {
        user_id: currentUserId,
        twitter_id: currentTwitterId,
        username: twitterMap.get(currentTwitterId).username,
        image: twitterMap.get(currentTwitterId).image,
      },
    ]);
  }
  res.status(200).json({ options: returnObj });
}

const chunkArray = (inputArray, perChunk) =>
  inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
