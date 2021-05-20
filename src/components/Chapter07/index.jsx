import React from "react";

class Stuff extends React.Component {
  render() {
    return (
      <>
        <p>Zwracana</p>
        <p>lista</p>
        <p>różnych rzeczy!</p>
      </>
    );
  }
}

const Chapter07 = () => {
  return (
    <div>
      <h1>Chapter 7</h1>
      <Stuff />
    </div>
  );
};

export default Chapter07;
