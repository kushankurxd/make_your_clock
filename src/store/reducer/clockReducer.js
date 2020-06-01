import React from "react";
import * as actionTypes from "../action/actionsTypes";
import Clock_1 from "../../component/clock_1/clock_1";
import Clock_2 from "../../component/clock_2/clock_2";
import Clock_3 from "../../component/clock_3/clock_3";
import Clock_4 from "../../component/clock_4/clock_4";
import Clock_hand_1 from "../../component/Hands/clock_hand_1/clock_hand_1";
import Clock_hand_2 from "../../component/Hands/clock_hand_2/clock_hand_2";
import Clock_hand_3 from "../../component/Hands/clock_hand_3/clock_hand_3";
import Clock_hand_4 from "../../component/Hands/clock_hand_4/clock_hand_4";

const initialState = {
  clocks: [
    { body: <Clock_1 />, hand: <Clock_hand_1 /> },
    { body: <Clock_2 />, hand: <Clock_hand_2 /> },
    { body: <Clock_3 />, hand: <Clock_hand_3 /> },
    { body: <Clock_4 />, hand: <Clock_hand_4 /> },
  ],

  selected: 0,
  edit: false,

  secondsDegrees: 0.0,
  minsDegrees: 0.0,
  hoursDegrees: 0.0,

  hours: 0,
  mins: 0,
  seconds: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CLOCK:
      return {
        ...state,
        selected: 1,
      };
    case actionTypes.TICK_TOK:
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360;

      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;

      const hours = now.getHours();
      const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30;
      return {
        ...state,
        secondsDegrees: secondsDegrees,
        minsDegrees: minsDegrees,
        hoursDegrees: hoursDegrees,

        hours: hours,
        mins: mins,
        seconds: seconds,
      };
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        selected: action.selected,
      };
    case actionTypes.EDIT_CLOCK:
      return {
        ...state,
        edit: action.edit,
      };
    case actionTypes.CHANGE_HAND:
      let hand = null;
      switch (action.selected) {
        case 0:
          hand = <Clock_hand_1 />;
          break;
        case 1:
          hand = <Clock_hand_2 />;
          break;
        case 2:
          hand = <Clock_hand_3 />;
          break;
        case 3:
          hand = <Clock_hand_4 />;
          break;
        default:
          break;
      }
      let clocks = [];
      for (let i in state.clocks) {
        if (i == state.selected) {
          clocks.push({ body: state.clocks[i].body, hand: hand });
        } else {
          clocks.push(state.clocks[i]);
        }
      }
      return {
        ...state,
        clocks: clocks,
      };
    default:
      return state;
  }
};

export default reducer;
