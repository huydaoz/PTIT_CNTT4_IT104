import { Component } from "react";

type CounterState = {
  count: number;
};

export default class Counter extends Component<object, CounterState> {
  intervalId: number | undefined;

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count === 10 ? 0 : prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>BỘ ĐẾM</h1>
        <p>Giá trị hiện tại: {this.state.count}</p>
      </div>
    );
  }
}
