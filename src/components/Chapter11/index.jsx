import React from "react";
class Counter extends React.Component {
  render() {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      dontWeight: "bold",
    };

    console.log("render(): komponent Counter");

    return <div style={textStyle}>{this.props.display}</div>;
  }
}

class CounterParent extends React.Component {
  constructor(props) {
    super(props);

    console.log("konstruktor: domyślny stan!");

    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
  }

  increase(e) {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentWillUpdate(newProps, newState) {
    console.log("componentWillUpdate(): komponent zostanie zaktualizowany!");
  }

  componentDidUpdate(currentProps, currentState) {
    console.log("componentDidUpdate(): komponent zaktualizowany!");
  }

  componentWillMount() {
    console.log("componentWillMount(): komponent zostanie zamontowany!");
  }

  componentDidMount() {
    console.log("componentDidMount(): komponent zamontowany!");
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount(): komponent zostanie uzunięty z modelu DOM!"
    );
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate(): czy komponent trzeba zaktualizować?");
    if (newState.count < 5) {
      console.log("shouldComponentUpdate(): komponent trzeba zaktualizować!");
      return true;
    } else {
      // ReactDOM.unmountComponentAtNode(destination)
      // console.log("shouldComponentUpdate(): komponentu nie trzeba aktualizować!");
      // return false;
      // ReactDOM.unmountComponentAtNode(destination);
      console.log(
        "shouldComponentUpdate(): komponentu nie trzeba aktualizować!"
      );
      return false;
    }
  }

  componentWillReceiveProps(newProps) {
    console.log(
      "componentWillReceiveProps(): komponent uzyska nowe właściwości!"
    );
  }

  render() {
    var backgroundStyle = {
      padding: 50,
      border: "#333 2px dotted",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center",
      boxSizing: "content-box",
    };

    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count} />
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

console.log("defaultProps: domyślne właściwości!");
CounterParent.defaultProps = {};

const Chapter11 = () => {
  return (
    <div>
      <h1>Chapter - 11</h1>
      <CounterParent />
      <p>Check in the console</p>
    </div>
  );
};

export default Chapter11;
