import React, { useState, useMemo, useEffect } from "react";
import { generateMaze, solve } from "./util";
import GameEndPopup from './GameEndPopup';
import TimeExceededPopup from "./TimeExceededPopup";

const FiveLevel = () => {
  const [gameId, setGameId] = useState(1);
  const [status, setStatus] = useState("playing");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [score, setScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [collectibles, setCollectibles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showTimeExceededPopup, setShowTimeExceededPopup] = useState(false);
  const [userPosition, setUserPosition] = useState([0, 0]);
  const [showManWalking, setShowManWalking] = useState(true);
  const [isFlipped, setIsFlipped] = useState(true);

  useEffect(() => {
    setCollectibles(generateCollectibles());
  }, [gameId]);

  const size = 9;

  const maze = useMemo(() => generateMaze(size, size), [size, gameId]);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;

    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
      setShowManWalking(false);
      setEndTime(Date.now());
    }
  }, [userPosition, maze]);

  useEffect(() => {
    if (status === "playing") {
      setStartTime(Date.now());
    }
  }, [status]);

  useEffect(() => {
    let interval;
    if (status === "playing" && startTime !== 0) {
      interval = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(currentTime - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, status]);

  const makeClassName = (i, j) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) {
      arr.push("topWall");
    }
    if (maze[i][j][1] === 0) {
      arr.push("rightWall");
    }
    if (maze[i][j][2] === 0) {
      arr.push("bottomWall");
    }
    if (maze[i][j][3] === 0) {
      arr.push("leftWall");
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push("destination");
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push("currentPosition");
    }

    return arr.join(" ");
  };

  const handleMove = (e) => {
    e.preventDefault();
    if (status !== "playing") {
      return;
    }
    const key = e.code;

    const [i, j] = userPosition;
    if ((key === "ArrowUp" || key === "KeyW") && maze[i][j][0] === 1) {
      setUserPosition([i - 1, j]);
    }
    if ((key === "ArrowRight" || key === "KeyD") && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1]);
      setIsFlipped(true);
    }
    if ((key === "ArrowDown" || key === "KeyS") && maze[i][j][2] === 1) {
      setUserPosition([i + 1, j]);
      setIsFlipped(false);
    }
    if ((key === "ArrowLeft" || key === "KeyA") && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1]);
    }

    const collectibleIndex = collectibles.findIndex(
      (item) => item[0] === userPosition[0] && item[1] === userPosition[1]
    );

    const collectiblePoints = 10;

    if (collectibleIndex !== -1) {
      const updatedCollectibles = [...collectibles];
      updatedCollectibles.splice(collectibleIndex, 1);
      setScore1(score1 + collectiblePoints);
      setCollectibles(updatedCollectibles);
    }
  };

  const handleUpdateSettings = () => {
    setUserPosition([0, 0]);
    setStatus("playing");
    setGameId(gameId + 1);
    setShowManWalking(true);
    setStartTime(0);
    setEndTime(0);
    setScore(0);
    setElapsedTime(0);
    setScore1(0);
  };

  const calculateScore = () => {
    if (startTime !== 0 && endTime !== 0) {
      const timeTaken = endTime - startTime;
      const adjustedTime = Math.round(timeTaken / 1000);

      let calculatedScore = 0;
      if (adjustedTime < 10) {
        calculatedScore = 200;
      } else if (adjustedTime < 20) {
        calculatedScore = 180;
      } else if (adjustedTime < 25) {
        calculatedScore = 150;
      } else if (adjustedTime < 30) {
        calculatedScore = 100;
      } else if (adjustedTime < 35) {
        calculatedScore = 50;
      } else {
        calculatedScore = 25;
      }
      setScore(calculatedScore);
    }
  };

  useEffect(() => {
    calculateScore();
  }, [endTime]);

  const bookEmojis = ['🖋', '🧁', '🎒', '📗', '✏', '🎨', '🍎'];

  const generateCollectibles = () => {
    const collectibles = [];
    let remainingCollectibles = 15;

    while (remainingCollectibles > 0) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);

      if ((x !== 0 || y !== 0) && (x !== maze.length - 1 || y !== maze[0].length - 1)) {
        const randomEmoji = bookEmojis[Math.floor(Math.random() * bookEmojis.length)];
        collectibles.push([x, y, randomEmoji]);
        remainingCollectibles--;
      }
    }
    return collectibles;
  };

  const timerBoxStyle = {
    border: '2px solid #ccc',
    marginTop: '0px',
    background: 'cornsilk',
    width: '180px',
    height: '50px',
    marginRight: '1200px',
  };

  const handlePlayAgain = () => {
    setShowPopup(false);
    handleUpdateSettings();
    setShowTimeExceededPopup(false);
  };

  useEffect(() => {
    if (status === 'won') {
      setShowPopup(true);
    }
  }, [status]);

  useEffect(() => {
    if (elapsedTime > 40000) {
      setShowTimeExceededPopup(true);
      setStatus('lost');
    }
  }, [elapsedTime]);

  return (
    <div className="box30" onKeyDown={handleMove} tabIndex={-1}>
      <div className="info" onClick={handleUpdateSettings}>
        {status === "won" ? (
          <p>
            You won! Score: {score + score1}.
          </p>
        ) : (
          <p>Score: {score1}</p>
        )}
      </div>
      <h2 style={{ fontSize: '24px' }}>Click anywhere on the Maze to Start the Game</h2>

      {/* Timer display */}
      <div className="timer" style={timerBoxStyle}>
        <p style={{ fontSize: '20px', color: 'forestgreen' }}>TIMER: {Math.floor(elapsedTime / 1000)} seconds</p>
      </div>

      <div id="gradient" className="gradient" />
      <table
        id="maze"
        style={{
          position: 'absolute',
          top: '150px',
          left: '530px',
          borderCollapse: 'collapse',
        }}
      >
        <tbody>
          {maze.map((row, i) => (
            <tr key={`${row}-${i}`}>
              {row.map((cell, j) => {
                const collectible = collectibles.find(
                  (item) => item[0] === i && item[1] === j
                );
                return (
                  <td
                    key={`${cell}-${i}-${j}`}
                    className={makeClassName(i, j)}
                    style={{
                      padding: '0',
                      width: '50px', // Set desired cell width here
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50px', // Set desired cell height here
                        fontSize: '25px',
                      }}
                    >
                      <div
                        style={{
                          width: '25px',
                          display: 'flex',
                          justifyContent: 'space-around',
                        }}
                      >
                        {i === userPosition[0] && j === userPosition[1] && showManWalking && (
                          <span
                            style={{ fontSize: '25px' }}
                            role="img"
                            aria-label="man walking"
                            className={isFlipped ? 'flippedEmoji' : ''}
                          >
                            🚶
                          </span>
                        )}
                        {collectible && (
                          <span
                            style={{ fontSize: '25px' }}
                            role="img"
                            aria-label="collectible item"
                          >
                            {collectible[2]}
                          </span>
                        )}
                      </div>
                      {i === maze.length - 1 && j === maze[0].length - 1 && (
                        <span role="img" aria-label="school">
                          🏫
                        </span>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <GameEndPopup
          score={score + score1}
          timeTaken={endTime - startTime}
          handlePlayAgain={handlePlayAgain}
        />
      )}

      {showTimeExceededPopup && (
        <TimeExceededPopup handlePlayAgain={handlePlayAgain} />
      )}
    </div>
  );
}

export default FiveLevel;
