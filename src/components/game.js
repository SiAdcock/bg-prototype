import React from 'react';
import Player from './player';
import Battlefield from './battlefield';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Player name="Player 1"/>
        <Battlefield/>
        <Player name="Player 2"/>
      </div>
    );
  }
}

export default Game;
