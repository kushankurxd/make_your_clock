import React from "react";

import styles from "./clock_1.module.css";

import { connect } from "react-redux";

const clock_1 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.outer_clock_face}>
        <div className={[styles.marking, styles.marking_one].join(" ")}></div>
        <div className={[styles.marking, styles.marking_two].join(" ")}></div>
        <div className={[styles.marking, styles.marking_three].join(" ")}></div>
        <div className={[styles.marking, styles.marking_four].join(" ")}></div>
        <div className={styles.inner_clock_face}>{props.hand}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hand: state.clk.clocks[0].hand,
  };
};

export default connect(mapStateToProps)(clock_1);
