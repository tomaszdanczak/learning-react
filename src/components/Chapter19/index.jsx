import React from "react";
import { createStore } from "redux";

function addColor(value) {
  return {
    type: "ADD",
    color: value,
  };
}

function removeColor(value) {
  return {
    type: "REMOVE",
    color: value,
  };
}

function favoriteColors(state, action) {
  if (state === undefined) {
    state = [];
  }

  if (action.type === "ADD") {
    return state.concat(action.color);
  } else if (action.type === "REMOVE") {
    return state.filter(function (item) {
      return item !== action.color;
    });
  } else {
    return state;
  }
}

var store = createStore(favoriteColors);
store.subscribe(render);
function render() {
  console.log(store.getState());
}

store.dispatch(addColor("niebieski"));
store.dispatch(addColor("żółty"));
store.dispatch(addColor("zielony"));
store.dispatch(addColor("czerwony"));
store.dispatch(addColor("szary"));
store.dispatch(addColor("pomarańczowy"));
store.dispatch(removeColor("szary"));

console.log(store.getState());

const Chapter19 = () => {
  return (
    <div>
      <h1>Chapter - 19</h1>
      <p>Check in the console</p>
    </div>
  );
};

export default Chapter19;
