import React, { Component } from "react";
import "./IPAddress.css";

class IPAdress extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ip}</h1>
        <p>(To jest Twój adres IP... chyba :P).</p>
      </div>
    );
  }
}

export default IPAdress;
