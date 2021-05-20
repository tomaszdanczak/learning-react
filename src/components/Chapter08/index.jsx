import React from "react";
class LightningCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strikes: 0,
    };

    this.timerTick = this.timerTick.bind(this);
  }

  timerTick() {
    this.setState((prevState) => {
      return {
        strikes: prevState.strikes + 100,
      };
    });
  }

  componentDidMount() {
    const intervalId = setInterval(this.timerTick, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return <h1>{this.state.strikes}</h1>;
  }
}

class LightningCounterDisplay extends React.Component {
  render() {
    var divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10,
    };

    return (
      <div style={divStyle}>
        <LightningCounter />
      </div>
    );
  }
}

const Chapter08 = () => {
  return (
    <div>
      <h1>Chapter 8</h1>
      <LightningCounterDisplay />
    </div>
  );
};

export default Chapter08;
