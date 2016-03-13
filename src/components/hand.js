import React from 'react';
import Card from './card';

class Hand extends React.Component {
  render() {
    const cards = this.props.cards.map((card) => {
      return (
        <Card card={card}/>
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
