import React from "react";
class Letter extends React.Component {
  render() {
    var letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: this.props.bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center",
    };

    return <div style={letterStyle}>{this.props.children}</div>;
  }
}

const Chapter04 = () => {
  return (
    <div>
      <h1>Chapter 4</h1>
      <div style={{ padding: 50, backgroundColor: "#fff" }}>
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#FF605F">E</Letter>
        <Letter bgcolor="#FFD52E">I</Letter>
        <Letter bgcolor="#49DD8E">O</Letter>
        <Letter bgcolor="#AE99FF">U</Letter>
      </div>
    </div>
  );
};

export default Chapter04;
