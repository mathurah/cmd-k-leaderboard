import React, { useState, useEffect } from 'react';
import Ticker from 'react-ticker';
import styles from './Marquee.module.css';

const COLORS = [
  '#4242CB',
  '#7042CB',
  '#9D42CB',
  '#CB42CB',
  '#C12D90',
  '#D22D64',
  '#CD3030',
  '#AF440E',
  '#A05305',
  '#876705',
  '#3A3A44',
];

const Marquee = ({ votes }) => {
  return (
    <div className={styles.marqueeContainer}>
      <Ticker offset="run-in" speed={10}>
        {() => (
          <div className={styles.marquee}>
            {votes.length ? (
              votes.map(({ url, company, count }, index) => {
                return (
                  <Tile
                    url={url}
                    company={company}
                    count={count}
                    index={index}
                    color={COLORS[Math.min(index, COLORS.length - 1)]}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        )}
      </Ticker>
    </div>
  );
};

const Tile = ({ url, company, count, index, color }) => {
  return (
    <div key={index} style={{ backgroundColor: color }} className={styles.tile}>
      <div style={{ color: color }} className={styles.idx}>
        {`#${index + 1}`}
      </div>
      <div className={styles.image}>
        <a target="blank" href={`https://${url}`}>
          <img alt={`${url} logo`} src={`https://logo.clearbit.com/${url}`} />
        </a>
      </div>
      <div className={styles.company}>{company}</div>
      <div className={styles.count}>{`+ ${count}`}</div>
    </div>
  );
};

export default Marquee;
