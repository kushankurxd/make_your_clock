import React from "react";

import styles from "./clock_2.module.css";

import { connect } from "react-redux";

const clock_2 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.wrap}>{props.hand}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hand: state.clk.clocks[1].hand,
  };
};

export default connect(mapStateToProps)(clock_2);
