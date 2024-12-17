import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row align-items">
          
          <div className="dark">
            <h1 className="font-weight-bold text-center">How to play?</h1> 
            <p >
              <h3>Stone paper Scissor</h3>
              Click button below the game image to play.
              Familiarize yourself with the game interface. You'll see three buttons representing the choices of rock, paper, and scissors.
              Click on one of the buttons to select your move. You can choose between rock, paper, or scissors.
              After you've made your choice, the game will display the result of the round you won, lost, or tied against the computer's move.
              <h3>Tic Tac toe</h3>
              Click on any empty box to place your symbol (X or O) on the board.
              Try to align three of your symbols horizontally, vertically, or diagonally to win the game.
              If you succeed, the game will declare you as the winner.
              After the game ends, you have the option to click the "Play Again" button to reset.
              <h3>Chrome Dinosaur</h3>
              To start playing, press the space bar on your keyboard or tap the dinosaur icon if you're using a touchscreen device. 
              The game will begin, and the dinosaur will start running.As the dinosaur runs, it will encounter various obstacles (cactus). 
              Use the space bar to make the dinosaur jump over these obstacles.
              The objective of the game is to keep the dinosaur running for as long as possible without hitting any obstacles.
              <p>.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
