import { Component } from "react";
type isDarkMode = {
  mode: boolean;
};
export default class ThemeSwitcher extends Component<object, isDarkMode> {
  constructor(props: object) {
    super(props);
    this.state = {
      mode: false,
    };
  }
  handleClick = () => {
    this.setState({ mode: !this.state.mode });
  };

  render() {
    return (
      <body className={this.state.mode ? "dark" : "light"}>
        <h3>Chế độ {this.state.mode ? "Dark" : "Light"} đang bật</h3>
        <button onClick={this.handleClick}>Chuyển Theme</button>
      </body>
    );
  }
}
