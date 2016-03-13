import React from 'react';

class Hand extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-name">
          {this.props.card.name}
        </div>
        <div className="card-mana">
          Mana cost: {this.props.card.mana}
        </div>
        <div className="card-attack">
          Attack: {this.props.card.attack}
        </div>
        <div className="card-defence">
          Defence: {this.props.card.defence}
        </div>
      </div>
    );
  }
}

export default Hand;
