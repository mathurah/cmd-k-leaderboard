import React, { useState, useEffect } from 'react';
import styles from './Marquee.module.css';
const Marquee = ({ votes }) => {
  return (
    <>
      <div className={styles.marquee}>
        {(votes || []).map(({ url, company, count }, index) => {
          return (
            <div key={index} className={styles.tile}>
              <div className={styles.idx}>#{index + 1}</div>
              <div>
                <a target="blank" href={`https://${url}`}>
                  <img
                    alt={`${url} logo`}
                    src={`https://logo.clearbit.com/${url}`}
                  />
                </a>
              </div>
              <div className={styles.text}>{company}</div>
              <div className={styles.text}>{`+ ${count}`}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Marquee;
