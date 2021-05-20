import React from "react";

const container = {
  padding: 50,
  backgroundColor: "#eee",
};

const h2 = {
  fontSize: 144,
  fontFamily: "sans-serif",
  color: "#0080A8",
  overflow: "hidden",
};
const Chapter02 = () => {
  return (
    <div>
      <h1>Chapter 2</h1>
      <div style={container}>
        <h2 style={h2}>Tomasz Dańczak</h2>
      </div>
    </div>
  );
};

export default Chapter02;
