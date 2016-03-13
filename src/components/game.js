import React from 'react';
import Player from './player';
import Battlefield from './battlefield';
const fighter = require('../data/fighter.json');
const wizard = require('../data/wizard.json');

class Game extends React.Component {
  render() {
    return (
      <div>
        <Player
          name="Player 1"
          playerClass={wizard.playerClassName}
          deck={wizard.deck}
        />
        <Battlefield/>
        <Player
          name="Player 2"
          playerClass={fighter.playerClassName}
          deck={fighter.deck}
        />
      </div>
    );
  }
}

export default Game;
