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
        isMyTurn: true,
        deck: wizard.deck,
        summoned: []
      },
      fighter: {
        isMyTurn: false,
        deck: fighter.deck,
        summoned: []
      }
    };
  }

  turnOver() {
    this.setState({
      wizard: {
        isMyTurn: !this.state.wizard.isMyTurn,
        deck: this.state.wizard.deck.slice(),
        summoned: this.state.wizard.summoned.slice()
      },
      fighter: {
        isMyTurn: !this.state.fighter.isMyTurn,
        deck: this.state.fighter.deck.slice(),
        summoned: this.state.fighter.summoned.slice()
      }
    });
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
        summoned: nowSummoned,
        isMyTurn: this.state[player].isMyTurn
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
          summon={this.state.wizard.isMyTurn && this.summon.bind(this, 'wizard')}
          turnOver={this.state.wizard.isMyTurn && this.turnOver.bind(this)}
        />
        <Battlefield
          player1Summoned={this.state.wizard.summoned}
          player2Summoned={this.state.fighter.summoned}
        />
        <Player
          name="Player 2"
          playerClass={fighter.playerClassName}
          deck={this.state.fighter.deck}
          summon={this.state.fighter.isMyTurn && this.summon.bind(this, 'fighter')}
          turnOver={this.state.fighter.isMyTurn && this.turnOver.bind(this)}
        />
      </div>
    );
  }
}

export default Game;
