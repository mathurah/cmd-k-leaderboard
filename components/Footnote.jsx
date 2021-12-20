import React from "react";
import styles from "./MainTitle.module.css";

const Footnote = () => {
  return (
    <>
      <div className={styles.footnote}>
        <div className={styles.footNoteText}>
          <p>* or control +k on Windows</p>
        </div>
      </div>
    </>
  );
};

export default Footnote;
