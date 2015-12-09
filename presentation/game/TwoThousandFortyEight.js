import React, { Component } from "react";
import GridContainer from "./components/GridContainer";
import TileContainer from "./components/TileContainer";
import GameManager from "./GameManager";

require("../../assets/main.scss");

export default class TwoThousandFortyEight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manager: new GameManager(4)
    };
  }

  onKeyUp(e) {
    switch(e.keyCode) {
      case 87: // w
        this.onTop();
        break;
      case 65: // a
        this.onLeft();
        break;
      case 83: // s
        this.onBottom();
        break;
      case 68: // d
        this.onRight();
        break;
    }
  }

  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyUp.bind(this));
  }

  onLeft() {
    var manager = this.state.manager;
    manager.move(3);
    this.setState({
      manager: manager
    });
  }

  onRight() {
    var manager = this.state.manager;
    manager.move(1);
    this.setState({
      manager: manager
    });
  }

  onTop() {
    var manager = this.state.manager;
    manager.move(0);
    this.setState({
      manager: manager
    });
  }

  onBottom() {
    var manager = this.state.manager;
    manager.move(2);
    this.setState({
      manager: manager
    });
  }

  render() {
    return (
      <div className="game-wrapper">
        <div className="game-container">
          <GridContainer />
          <TileContainer board={this.state.manager.grid} />
        </div>
      </div>
    );
  }
}
