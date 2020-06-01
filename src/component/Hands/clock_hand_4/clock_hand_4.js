import React from "react";

import styles from "./clock_hand_4.module.css";

import { connect } from "react-redux";

const clock_hand = (props) => {
  return (
    <React.Fragment>
      <div
        className={[styles.hour, styles.hand].join(" ")}
        style={{
          transform: "rotate(" + props.hoursDegrees + "deg)",
        }}
      ></div>
      <div
        className={[styles.minute, styles.hand].join(" ")}
        style={{
          transform: "rotate(" + props.minsDegrees + "deg)",
        }}
      ></div>
      <div className={styles.cover}></div>
      <div className={styles.second_bulb}></div>
      <div
        className={[styles.second, styles.hand].join(" ")}
        style={{
          transform: "rotate(" + props.secondsDegrees + "deg)",
        }}
      ></div>
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
