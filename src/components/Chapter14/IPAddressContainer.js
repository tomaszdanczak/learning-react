import React, { Component } from "react";
import IPAdress from "./IPAddress";

var xhr;

class IPAddressContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip_address: "...",
    };

    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/json?token=90ae791d910918", true);
    xhr.send();

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);

      this.setState({
        ip_address: response.ip,
      });
    }
  }

  render() {
    return <IPAdress ip={this.state.ip_address} />;
  }
}

export default IPAddressContainer;
