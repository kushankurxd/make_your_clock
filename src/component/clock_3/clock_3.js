import React from "react";

import styles from "./clock_3.module.css";

import { connect } from "react-redux";

const clock_3 = (props) => {
  return (
    <div className={styles.clock}>
      {props.hand}
      <div className={styles.time}>
        <span>
          {" "}
          <strong> {props.hours} </strong> : {props.mins} :{" "}
          <small> {props.seconds} </small>
        </span>
      </div>
      <ul>
        <li>
          <span>1</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
        <li>
          <span>4</span>
        </li>
        <li>
          <span>5</span>
        </li>
        <li>
          <span>6</span>
        </li>
        <li>
          <span>7</span>
        </li>
        <li>
          <span>8</span>
        </li>
        <li>
          <span>9</span>
        </li>
        <li>
          <span>10</span>
        </li>
        <li>
          <span>11</span>
        </li>
        <li>
          <span>12</span>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hand: state.clk.clocks[2].hand,
    hours: state.clk.hours,
    mins: state.clk.mins,
    seconds: state.clk.seconds,
  };
};

export default connect(mapStateToProps)(clock_3);
