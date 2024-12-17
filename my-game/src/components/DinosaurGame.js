import React, { useEffect, useState } from 'react';

const DinosaurGame = () => {
  const [dino, setDino] = useState({
    x: 50,
    y: 250 - 94,
    width: 88,
    height: 94
  });
  const [cactusArray, setCactusArray] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const board = document.getElementById("board");
    const context = board.getContext("2d");

    const dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = () => {
      context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    };

    const cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";

    const cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";

    const cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";

    const update = () => {
      requestAnimationFrame(update);
      if (gameOver) return;
      context.clearRect(0, 0, board.width, board.height);

      let velocityY = 0.4;
      dino.y = Math.min(dino.y + velocityY, 250 - dino.height);
      context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

      for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x -= 8;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);

        if (detectCollision(dino, cactus)) {
          setGameOver(true);
          dinoImg.src = "./img/dino-dead.png";
          dinoImg.onload = () => {
            context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
          };
        }
      }

      context.fillStyle = "black";
      context.font = "20px courier";
      setScore(prevScore => prevScore + 1);
      context.fillText(score, 5, 20);
    };

    const moveDino = (e) => {
      if (gameOver) return;

      if ((e.code === "Space" || e.code === "ArrowUp") && dino.y === 250 - dino.height) {
        setDino(prevDino => ({ ...prevDino, y: prevDino.y - 10 }));
      }
    };

    const placeCactus = () => {
      if (gameOver) return;

      let cactus = {
        img: null,
        x: 750,
        y: 250 - 70,
        width: null,
        height: 70
      };

      let placeCactusChance = Math.random();

      if (placeCactusChance > 0.90) {
        cactus.img = cactus3Img;
        cactus.width = 102;
        setCactusArray(prevCactusArray => [...prevCactusArray, cactus]);
      } else if (placeCactusChance > 0.70) {
        cactus.img = cactus2Img;
        cactus.width = 69;
        setCactusArray(prevCactusArray => [...prevCactusArray, cactus]);
      } else if (placeCactusChance > 0.50) {
        cactus.img = cactus1Img;
        cactus.width = 34;
        setCactusArray(prevCactusArray => [...prevCactusArray, cactus]);
      }

      if (cactusArray.length > 5) {
        setCactusArray(prevCactusArray => prevCactusArray.slice(1));
      }
    };

    const detectCollision = (a, b) => {
      return a.x < b.x + b.width &&
             a.x + a.width > b.x &&
             a.y < b.y + b.height &&
             a.y + a.height > b.y;
    };

    board.height = 250;
    board.width = 750;
    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);
    document.addEventListener("keydown", moveDino);

    return () => {
      document.removeEventListener("keydown", moveDino);
    };
  }, [dino, cactusArray, gameOver, score]);

  return (
    <div>
      <h1>Chrome Dinosaur Game</h1>
      <canvas id="board"></canvas>
    </div>
  );
};

export default DinosaurGame;
