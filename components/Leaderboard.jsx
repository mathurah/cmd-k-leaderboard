import React from "react";
import styles from "./Leaderboard.module.css";
import { TOP_COLORS } from "../styles/constants";
import { useState, useContext } from "react";
import { Store } from "../context/state";
import Button from "./Button";

const Leaderboard = () => {
  const {
    state: { voteOptions, user, votesLoading },
    dispatch,
  } = useContext(Store);
  return (
    <>
      <div className={styles.leaderboard}>
        <LeaderboardTitle />
        <div className={styles.leaderboardContainer}>
          <div className={styles.leaderboardInstructions}>
            Vote for apps where you want a command bar
          </div>
          <div className={styles.leaderboardLabels}>
            <div className={styles.leaderboardLabelsLeft}>
              <div>#</div>
              <div>APP</div>
            </div>
            <div className={styles.leaderboardLabelsRight}>VOTES</div>
          </div>
          {!votesLoading && (
            <div className={styles.leaderboardList}>
              {voteOptions.map(({ url, name, votes }, index) => (
                <LeaderboardItem
                  url={url}
                  company={name}
                  index={index + 1}
                  votes={votes}
                  bg={TOP_COLORS[Math.min(index, TOP_COLORS.length - 1)]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const LeaderboardTitle = ({}) => {
  return (
    <>
      <div className={styles.text}>
        <h2>Leaderboard</h2>
      </div>
    </>
  );
};

const LeaderboardItem = ({ url, company, index, votes, bg }) => {
  return (
    <div style={{ backgroundColor: bg }} className={styles.leaderboardItem}>
      <div className={styles.leaderboardItemGroup}>
        <div className={styles.leaderboardItemIndex}>{index}</div>
        <div className={styles.leaderboardItemImgContainer}>
          <a target="blank" href={`https://${url}`}>
            <img alt={`${url} logo`} src={`https://logo.clearbit.com/${url}`} />
          </a>
        </div>
        <div className={styles.leaderboardItemCompany}>{company}</div>
      </div>
      <div className={styles.leaderboardItemGroup}>
        <div className={styles.leaderboardItemTwitter}>
          <Button style="tweet">
            <a
              target="blank"
              href={`https://twitter.com/intent/tweet?url=https://www.commandbar.com/&text=${company} should be the next company to add Cmd+K to their site! @commandbar`}
            >
              <div className={styles.leaderboardItemTwitterButton}>
                <div className={styles.tellem}>tell 'em</div>
                <img
                  className={styles.twitter}
                  alt="Twitter Logo"
                  src="twitter.svg"
                />
              </div>
            </a>
          </Button>
        </div>
        <div>
          <Button style="vote">
            <div className={styles.leaderboardItemVotes}>
              <div>+</div>
              <div>{votes}</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
