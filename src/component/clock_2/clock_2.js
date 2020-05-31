import React from "react";

import styles from "./clock_2.module.css";

import { connect } from "react-redux";

const clock_2 = (props) => {
  return (
    <div className={styles.clock}>
      <div className={styles.wrap}>
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
