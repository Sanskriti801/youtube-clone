import React from 'react';
//import RockPaperScissors from './RockPaperScissors';
//import RockPaperScissors from './RockPaperScissors';
//import TicTacToe from './TicTacToe';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="a-display-container a-content a-center" style={{ maxWidth: '1600px' }}>
        <img className="a-image" src="dp2.jpg" alt="Me" width="1500" height="700" />
        <div className="a-display-middle a-padding-large a-border a-wide a-text-light-grey a-center">
          <h1 className="a-hide-medium a-hide-small a-xxxlarge">OFFLINE GAME PAGE</h1>
          <h5 className="a-hide-large">OFFLINE GAME PAGE</h5>
          <h3 className="a-hide-medium a-hide-small">SANSKRITI SINGH</h3>
        </div>
        {/* Navbar */}
        <div className="a-bar a-light-grey a-round a-display-bottommiddle a-hide-small" style={{ bottom: '-16px' }}>
          <a href="#" className="a-bar-item a-button">Home</a>
          <a href="#offline" className="a-bar-item a-button">Offline Games</a>
          <a href="#about" className="a-bar-item a-button">How to?</a>
          <a href="#contact" className="a-bar-item a-button">Contact</a>
        </div>
      </header>

      {/* Navbar for phone */}
      <div className="a-center a-light-grey a-padding-16 a-hide-large a-hide-medium">
        <div className="a-bar a-light-grey">
          <a href="#" className="a-bar-item a-button">Home</a>
          <a href="#offline" className="a-bar-item a-button">Offline Games</a>
          <a href="#contact" className="a-bar-item a-button">Contact</a>
        </div>
      </div>
  
      {/* Page */}
      <div className="a-content a-padding-large a-margin-top" id="offline">
        <img src="stone-paper-scissor.jpg" alt="stone paper " className="a-image a-margin-top" width="1000" height="500" />
        <button className='my-button' ><a href="10-rock-paper-scissor.html" >Play Stone paper scissor</a></button>
        <img src="tic-tac-toe.jpg" alt="tictactoe" className="a-image a-margin-top" width="1300" height="300" /> 
        <button className='my-button'><a href="tictactoe.html">Play tic tac toe</a></button>
        <img src="dinosaur-game.jpg" alt="chromedino" className="a-image a-margin-top" width="1000" height="500" />
        <button className='my-button'><a href="dinosaur.html">Play Chrome dinosaur</a></button>
      </div>
    </div>
  );
};

export default HomePage;
