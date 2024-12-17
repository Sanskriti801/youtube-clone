
import React, { useState, useEffect } from 'react';

const RockPaperScissors = () => {
  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    ties: 0
  });

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem('score')) || score;
    setScore(storedScore);
  }, []);

  const playGame = (playerMove) => {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    const updatedScore = { ...score };

    if (result === 'You win.') {
      updatedScore.wins += 1;
    } else if (result === 'You lose.') {
      updatedScore.losses += 1;
    } else if (result === 'Tie.') {
      updatedScore.ties += 1;
    }

    setScore(updatedScore);
    localStorage.setItem('score', JSON.stringify(updatedScore));

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = 
    `You  <img src="${playerMove}-emoji.png" class="move-icon"><img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
  }

  const pickComputerMove = () => {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }

  const resetScore = () => {
    const resetScore = {
      wins: 0,
      losses: 0,
      ties: 0
    };

    setScore(resetScore);
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
  }

  return (
    <div style={{ backgroundColor: 'rgb(25, 25, 25)', color: 'white', fontFamily: 'Arial' }}>
      <p className="title" style={{ fontSize: '30px', fontWeight: 'bold' }}>Rock Paper Scissors</p>
      <button onClick={() => playGame('rock')} className="move-button" style={{ backgroundColor: 'transparent', border: '3px solid white', width: '120px', height: '120px', borderRadius: '60px', marginRight: '10px', cursor: 'pointer' }}>
        <img src="rock-emoji.png" alt="Rock" className="move-icon" style={{ height: '50px' }} />
      </button>
      <button onClick={() => playGame('paper')} className="move-button" style={{ backgroundColor: 'transparent', border: '3px solid white', width: '120px', height: '120px', borderRadius: '60px', marginRight: '10px', cursor: 'pointer' }}>
        <img src="paper-emoji.png" alt="Paper" className="move-icon" style={{ height: '50px' }} />
      </button>
      <button onClick={() => playGame('scissors')} className="move-button" style={{ backgroundColor: 'transparent', border: '3px solid white', width: '120px', height: '120px', borderRadius: '60px', marginRight: '10px', cursor: 'pointer' }}>
        <img src="scissors-emoji.png" alt="Scissors" className="move-icon" style={{ height: '50px' }} />
      </button>
      <p className="js-result result" style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '50px' }}></p>
      <p className="js-moves" style={{ marginBottom: '20px' }}></p>
      <p className="js-score score" style={{ marginTop: '20px' }}>Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}</p>
      <button onClick={resetScore} className="reset-score-button" style={{ backgroundColor: 'white', border: 'none', fontSize: '15px', padding: '8px 15px', cursor: 'pointer' }}>Reset Score</button>
    </div>
  );
}

export default RockPaperScissors;
