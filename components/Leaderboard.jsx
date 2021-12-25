import React from 'react';
import styles from './Leaderboard.module.css';
import { TOP_COLORS } from '../styles/constants';
import { useState, useContext } from 'react';
import { Store } from '../context/state';
import Button from './Button';

const Leaderboard = () => {
  const {
    state: { voteOptions, user, userVotes, votesLoading },
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
              {voteOptions.map(({ url, name, votes, id }, index) => (
                <LeaderboardItem
                  url={url}
                  company={name}
                  index={index + 1}
                  votes={votes}
                  id={id}
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

const LeaderboardItem = ({ url, company, index, votes, bg, id }) => {
  const {
    state: { userVotes },
    dispatch,
  } = useContext(Store);
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
          {userVotes.map(({ option_id }) => option_id).includes(id) ? (
            <Button style={'voted'}>
              <div className={styles.leaderboardItemVotes}>
                <div className={styles.x}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.69598 0.970772L0.99586 3.67089C0.86197 3.80478 0.86197 3.9833 0.99586 4.11719L4.78941 7.91074C4.90099 8.02231 4.90099 8.1562 4.78941 8.26778L1.08512 11.9721C0.95123 12.106 0.951229 12.2845 1.08512 12.4184L3.56208 14.8953C3.69598 15.0292 3.8745 15.0292 4.00839 14.8953L7.71268 11.191C7.82425 11.0795 7.95814 11.0795 8.06972 11.191L11.8633 14.9846C11.9972 15.1185 12.1757 15.1185 12.3096 14.9846L15.0097 12.2845C15.1436 12.1506 15.1436 11.9721 15.0097 11.8382L11.2161 8.04463C11.1046 7.93305 11.1046 7.79916 11.2161 7.68759L14.8758 4.02793C15.0097 3.89404 15.0097 3.71552 14.8758 3.58163L12.3988 1.10466C12.2649 0.970771 12.0864 0.970771 11.9525 1.10466L8.29287 4.76432C8.18129 4.8759 8.0474 4.8759 7.93583 4.76432L4.14228 0.970772C4.00839 0.836882 3.82987 0.836882 3.69598 0.970772Z"
                      fill="#24242F"
                    />
                  </svg>
                </div>
                <div>{votes}</div>
              </div>
            </Button>
          ) : (
            <Button style={'vote'}>
              <div className={styles.leaderboardItemVotes}>
                <div>+</div>
                <div>{votes}</div>
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
