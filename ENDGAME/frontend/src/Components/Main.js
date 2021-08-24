import React from "react";
import io from "socket.io"

import Login from "./Login";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";

let socket = io();


class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      socket.emit('message',  this.setState({ showEndGame: boolean, score: this.state.score + 1 }))
     
    } else {
      socket.emit('message',this.setState({ showEndGame: boolean }))
    }
  };

  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default Main;
