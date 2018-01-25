import React from 'react';
import {Key} from "./key";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      // array of keys {id, color}
      repetitions: []
    };
  }

  initSequence() {

  }

  render() {
    return (
      <div className="game">
        <div className="board">
          <Key color="'yellow" key={0}/>
          <Key color="'blue" key={1}/>
          <Key color="'red" key={2}/>
          <Key color="'green" key={3}/>
        </div>
        <button type="button" className="btn btn-primary">Run sequence</button>
      </div>
    )
  }
}
