import React, { useState } from 'react';

const TicTacToe = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [isGameOver, setIsGameOver] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const handleBoxClick = (index) => {
    if (!isGameOver && boxes[index] === '') {
      const updatedBoxes = [...boxes];
      updatedBoxes[index] = turn;
      setBoxes(updatedBoxes);
      checkWin(updatedBoxes);
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const checkWin = (updatedBoxes) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (updatedBoxes[a] && updatedBoxes[a] === updatedBoxes[b] && updatedBoxes[a] === updatedBoxes[c]) {
        setIsGameOver(true);
        setResultMessage(`${turn} wins!`);
        return;
      }
    }
    if (updatedBoxes.every(box => box !== '')) {
      setIsGameOver(true);
      setResultMessage('It\'s a draw!');
    }
  };

  const handleReset = () => {
    setBoxes(Array(9).fill(''));
    setTurn('X');
    setIsGameOver(false);
    setResultMessage('');
  };

  return (
    <div style={styles.container}>
      <div className="turn-container">
        <h3>Turn For</h3>
        <div className="turn-box align">{turn}</div>
        <div className="bg"></div>
      </div>
      <div className="main-grid">
        {boxes.map((value, index) => (
          <div key={index} className="box align" onClick={() => handleBoxClick(index)}>{value}</div>
        ))}
      </div>
      <h2 id="results">{resultMessage}</h2>
      <button id="play-again" onClick={handleReset}>Play Again</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px auto',
    color: 'white',
    fontFamily: 'sans-serif',
  },
};

export default TicTacToe;
