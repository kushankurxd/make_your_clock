import React from "react";

import styles from "./clock_themes.module.css";
import Clock_1 from "../clock_1/clock_1";
import Clock_2 from "../clock_2/clock_2";

import { connect } from "react-redux";
import * as actionTypes from "../../store/action/actionsTypes";

const clock_themes = (props) => {
  return (
    <div className={styles.main}>
      {props.clocks.map((clock, index) => (
        <div
          key={index}
          className={styles.wrapper}
          onClick={() => props.changeTheme(index)}
        >
          {clock}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clocks: state.clk.clocks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (selected) =>
      dispatch({ type: actionTypes.CHANGE_THEME, selected: selected }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(clock_themes);
