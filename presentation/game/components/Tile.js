import React, { Component } from 'react';
import names from 'classnames';
import {Motion, spring} from 'react-motion';

export default class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.model
    };
  }

  getPositionClassName(p) {
    return `tile-position-${p.x+1}-${p.y+1}`;
  }

  render() {
    var model = this.state.model;
    var prev = model.previousPosition || { x: model.x, y: model.y };
    var next = { x: model.x, y: model.y };


    var classes = names(
      'tile',
      `tile-${model.value}`,
      {
        'tile-super': model.value > 2048,
        'tile-merged': ! model.previousPosition && model.mergedFrom,
        'tile-new': ! model.previousPosition && ! model.mergedFrom
      },
    );

    return (
      <Motion defaultStyle={{x: prev.x * 121, y: prev.y * 121}} style={{x: spring(next.x * 121, [1000, 70]), y: spring(next.y * 121, [1000, 70])}}>
        {({x, y}) => 
          <div className={classes} style={{
              WebkitTransform: `translate(${x}px, ${y}px)`,
              transform: `translate(${x}px, ${y}px)`,
            }}>
            <div className="tile-inner">
              {model.value}
            </div>
          </div>
        }
      </Motion>
    );
  }
}
