import React from 'react';
import styles from './Leaderboard.module.css';
import { TOP_COLORS } from '../styles/constants';
import { useState, useContext } from 'react';
import { Store } from '../context/state';
import Button from './Button';

const Leaderboard = ({ toggle, toggleAdd }) => {
  const {
    state: { voteOptions, user, userVotes, votesLoading },
    dispatch,
  } = useContext(Store);

  const [hover, setHover] = useState(false);
  return (
    <>
      <div id="leaderboard" className={styles.leaderboard}>
        <LeaderboardTitle />

        <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => {
            setHover(false);
          }}
          className={styles.addStarContainer}
          onClick={toggleAdd}
        >
          {/* Add onClick for cmd+k */}
          <AddStar variant={hover ? 'hover' : 'reg'} />
          <div className={styles.addStarLabel}>Add App</div>
        </div>
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
          {
            <div className={styles.leaderboardList}>
              {voteOptions.map(({ url, name, votes, id }, index) => (
                <LeaderboardItem
                  url={url}
                  company={name}
                  index={index + 1}
                  votes={votes}
                  key={id}
                  id={id}
                  bg={TOP_COLORS[Math.min(index, TOP_COLORS.length - 1)]}
                  handleVote={() => {
                    toggle(id);
                  }}
                />
              ))}
            </div>
          }
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

const LeaderboardItem = ({
  url,
  company,
  index,
  votes,
  bg,
  id,
  handleVote,
}) => {
  const {
    state: { userVotes },
    dispatch,
  } = useContext(Store);

  return (
    <div
      id={`leaderboard_item_${id}`}
      style={{ backgroundColor: bg }}
      className={styles.leaderboardItem}
    >
      <div className={styles.leaderboardItemGroup}>
        <div className={styles.leaderboardItemIndex}>{index}</div>
        <div className={styles.leaderboardItemImgContainer}>
          <a target="blank" href={`https://${url}`}>
            <img alt={`${url} logo`} src={`https://logo.clearbit.com/${url}`} />
          </a>
        </div>
        <div className={styles.leaderboardItemCompanyContainer}>
          <div className={styles.leaderboardItemCompany}>{company}</div>
        </div>
      </div>

      <div className={styles.leaderboardItemGroup}>
        <div className={styles.leaderboardItemTwitter}>
          {userVotes.map(({ option_id }) => option_id).includes(id) ? (
            <Button style="tweet">
              <a
                target="blank"
                href={`https://twitter.com/intent/tweet?url=https://www.commandbar.com/&text=${company} should be the next company to add Cmd+K to their site! @commandbar`}
              >
                <div className={styles.leaderboardItemTwitterButton}>
                  <div className={styles.tellem}>tell em</div>
                  <img
                    className={styles.twitter}
                    alt="Twitter Logo"
                    src="twitter.svg"
                  />
                </div>
              </a>
            </Button>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.leaderboardItemVotesContainer}>
          {userVotes.map(({ option_id }) => option_id).includes(id) ? (
            <Button onClick={handleVote} style={'voted'}>
              <div className={styles.leaderboardItemVotes}>
                <div className={styles.x}>
                  {window.innerWidth > 900 ? (
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
                  ) : (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.93867 0.72808L0.913581 2.75317C0.813164 2.85358 0.813164 2.98747 0.913581 3.08789L3.75874 5.93305C3.84243 6.01674 3.84243 6.11715 3.75874 6.20083L0.980526 8.97905C0.880108 9.07947 0.880108 9.21336 0.980526 9.31378L2.83825 11.1715C2.93867 11.2719 3.07256 11.2719 3.17298 11.1715L5.95119 8.39328C6.03487 8.3096 6.13529 8.3096 6.21897 8.39328L9.06414 11.2384C9.16455 11.3389 9.29844 11.3389 9.39886 11.2384L11.4239 9.21336C11.5244 9.11294 11.5244 8.97905 11.4239 8.87864L8.57879 6.03347C8.4951 5.94979 8.4951 5.84937 8.57879 5.76569L11.3235 3.02095C11.4239 2.92053 11.4239 2.78664 11.3235 2.68622L9.46581 0.828496C9.36539 0.728079 9.2315 0.728079 9.13108 0.828497L6.38634 3.57324C6.30265 3.65692 6.20224 3.65692 6.11856 3.57324L3.27339 0.72808C3.17298 0.627662 3.03909 0.627662 2.93867 0.72808Z"
                        fill="#24242F"
                      />
                    </svg>
                  )}
                </div>
                <div>{votes}</div>
              </div>
            </Button>
          ) : (
            <Button onClick={handleVote} style={'vote'}>
              <div className={styles.leaderboardItemVotes}>
                <div className={styles.buttonText}>
                  <div>+</div>
                  <div>{votes}</div>
                </div>
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const AddStar = ({ variant, toggleAdd }) => {
  return (
    <div className={styles.addStar}>
      {variant === 'hover' ? (
        <svg
          width="114"
          height="114"
          viewBox="0 0 114 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.2146 2.86982C57.9325 2.48049 57.4808 2.25 57 2.25C56.5192 2.25 56.0675 2.48049 55.7854 2.86982L48.2902 13.2128L37.4074 6.52542C36.9978 6.27369 36.4923 6.2336 36.0481 6.41759C35.6039 6.60159 35.2748 6.98738 35.1631 7.45504L32.1966 19.879L19.583 17.8653C19.1082 17.7895 18.6259 17.9459 18.2859 18.2859C17.9459 18.6259 17.7895 19.1082 17.8653 19.583L19.879 32.1966L7.45504 35.1631C6.98738 35.2748 6.60159 35.6039 6.41759 36.0481C6.2336 36.4923 6.27369 36.9978 6.52542 37.4074L13.2128 48.2902L2.86982 55.7854C2.48049 56.0675 2.25 56.5192 2.25 57C2.25 57.4808 2.48049 57.9325 2.86982 58.2146L13.2128 65.7098L6.52542 76.5926C6.27369 77.0022 6.2336 77.5077 6.41759 77.9519C6.60159 78.3961 6.98738 78.7252 7.45504 78.8369L19.879 81.8034L17.8653 94.417C17.7895 94.8918 17.9459 95.3741 18.2859 95.7141C18.6259 96.0541 19.1082 96.2105 19.583 96.1347L32.1966 94.121L35.1631 106.545C35.2748 107.013 35.6039 107.398 36.0481 107.582C36.4923 107.766 36.9978 107.726 37.4074 107.475L48.2902 100.787L55.7854 111.13C56.0675 111.52 56.5192 111.75 57 111.75C57.4808 111.75 57.9325 111.52 58.2146 111.13L65.7098 100.787L76.5926 107.475C77.0022 107.726 77.5077 107.766 77.9519 107.582C78.3961 107.398 78.7252 107.013 78.8369 106.545L81.8034 94.121L94.417 96.1347C94.8918 96.2105 95.3741 96.0541 95.7141 95.7141C96.0541 95.3741 96.2105 94.8918 96.1347 94.417L94.121 81.8034L106.545 78.8369C107.013 78.7252 107.398 78.3961 107.582 77.9519C107.766 77.5077 107.726 77.0022 107.475 76.5926L100.787 65.7098L111.13 58.2146C111.52 57.9325 111.75 57.4808 111.75 57C111.75 56.5192 111.52 56.0675 111.13 55.7854L100.787 48.2902L107.475 37.4074C107.726 36.9978 107.766 36.4923 107.582 36.0481C107.398 35.6039 107.013 35.2748 106.545 35.1631L94.121 32.1966L96.1347 19.583C96.2105 19.1082 96.0541 18.6259 95.7141 18.2859C95.3741 17.9459 94.8918 17.7895 94.417 17.8653L81.8034 19.879L78.8369 7.45504C78.7252 6.98738 78.3961 6.60159 77.9519 6.41759C77.5077 6.2336 77.0022 6.27369 76.5926 6.52542L65.7098 13.2128L58.2146 2.86982Z"
            fill="black"
            fillOpacity="0.96"
            stroke="url(#paint0_linear_1062_10659)"
            strokeWidth="3"
            strokeLineJoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1062_10659"
              x1="83.209"
              y1="103.178"
              x2="42.4395"
              y2="9.1582"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4242CB" />
              <stop offset="1" stopColor="#7042CB" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="102"
          height="102"
          viewBox="0 0 102 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51 3L58.4915 13.3378L69.3688 6.65378L72.3339 19.0716L84.9411 17.0589L82.9284 29.6661L95.3462 32.6312L88.6622 43.5085L99 51L88.6622 58.4915L95.3462 69.3688L82.9284 72.3339L84.9411 84.9411L72.3339 82.9284L69.3688 95.3462L58.4915 88.6622L51 99L43.5085 88.6622L32.6312 95.3462L29.6661 82.9284L17.0589 84.9411L19.0716 72.3339L6.65378 69.3688L13.3378 58.4915L3 51L13.3378 43.5085L6.65378 32.6312L19.0716 29.6661L17.0589 17.0589L29.6661 19.0716L32.6312 6.65378L43.5085 13.3378L51 3Z"
            fill="url(#paint0_linear_1615_9999)"
          />
          <path
            d="M52.2146 2.11982C51.9325 1.73049 51.4808 1.5 51 1.5C50.5192 1.5 50.0675 1.73049 49.7854 2.11982L43.1096 11.3321L33.4165 5.37579C33.0069 5.12406 32.5014 5.08397 32.0572 5.26796C31.613 5.45196 31.2839 5.83775 31.1722 6.30541L28.5299 17.3712L17.2954 15.5776C16.8206 15.5018 16.3382 15.6582 15.9982 15.9982C15.6582 16.3382 15.5018 16.8206 15.5776 17.2954L17.3712 28.5299L6.30541 31.1722C5.83775 31.2839 5.45196 31.613 5.26796 32.0572C5.08397 32.5014 5.12406 33.0069 5.37579 33.4165L11.3321 43.1096L2.11982 49.7854C1.73049 50.0675 1.5 50.5192 1.5 51C1.5 51.4808 1.73049 51.9325 2.11982 52.2146L11.3321 58.8904L5.37579 68.5835C5.12406 68.9931 5.08397 69.4986 5.26796 69.9428C5.45196 70.387 5.83775 70.7161 6.30541 70.8278L17.3712 73.47L15.5776 84.7047C15.5018 85.1794 15.6582 85.6618 15.9982 86.0018C16.3382 86.3418 16.8206 86.4982 17.2954 86.4224L28.5299 84.6288L31.1722 95.6946C31.2839 96.1623 31.613 96.548 32.0572 96.732C32.5014 96.916 33.0069 96.8759 33.4165 96.6242L43.1096 90.6679L49.7854 99.8802C50.0675 100.27 50.5192 100.5 51 100.5C51.4808 100.5 51.9325 100.27 52.2146 99.8802L58.8904 90.6679L68.5835 96.6242C68.9931 96.8759 69.4986 96.916 69.9428 96.732C70.387 96.548 70.7161 96.1623 70.8278 95.6946L73.47 84.6288L84.7047 86.4224C85.1794 86.4982 85.6618 86.3418 86.0018 86.0018C86.3418 85.6618 86.4982 85.1794 86.4224 84.7047L84.6288 73.47L95.6946 70.8278C96.1623 70.7161 96.548 70.387 96.732 69.9428C96.916 69.4986 96.8759 68.9931 96.6242 68.5835L90.6679 58.8904L99.8802 52.2146C100.27 51.9325 100.5 51.4808 100.5 51C100.5 50.5192 100.27 50.0675 99.8802 49.7854L90.6679 43.1096L96.6242 33.4165C96.8759 33.0069 96.916 32.5014 96.732 32.0572C96.548 31.613 96.1623 31.2839 95.6946 31.1722L84.6288 28.5299L86.4224 17.2954C86.4982 16.8206 86.3418 16.3382 86.0018 15.9982C85.6618 15.6582 85.1794 15.5018 84.7047 15.5776L73.47 17.3712L70.8278 6.30541C70.7161 5.83775 70.387 5.45196 69.9428 5.26796C69.4986 5.08397 68.9931 5.12406 68.5835 5.37579L58.8904 11.3321L52.2146 2.11982Z"
            stroke="black"
            strokeOpacity="0.8"
            strokeWidth="3"
            strokeLineJoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1615_9999"
              x1="74.625"
              y1="92.625"
              x2="37.875"
              y2="7.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4242CB" />
              <stop offset="1" stopColor="#7042CB" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Leaderboard;
