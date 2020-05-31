import React from "react";

import styles from "./clock_1.module.css";

const clock_1 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.outer_clock_face}>
        <div className={[styles.marking, styles.marking_one].join(" ")}></div>
        <div className={[styles.marking, styles.marking_two].join(" ")}></div>
        <div className={[styles.marking, styles.marking_three].join(" ")}></div>
        <div className={[styles.marking, styles.marking_four].join(" ")}></div>
        <div className={styles.inner_clock_face}>
          <div
            className={[styles.hand, styles.hour_hand].join(" ")}
            style={{
              transform: "rotate(" + (props.hoursDegrees + 90) + "deg)",
            }}
          ></div>
          <div
            className={[styles.hand, styles.min_hand].join(" ")}
            style={{ transform: "rotate(" + (props.minsDegrees + 90) + "deg)" }}
          ></div>
          <div
            className={[styles.hand, styles.second_hand].join(" ")}
            style={{
              transform: "rotate(" + (props.secondsDegrees + 90) + "deg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default clock_1;
