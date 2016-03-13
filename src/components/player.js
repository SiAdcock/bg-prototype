import React from 'react';
import Hand from './hand';

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <h1>{this.props.name}</h1>
        <Hand cards={this.props.deck}/>
      </div>
    );
  }
}

export default Player;
