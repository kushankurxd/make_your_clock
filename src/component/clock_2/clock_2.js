import React from "react";

import styles from "./clock_2.module.css";

import { connect } from "react-redux";
import Clock_hand_2 from "../Hands/clock_hand_2/clock_hand_2";

const clock_2 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.wrap}>
        <Clock_hand_2 />
      </div>
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

export default connect(mapStateToProps)(clock_2);
