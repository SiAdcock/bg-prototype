import React from 'react';
import Card from './card';

class Battlefield extends React.Component {
  render() {
    const player1Summoned = this.props.player1Summoned.map(card => {
      const key = `summoned-card-${card.id}`;

      return (
        <Card
          key={key}
          card={card}
        />
      );
    });
    const player2Summoned = this.props.player2Summoned.map(card => {
      const key = `summoned-card-${card.id}`;

      return (
        <Card
          key={key}
          card={card}
        />
      );
    });

    return (
      <div className="battlefield">
        <div className="battlefield-player">
          {player1Summoned}
        </div>
        <div className="battlefield-player">
          {player2Summoned}
        </div>
      </div>
    );
  }
}

export default Battlefield;
