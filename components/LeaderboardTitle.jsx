import React from "react";
import styles from "./Leaderboard.module.css";
import LeaderboardBackground from "./LeaderboardBackground";
const LeaderboardTitle = () => {
  return (
    <>
      <div className={styles.container}>
        <LeaderboardBackground>
          <div className={styles.text}>Leaderboard</div>
        </LeaderboardBackground>
      </div>
    </>
  );
};

export default LeaderboardTitle;
