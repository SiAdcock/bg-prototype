import React from 'react';
import Card from './card';

class Hand extends React.Component {
  render() {
    const cards = this.props.cards.map((card) => {
      const key = `summoned-card-${card.id}`;

      return (
        <Card
          key={key}
          card={card}
          summon={this.props.summon}
          isSummonable={true}
        />
      );
    });
    return (
      <div className="hand">
        {cards}
      </div>
    );
  }
}

export default Hand;
