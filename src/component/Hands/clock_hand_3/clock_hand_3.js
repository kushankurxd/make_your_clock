import React from "react";

import styles from "./clock_hand_3.module.css";

import { connect } from "react-redux";

const clock_hand = (props) => {
  return (
    <React.Fragment>
      <div
        className={styles.hourHand}
        style={{
          transform: "rotate(" + (props.hoursDegrees + 0) + "deg)",
        }}
      ></div>
      <div
        className={styles.minuteHand}
        style={{
          transform: "rotate(" + (props.minsDegrees + 0) + "deg)",
        }}
      ></div>
      <div
        className={styles.secondHand}
        style={{
          transform: "rotate(" + (props.secondsDegrees + 0) + "deg)",
        }}
      ></div>
      <div className={styles.center}></div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    secondsDegrees: state.clk.secondsDegrees,
    minsDegrees: state.clk.minsDegrees,
    hoursDegrees: state.clk.hoursDegrees,
  };
};

export default connect(mapStateToProps)(clock_hand);
