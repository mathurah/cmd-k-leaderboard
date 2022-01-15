// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let result = await fetch(
    `https://api.twitter.com/1.1/friends/ids.json?user_id=${req.query.userId}`,
    {
      headers: {
        Authorization: process.env.TWITTER_TOKEN,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  res.status(200).json(result);
}
