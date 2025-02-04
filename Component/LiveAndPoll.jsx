import React from "react";
import Livescore from "./Livescore";
import Polling from "./Polling";
import styles from "./LiveAndPoll.module.css";

const LiveAndPoll = () => {
  return (
    <div className={styles.containerWrapper}>
      <Livescore />
      <Polling />
    </div>
  );
};

export default LiveAndPoll;