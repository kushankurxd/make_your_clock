import React from "react";
import * as actionTypes from "../action/actionsTypes";
import Clock_1 from "../../component/clock_1/clock_1";
import Clock_2 from "../../component/clock_2/clock_2";
import Clock_3 from "../../component/clock_3/clock_3";
import Clock_4 from "../../component/clock_4/clock_4";

const initialState = {
  clocks: [<Clock_1 />, <Clock_2 />, <Clock_3 />, <Clock_4/>],
  
  selected: 0,
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
    default:
      return state;
  }
};

export default reducer;
