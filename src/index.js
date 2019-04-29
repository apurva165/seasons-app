import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errMessage: ""
  //   };
  // }

  state = { lat: null, errMessage: "" };

  componentDidMount() {
    console.log("componentDidMount");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <li> Error :{this.state.errMessage}</li>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner />;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
