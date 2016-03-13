import React from 'react';
import Hand from './hand';

class Player extends React.Component {
  render() {
    let turnOverBtn;

    if (this.props.turnOver) {
      turnOverBtn = (
        <button onClick={this.props.turnOver}>Turn Over</button>
      );
    }
    return (
      <div className="player">
        <h1>{this.props.name}</h1>
        <Hand
          cards={this.props.deck}
          summon={this.props.summon}
        />
        {turnOverBtn}
      </div>
    );
  }
}

export default Player;
