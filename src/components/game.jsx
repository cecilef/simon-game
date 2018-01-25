import React from 'react';
import {Key} from "./key";

export class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      // array of ids
      sequence: [],
      lastElementClicked: undefined,
      keys: [
        { color: 'yellow', id: 0},
        { color: 'blue', id: 1},
        { color: 'red', id: 2},
        { color: 'green', id: 3}
      ]
    };
  }

  initSequence() {
    var keyId = Math.floor(Math.random(3));
  }

  checkSequence(keyId) {

  }

  render() {
    return (
      <div className="game">
        <div className="board">
          {
            this.state.keys.map((key, index) => {
              return (
                <Key onClick={ this.checkSequence(index) } color={ key.color } key={ index }/>
              )
            })
          }
        </div>
        <span className="count">{}</span>
        <button type="button" className="btn btn-primary" onClick={this.initSequence()}>Start game</button>
      </div>
    )
  }
}
