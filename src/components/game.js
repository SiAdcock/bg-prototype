import React from 'react';
import { find } from 'lodash';
import Player from './player';
import Battlefield from './battlefield';
const fighter = require('../data/fighter.json');
const wizard = require('../data/wizard.json');

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wizard: {
        deck: wizard.deck,
        summoned: []
      },
      fighter: {
        deck: fighter.deck,
        summoned: []
      }
    };
  }
  summon(player, cardId) {
    console.log('Summoning', cardId);

    const remainingDeck = this.state[player].deck.filter(card => {
      return card.id !== cardId;
    });
    const nowSummoned = this.state[player].summoned.concat(
      find(this.state[player].deck, {id: cardId})
    );

    this.setState({
      [player]: {
        deck: remainingDeck,
        summoned: nowSummoned
      }
    });
  }
  render() {
    return (
      <div>
        <Player
          name="Player 1"
          playerClass={wizard.playerClassName}
          deck={this.state.wizard.deck}
          summon={this.summon.bind(this, 'wizard')}
        />
        <Battlefield
          player1Summoned={this.state.wizard.summoned}
          player2Summoned={this.state.fighter.summoned}
        />
        <Player
          name="Player 2"
          playerClass={fighter.playerClassName}
          deck={this.state.fighter.deck}
          summon={this.summon.bind(this, 'fighter')}
        />
      </div>
    );
  }
}

export default Game;
