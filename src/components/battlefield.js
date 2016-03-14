import React from 'react';
import Card from './card';

class Battlefield extends React.Component {
  render() {
    const summoned = this.props.summoned.map(card => {
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
        {summoned}
      </div>
    );
  }
}

export default Battlefield;
