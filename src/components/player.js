import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Player;
