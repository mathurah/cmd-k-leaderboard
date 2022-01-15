export const getFollowing = async (user) => {
  fetch('https://api.twitter.com/2/users/1285969572445773830/following')
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
