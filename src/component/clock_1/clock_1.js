import React from "react";

import styles from "./clock_1.module.css";

import Clock_hand_1 from "../Hands/clock_hand_1/clock_hand_1";

const clock_1 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.outer_clock_face}>
        <div className={[styles.marking, styles.marking_one].join(" ")}></div>
        <div className={[styles.marking, styles.marking_two].join(" ")}></div>
        <div className={[styles.marking, styles.marking_three].join(" ")}></div>
        <div className={[styles.marking, styles.marking_four].join(" ")}></div>
        <div className={styles.inner_clock_face}>
          <Clock_hand_1 />
        </div>
      </div>
    </div>
  );
};

export default clock_1;
