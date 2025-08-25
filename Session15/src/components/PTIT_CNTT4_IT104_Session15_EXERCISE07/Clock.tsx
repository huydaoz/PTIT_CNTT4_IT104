import { Component } from "react";

type ClockState = {
  time: string;
};

export default class Clock extends Component<object, ClockState> {
  intervalId: number | undefined;

  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <p>Thời gian hiện tại: {this.state.time}</p>
      </div>
    );
  }
}
