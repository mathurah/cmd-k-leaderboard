import React from 'react';
import Image from 'next/image';
import rainbow from '../public/State=Rainbow 1.svg';
import styles from './MainTitle.module.css';

const RAINBOW = 'State=Rainbow 1.svg';

const MainTitle = () => {
  return (
    <div className={styles.mainTitleContainer}>
      <div className={styles.mainTitleLeft} />
      <div className={styles.mainTitle}>
        <img alt="I WANT CMD+K" src={RAINBOW} />
      </div>
      <div className={styles.mainTitleRight} />
    </div>
  );
};

export default MainTitle;
