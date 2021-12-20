import React from "react";
import Image from "next/image";
import rainbow from "../public/State=Rainbow 1.svg";
import styles from "./MainTitle.module.css";

const MainTitle = () => {
  return (
    <>
      <div className={styles.mainTitle}>
        <Image alt="I want cmd-k" boxSize="40px" src={rainbow} />
      </div>
    </>
  );
};

export default MainTitle;
