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

  let icon = (
    <div className={styles.fab} onClick={() => props.editClock(true)}>
      &#10084;
    </div>
  );

  if (props.edit) {
    list = props.hands.map((hand, index) => (
      <div
        key={index}
        className={styles.wrapper}
        onClick={() => props.chnageHand(index)}
      >
        {hand}
      </div>
    ));

    icon = (
      <div className={styles.fab} onClick={() => props.editClock(false)}>
        &#10007;
      </div>
    );
  }

  return (
    <div className={styles.main}>
      {icon}
      <div className={styles.list}>{list}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clocks: state.clk.clocks,
    hands: state.clk.hands,
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
