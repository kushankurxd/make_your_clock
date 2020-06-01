import React from "react";

import styles from "./clock_4.module.css";

import { connect } from "react-redux";

const clock_4 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.face}></div>
      {props.hand}
      <div className={styles.number}>12</div>
      <div className={styles.number}>3</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hand: state.clk.clocks[3].hand,
  };
};

export default connect(mapStateToProps)(clock_4);
