import React from "react";
import ReactDOM from "react-dom";
class Colorizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      bgColor: "white",
      buttonStyles: { backgroundColor: "#666", color: "#fff" },
    };

    this.colorValue = this.colorValue.bind(this);
    this.setNewColor = this.setNewColor.bind(this);
  }

  colorValue(e) {
    this.setState({
      color: e.target.value,
    });
  }

  setNewColor(e) {
    this.setState({
      bgColor: this.state.color,
    });

    this._input.focus();
    this._input.value = "";

    e.preventDefault();
  }

  render() {
    var squareStyle = {
      backgroundColor: this.state.bgColor,
      boxShadow: "0px 0px 25px 0px #333",
      width: 242,
      height: 242,
      marginBottom: 15,
    };

    const inputStyle = {
      padding: 10,
      fontSize: 16,
      border: "2px solid #ccc",
    };

    const buttonStyle = {
      padding: 10,
      fontSize: 16,
      margin: 10,
      backgroundColor: this.state.buttonStyles.backgroundColor,
      color: "#fff",
      border: `2px solid ${this.state.buttonStyles.borderColor}`,
      cursor: "pointer",
    };

    var self = this;

    return (
      <div className="colorArea">
        <div style={squareStyle}></div>

        <form onSubmit={this.setNewColor}>
          <input
            style={inputStyle}
            onChange={this.colorValue}
            ref={function (el) {
              self._input = el;
            }}
            placeholder="Wpisz nazwę koloru"
          ></input>
          <button
            onMouseEnter={() =>
              this.setState({
                buttonStyles: { backgroundColor: "#111", borderColor: "#111" },
              })
            }
            onMouseLeave={() =>
              this.setState({
                buttonStyles: { backgroundColor: "#666", borderColor: "#666" },
              })
            }
            style={buttonStyle}
            type="submit"
          >
            OK
          </button>
        </form>
        <ColorLabel color={this.state.bgColor} />
      </div>
    );
  }
}

class ColorLabel extends React.Component {
  render() {
    if (document.getElementById("colorHeading")) {
      return ReactDOM.createPortal(
        ": " + this.props.color,
        document.getElementById("colorHeading")
      );
    } else {
      return "";
    }
  }
}

const Chapter12 = () => {
  const colorHeading = {
    padding: 0,
    margin: 50,
    marginBottom: -20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  };

  const container = {
    padding: 50,
    backgroundColor: "#fff",
  };

  return (
    <div>
      <h1>Chapter 12</h1>

      <h2 style={colorHeading} id="colorHeading">
        Koloryzator
      </h2>
      <div style={container}>
        <Colorizer />
      </div>
    </div>
  );
};

export default Chapter12;
