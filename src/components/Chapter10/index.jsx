import React from "react";
class Counter extends React.Component {
  render() {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      boxSizing: "content-box",
      lineHeight: "1.2",
    };

    return <div style={textStyle}>{this.props.display}</div>;
  }
}

class CounterParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
  }

  increase(e) {
    var currentCount = this.state.count;

    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    this.setState({ count: currentCount });
  }

  render() {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center",
      boxSizing: "content-box",
    };

    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px",
    };

    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count} />
        <PlusButton clickHandler={this.increase} style={buttonStyle} />
      </div>
    );
  }
}

class PlusButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickHandler} style={this.props.style}>
        +
      </button>
    );
  }
}

const Chapter10 = () => {
  return (
    <div>
      <h1>Chapter 10</h1>
      <CounterParent />
    </div>
  );
};

export default Chapter10;
