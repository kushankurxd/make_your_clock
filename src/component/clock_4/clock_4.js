import React from "react";

import styles from "./clock_4.module.css";

import { connect } from "react-redux";
import Clock_hand_4 from "../Hands/clock_hand_4/clock_hand_4";

const clock_4 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.face}></div>
      <Clock_hand_4/>
      <div className={styles.number}>12</div>
      <div className={styles.number}>3</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    secondsDegrees: state.clk.secondsDegrees,
    minsDegrees: state.clk.minsDegrees,
    hoursDegrees: state.clk.hoursDegrees,
  };
};

export default connect(mapStateToProps)(clock_4);
