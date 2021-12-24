import React from 'react';
import LeaderboardTitle from './LeaderboardTitle';
import styles from './Leaderboard.module.css';

const Leaderboard = () => {
  return (
    <>
      <div className={styles.leaderboard}>
        <LeaderboardTitle />
        <div className={styles.leaderboardContainer}>
          <div className={styles.leaderboardInstructions}>
            Vote for apps where you want a command bar
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
