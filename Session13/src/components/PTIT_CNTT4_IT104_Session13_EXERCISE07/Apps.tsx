import { Component } from "react";

export default class Apps extends Component {
  state = {
    theme: "light",
    language: "vietnamese",
  };

  render() {
    const { theme, language } = this.state;

    const themeStyle =
      theme === "dark"
        ? {
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            border: "1px solid gray",
          }
        : { backgroundColor: "black", color: "white", padding: "20px" };

    const themeText = theme === "dark" ? "Sáng" : "Tối";
    const languageText = language === "English" ? "Tiếng Việt" : "English";

    return (
      <div style={themeStyle}>
        <h2>Nền: {themeText}</h2>
        <h2>Ngôn ngữ: {languageText}</h2>
      </div>
    );
  }
}
