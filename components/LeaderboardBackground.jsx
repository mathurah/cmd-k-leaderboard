import React from "react";
import styles from "./Leaderboard.module.css";
const LeaderboardBackground = ({ children }) => {
  return (
    <>
      <div className={styles.colorContainer}>
        <div className={styles.yellow}></div>
        <div className={styles.orange}></div>
        <div className={styles.red}></div>
        {children}
      </div>
    </>
  );
};

export default LeaderboardBackground;
