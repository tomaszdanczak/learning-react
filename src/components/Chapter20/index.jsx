import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducer";
import App from "./App";
import "./index.css";

const Chapter20 = () => {
  //Magazyn
  var store = createStore(counter);

  return (
    <>
      <h2>Chapter - 20</h2>
      <div className="body--chapter20">
        <div>
          <Provider store={store}>
            <App />
          </Provider>
        </div>
      </div>
    </>
  );
};

export default Chapter20;
