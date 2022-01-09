import React from 'react';
import styles from './MainTitle.module.css';

const Footnote = () => {
  return (
    <div className={styles.footnoteWrapper}>
      <div className={styles.footnote}>
        <div className={styles.footnoteText}>
          <p>* or control +k on Windows</p>
        </div>
      </div>
    </div>
  );
};

export default Footnote;
