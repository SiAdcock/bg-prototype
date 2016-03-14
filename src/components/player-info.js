import React from 'react';
import Card from './card';

class PlayerInfo extends React.Component {
  render() {
    const hand = this.props.hand.map((card) => {
      const key = `summoned-card-${card.id}`;
      const isSummonable = this.props.mana - card.mana >= 0;

      return (
        <Card
          key={key}
          card={card}
          summon={isSummonable && this.props.summon}
        />
      );
    });
    let turnOverBtn;

    if (this.props.turnOver) {
      turnOverBtn = (
        <button onClick={this.props.turnOver}>Turn Over</button>
      );
    }

    return (
      <div className="player-info">
        <h1>{this.props.name} - {this.props.playerClassName}</h1>
        <div>Health: {this.props.health}</div>
        <div>Mana: {this.props.mana}</div>
        {hand}
        {turnOverBtn}
      </div>
    );
  }
}

export default PlayerInfo;
