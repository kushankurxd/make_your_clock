import React from "react";

import styles from "./clock_themes.module.css";

import { connect } from "react-redux";
import * as actionTypes from "../../store/action/actionsTypes";

import Clock_hand_1 from "../Hands/clock_hand_1/clock_hand_1";
import Clock_hand_2 from "../Hands/clock_hand_2/clock_hand_2";
import Clock_hand_3 from "../Hands/clock_hand_3/clock_hand_3";
import Clock_hand_4 from "../Hands/clock_hand_4/clock_hand_4";

const clock_themes = (props) => {
  let list = props.clocks.map((clock, index) => (
    <div
      key={index}
      className={styles.wrapper}
      onClick={() => props.changeTheme(index)}
    >
      {clock.body}
    </div>
  ));

  if (props.edit) {
    list = [
      <Clock_hand_1 />,
      <Clock_hand_2 />,
      <Clock_hand_3 />,
      <Clock_hand_4 />,
    ].map((hand, index) => (
      <div
        key={index}
        className={styles.wrapper}
        onClick={() => props.chnageHand(index)}
      >
        {hand}
      </div>
    ));
  }

  return (
    <div className={styles.main}>
      <ul className={styles.options}>
        <li onClick={() => props.editClock(false)}>All</li>
        <li onClick={() => props.editClock(true)}>Edit</li>
      </ul>
      <div className={styles.list}>{list}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clocks: state.clk.clocks,
    edit: state.clk.edit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (selected) =>
      dispatch({ type: actionTypes.CHANGE_THEME, selected: selected }),
    editClock: (edit) => dispatch({ type: actionTypes.EDIT_CLOCK, edit: edit }),
    chnageHand: (selected) =>
      dispatch({ type: actionTypes.CHANGE_HAND, selected: selected }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(clock_themes);
