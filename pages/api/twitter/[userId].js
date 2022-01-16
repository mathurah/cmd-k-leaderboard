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
  console.log(followingProfileMap);
  const followingVotes = await getUsersVotes(
    followingProfiles.map(({ id }) => id)
  );

  let returnObj = {};

  for (let i = 0; i < followingVotes.length; i++) {
    returnObj[followingVotes[i].option_id] = (
      returnObj[followingVotes[i].option_id] || []
    ).concat([
      {
        user_id: followingVotes[i].user_id,
        twitter_id: followingProfileMap.get(followingVotes[i].user_id)
          .twitter_id,
      },
    ]);
  }
  console.log(returnObj);
  console.log(followingVotes);
  res.status(200).json({ options: returnObj });
}
