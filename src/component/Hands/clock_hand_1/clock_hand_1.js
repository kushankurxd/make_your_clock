import React from "react";

import styles from "./clock_hand_1.module.css";

import { connect } from "react-redux";

const clock_hand = (props) => {
  return (
    <React.Fragment>
      <div
        className={[styles.hand, styles.hour_hand].join(" ")}
        style={{
          transform: "rotate(" + (props.hoursDegrees + 90) + "deg)",
        }}
      ></div>
      <div
        className={[styles.hand, styles.min_hand].join(" ")}
        style={{
          transform: "rotate(" + (props.minsDegrees + 90) + "deg)",
        }}
      ></div>
      <div
        className={[styles.hand, styles.second_hand].join(" ")}
        style={{
          transform: "rotate(" + (props.secondsDegrees + 90) + "deg)",
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
