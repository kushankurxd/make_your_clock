import React from "react";

import styles from "./clock_1.css";

const clock_1 = (props) => {
  return (
    <div className="clock">
      <div className="outer-clock-face">
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
        <div className="inner-clock-face">
          <div
            className="hand hour-hand"
            style={{
              transform: "rotate(" + (props.hoursDegrees + 90) + "deg)",
            }}
          ></div>
          <div
            className="hand min-hand"
            style={{ transform: "rotate(" + (props.minsDegrees + 90) + "deg)" }}
          ></div>
          <div
            className="hand second-hand"
            style={{
              transform: "rotate(" + (props.secondsDegrees + 90) + "deg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default clock_1;
