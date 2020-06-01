import React from "react";

import styles from "./clock.module.css";
import Clock_themes from "../../component/clock_themes/clock_themes";

import * as actionTypes from "../../store/action/actionsTypes";
import { connect } from "react-redux";

class Clock extends React.Component {
  componentDidMount() {
    this.props.initClock();
    this.props.tickTock();
    this.timer = setInterval(() => this.props.tickTock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.clock_body}>
        <div className={styles.wrapper}>
          {this.props.clocks[this.props.selected].body}
        </div>
        <Clock_themes />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clocks: state.clk.clocks,
    selected: state.clk.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initClock: () => dispatch({ type: actionTypes.INIT_CLOCK }),
    tickTock: () => dispatch({ type: actionTypes.TICK_TOK }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
