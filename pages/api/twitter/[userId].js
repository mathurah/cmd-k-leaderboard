// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchAllProfiles } from '../../../api/supabase';

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
      console.log(res);
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
  res.status(200).json({ following: followingProfiles });
}
