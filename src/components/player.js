import React from 'react';
import Battlefield from './battlefield';
import PlayerInfo from './player-info';

class Player extends React.Component {
  render() {
    const playerInfo = (
      <PlayerInfo
        hand={this.props.deck}
        turnOver={this.props.turnOver}
        name={this.props.name}
        playerClassName={this.props.playerClassName}
        mana={this.props.mana}
        health={this.props.health}
        summon={this.props.summon}
      />
    );

    if (this.props.position === 'top') {
      return (
        <div className="player">
          {playerInfo}
          <Battlefield
            summoned={this.props.summoned}
          />
        </div>
      );
    }
    else {
      return (
        <div className="player">
          <Battlefield
            summoned={this.props.summoned}
          />
          {playerInfo}
        </div>
      );
    }
  }
}

export default Player;
