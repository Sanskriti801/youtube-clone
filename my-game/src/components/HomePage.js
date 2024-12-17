import React from 'react';
import RockPaperScissors from './RockPaperScissors'; // Update the path accordingly
import TicTacToe from './TicTacToe'; // Update the path accordingly
import DinosaurGame from './DinosaurGame'; // Update the path accordingly

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><a href="/RockPaperScissors.js" target="_blank">Rock Paper Scissors</a></li>
        <li><a href="/TicTacToe.js" target="_blank">Tic Tac Toe</a></li>
        <li><a href="/DinosaurGame.js" target="_blank">Dinosaur Game</a></li>
      </ul>
    </div>
  );
}

export default HomePage;



