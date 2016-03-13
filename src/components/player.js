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
        <h1>{this.props.name} - {this.props.playerClassName}</h1>
        <div>Health: {this.props.health}</div>
        <div>Mana: {this.props.mana}</div>
        <Hand
          cards={this.props.deck}
          summon={this.props.summon}
          mana={this.props.mana}
        />
        {turnOverBtn}
      </div>
    );
  }
}

export default Player;
