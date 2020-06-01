import React from "react";

import styles from "./clock_hand_2.module.css";

import { connect } from "react-redux";

const clock_hand = (props) => {
  return (
    <React.Fragment>
      <span
        className={styles.hour}
        style={{
          transform: "rotate(" + (props.hoursDegrees + 0) + "deg)",
        }}
      ></span>
      <span
        className={styles.minute}
        style={{
          transform: "rotate(" + (props.minsDegrees + 0) + "deg)",
        }}
      ></span>
      <span
        className={styles.second}
        style={{
          transform: "rotate(" + (props.secondsDegrees + 0) + "deg)",
        }}
      ></span>
      <span className={styles.dot}></span>
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
