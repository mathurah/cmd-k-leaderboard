import React from 'react';
import styles from './TweetGrid.module.css';

const TWEETS = [
  [
    {
      user: '@natfriedman',
      url: 'https://twitter.com/natfriedman/status/1453386746293485570?s=20',
      content: (
        <p>
          Introducing the GitHub command palette. Hit Cmd-k on Mac or Ctrl-k on
          Linux and Windows anywhere in the <strong>@github</strong> web
          interface. Enjoy 😊
        </p>
      ),
    },
    {
      user: '@simontheis',
      url: 'https://twitter.com/simontheis/status/1458167867229229059?s=20',
      content: (
        <p>Everything should have cmd+k 😂 apps, websites, the cable-drawer</p>
      ),
    },
    {
      user: '@_yangyou',
      url: 'https://twitter.com/_yangyou/status/1469446794593533955?s=20',
      content: (
        <p>
          ok i'll bite, i finally got on <strong>@Superhuman</strong> for email
          and my god, how do i E, J, and Command+K everything else in life
        </p>
      ),
    },
  ],
  [
    {
      user: '@hvpandya',
      url: 'https://twitter.com/hvpandya/status/1468513964048871424?s=20',
      content: (
        <p>
          ✨ Underrated UX <br /> Cmd + K panel in Slack shows you a list of
          Unread messages to quickly jump to.
        </p>
      ),
    },
    {
      user: '@tobi',
      url: 'https://twitter.com/tobi/status/1457134379348672522?s=20',
      content: (
        <p>
          Almost every app I use on my laptop implements a fuzzy search via
          CMD+k. It's basically a core-primitive of good productivity app design
          at this point.
        </p>
      ),
    },
    {
      user: '@swyx',
      url: 'https://twitter.com/swyx/status/1453401130994520068?s=20',
      content: (
        <p>
          OMG <strong>@GITHUB</strong> GOT A COMMAND PALETTE PRESS CMD + K NOW
        </p>
      ),
    },
  ],
];

const TweetGrid = () => {
  return (
    <div className={styles.tweetGridWrapper}>
      <div className={styles.tweetGridContainer}>
        <div className={styles.tweetGrid}>
          <div className={styles.tweetCol}>
            {TWEETS[0].map((tweet, index) => (
              <Tweet key={index} tweet={tweet} />
            ))}
          </div>
          <div className={styles.tweetCol}>
            {TWEETS[1].map((tweet, index) => (
              <Tweet key={index} tweet={tweet} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tweet = ({ tweet }) => {
  return (
    <a href={tweet.url} target="_blank" rel="noopener noreferrer">
      <div className={styles.tweetPanel}>
        <div className={styles.tweetHeader}>
          <div className={styles.tweetUser}>{tweet.user}</div>
          <div className={styles.tweetIcon}>
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.484 3.98473C18.4917 4.15805 18.4956 4.33231 18.4956 4.50726C18.4956 9.84517 14.432 16 7.00071 16C4.71915 16 2.5955 15.3314 0.807617 14.1851C1.1237 14.2227 1.44521 14.2418 1.77142 14.2418C3.66426 14.2418 5.40625 13.5961 6.78903 12.5125C5.0211 12.48 3.52898 11.3122 3.01479 9.70736C3.2616 9.75467 3.51472 9.78005 3.77504 9.78005C4.14351 9.78005 4.50047 9.73042 4.83949 9.63829C2.99134 9.26709 1.59863 7.63464 1.59863 5.67762C1.59863 5.66056 1.59863 5.64362 1.599 5.62674C2.14363 5.92926 2.76654 6.11101 3.42889 6.13201C2.34475 5.40767 1.6317 4.17124 1.6317 2.76999C1.6317 2.02965 1.83093 1.33587 2.17877 0.739157C4.17132 3.18307 7.14831 4.79108 10.506 4.95971C10.4371 4.66395 10.4012 4.35563 10.4012 4.03911C10.4012 1.80852 12.2103 0 14.4413 0C15.6034 0 16.6534 0.490459 17.3903 1.27543C18.3105 1.09449 19.1752 0.758158 19.9559 0.295326C19.6543 1.23862 19.0137 2.03003 18.1795 2.53005C18.9968 2.43235 19.7754 2.21516 20.4999 1.89389C19.9584 2.70387 19.2735 3.41533 18.484 3.98473Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className={styles.tweetBody}>{tweet.content}</div>
      </div>
    </a>
  );
};

export default TweetGrid;
