import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    );
  }
}

class Label extends React.Component {
  render() {
    return <Display {...this.props} />;
  }
}

class Shirt extends React.Component {
  render() {
    return (
      <div>
        <Label {...this.props} />
      </div>
    );
  }
}

const Chapter06 = () => {
  return (
    <div>
      <h1>Chapter 6</h1>
      <Shirt color="jasnoniebieski" num="3.14" size="średni" />
    </div>
  );
};

export default Chapter06;
