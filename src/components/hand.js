import React from 'react';
import Card from './card';

class Hand extends React.Component {
  render() {
    const cards = this.props.cards.map((card) => {
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
    return (
      <div className="hand">
        {cards}
      </div>
    );
  }
}

export default Hand;
