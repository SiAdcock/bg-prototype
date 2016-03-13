import React from 'react';
import { find } from 'lodash';
import Player from './player';
import Battlefield from './battlefield';
const fighterData = require('../data/fighter.json');
const wizardData = require('../data/wizard.json');

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wizard: {
        isMyTurn: true,
        deck: wizardData.deck,
        summoned: [],
        mana: 2,
        health: 20
      },
      fighter: {
        isMyTurn: false,
        deck: fighterData.deck,
        summoned: [],
        mana: 1,
        health: 20
      }
    };
  }

  turnOver() {
    const wizard = Object.assign({}, this.state.wizard, {
      isMyTurn: !this.state.wizard.isMyTurn,
      deck: this.state.wizard.deck.slice(),
      summoned: this.state.wizard.summoned.slice(),
      mana: 2
    });
    const fighter = Object.assign({}, this.state.fighter, {
      isMyTurn: !this.state.fighter.isMyTurn,
      deck: this.state.fighter.deck.slice(),
      summoned: this.state.fighter.summoned.slice(),
      mana: 1
    });

    this.setState({ wizard, fighter });
  }

  summon(player, cardId) {
    const oldPlayerState = this.state[player];
    const card = find(oldPlayerState.deck, {id: cardId});
    const remainingDeck = oldPlayerState.deck.filter(card => {
      return card.id !== cardId;
    });
    const nowSummoned = oldPlayerState.summoned.concat(card);
    const mana = oldPlayerState.mana - card.mana;
    const newPlayerState = Object.assign({}, oldPlayerState, {
      deck: remainingDeck,
      summoned: nowSummoned,
      mana
    });

    this.setState({
      [player]: newPlayerState
    });
  }

  render() {
    return (
      <div>
        <Player
          name="Player 1"
          playerClassName={wizardData.playerClassName}
          deck={this.state.wizard.deck}
          summon={this.state.wizard.isMyTurn && this.summon.bind(this, 'wizard')}
          turnOver={this.state.wizard.isMyTurn && this.turnOver.bind(this)}
          mana={this.state.wizard.mana}
          health={this.state.wizard.health}
        />
        <Battlefield
          player1Summoned={this.state.wizard.summoned}
          player2Summoned={this.state.fighter.summoned}
        />
        <Player
          name="Player 2"
          playerClassName={fighterData.playerClassName}
          deck={this.state.fighter.deck}
          summon={this.state.fighter.isMyTurn && this.summon.bind(this, 'fighter')}
          turnOver={this.state.fighter.isMyTurn && this.turnOver.bind(this)}
          mana={this.state.fighter.mana}
          health={this.state.fighter.health}
        />
      </div>
    );
  }
}

export default Game;
