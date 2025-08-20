import { Component } from "react";

type State = {
  company: string;
};

export default class UpdateState extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      company: "Rikkei Academy",
    };
  }

  handleChange = () => {
    this.setState({ company: "Rikkei Soft" });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Tên công ty: {this.state.company}</h2>
        <button
          onClick={this.handleChange}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid #black",
            borderRadius: "4px",
            backgroundColor: "red",
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
