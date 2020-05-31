import React from "react";
import Clock_1 from "../../component/clock_1/clock_1";
import Clock_2 from "../../component/clock_2/clock_2";

import "./clock.css";

class Clock extends React.Component {
  state = {
    secondsDegrees: 0.0,
    minsDegrees: 0.0,
    hoursDegrees: 0.0,
  };

  setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;

    const hour = now.getHours();
    const hoursDegrees = (hour / 12) * 360 + (mins / 60) * 30;

    this.setState({
      secondsDegrees: secondsDegrees,
      minsDegrees: minsDegrees,
      hoursDegrees: hoursDegrees,
    });
  };

  componentDidMount() {
    this.timer = setInterval(() => this.setDate(), 1000);
    this.setDate();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <Clock_1
          secondsDegrees={this.state.secondsDegrees}
          minsDegrees={this.state.minsDegrees}
          hoursDegrees={this.state.hoursDegrees}
        />
        {/* <Clock_2
          secondsDegrees={this.state.secondsDegrees}
          minsDegrees={this.state.minsDegrees}
          hoursDegrees={this.state.hoursDegrees}
        /> */}
      </div>
    );
  }
}

export default Clock;
