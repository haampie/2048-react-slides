import React, { Component } from "react";
import GridContainer from "./components/GridContainer";
import TileContainer from "./components/TileContainer";
import GameManager from "./GameManager";

require("../../assets/main.scss");

export default class TwoThousandFortyEight extends Component {
  constructor(props) {
    super(props);

    var manager = new GameManager(4);

    console.log(props);
    if(props.keyboard) {
      manager.addStartTiles();
    }

    this.state = {
      manager: manager,
      movenum: 0
    };
  }

  onKeyUp(e) {
    if(this.props.keyboard)
    {
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

      return;
    }

    // Continue with D
    if(e.keyCode == 68)
    {
      this.performNextMove();
    }
  }

  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyUp.bind(this));
  }

  showNewPosition(manager) {
    console.log('before');
    this.setState({
      manager: manager
    })
    console.log('after');
  }

  onLeft() {
    var manager = this.state.manager;
    if(manager.move(3))
    {
      manager.addRandomTile();
      this.showNewPosition(manager);
    }
  }

  onRight() {
    var manager = this.state.manager;
    if(manager.move(1))
    {
      manager.addRandomTile();
      this.showNewPosition(manager);
    }
  }

  onTop() {
    var manager = this.state.manager;
    if(manager.move(0))
    {
      manager.addRandomTile();
      this.showNewPosition(manager);
    }
  }

  onBottom() {
    var manager = this.state.manager;
    if(manager.move(2))
    {
      manager.addRandomTile();
      this.showNewPosition(manager);
    }
  }

  performNextMove() {
    var list = this.props.movelist;
    var manager = this.state.manager;
    if(this.state.movenum < list.length)
    {
      var move = list[this.state.movenum];
      switch(move.type)
      {
        case "add":
          manager.addDeterminedTile({
            x: move.x,
            y: move.y
          }, move.value);
        break;
        case "move":
          manager.move(move.direction);
        break;
      }
      this.setState({
        manager: manager,
        movenum: this.state.movenum + 1
      });
    }
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
