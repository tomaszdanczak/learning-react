import React from "react";

class HelloWorld extends React.Component {
  render() {
    return <p>Witaj, {this.props.greetTarget}</p>;
  }
}

class Buttonify extends React.Component {
  render() {
    return (
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
}

const Chapter03 = () => {
  return (
    <div>
      <h1>Chapter 3</h1>
      <HelloWorld greetTarget="Batman" />
      <HelloWorld greetTarget="Iron Man" />
      <HelloWorld greetTarget="Nicolas Cage" />
      <HelloWorld greetTarget="Mega Man" />
      <HelloWorld greetTarget="Bono" />
      <HelloWorld greetTarget="Catwoman" />
      <Buttonify behavior="submit">WYŚLIJ DANE</Buttonify>
    </div>
  );
};

export default Chapter03;
