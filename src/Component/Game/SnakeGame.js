import React, { useState, useEffect, useRef } from 'react';

const SnakeGame = () => {
    
    const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
    const [food, setFood] = useState(generateFoodPosition());
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);
  
    const boardSize = 10;
    const intervalRef = useRef();
  
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
  
      intervalRef.current = setInterval(moveSnake, 300);
  
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
        clearInterval(intervalRef.current);
      };
    }, []);
  
    useEffect(() => {
      checkCollision();
      checkFoodCollision();
    }, [snake]);
  
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };
  
    const moveSnake = () => {
      if (!gameOver) {
        const newSnake = snake.map((segment) => ({ ...segment }));
        const head = { ...newSnake[0] };
  
        switch (direction) {
          case 'UP':
            head.y = (head.y - 1 + boardSize) % boardSize;
            break;
          case 'DOWN':
            head.y = (head.y + 1) % boardSize;
            break;
          case 'LEFT':
            head.x = (head.x - 1 + boardSize) % boardSize;
            break;
          case 'RIGHT':
            head.x = (head.x + 1) % boardSize;
            break;
          default:
            break;
        }
  
        newSnake.unshift(head);
        newSnake.pop();
        setSnake(newSnake);
      }
    };
  
    const checkCollision = () => {
      const head = snake[0];
  
      if (snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        clearInterval(intervalRef.current);
      }
    };
  
    const checkFoodCollision = () => {
      const head = snake[0];
  
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFoodPosition());
        const newSnake = [...snake, { x: -1, y: -1 }]; // Add a new segment to the snake
        setSnake(newSnake);
      }
    };
  
    const generateFoodPosition = () => {
      return {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize),
      };
    };
  
  
    return (
        <div>
            <div>
      <h1>Snake Game</h1>
      <div className="board">
        {Array.from({ length: boardSize * boardSize }).map((_, index) => {
          const x = index % boardSize;
          const y = Math.floor(index / boardSize);
          const isSnakeSegment = snake.some((segment) => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={index}
              className={`cell ${isSnakeSegment ? 'snake' : ''} ${isFood ? 'food' : ''}`}
            ></div>
          );
        })}
      </div>
      {gameOver && <p>Game Over!</p>}
    </div>
            
        </div>
    );
};

export default SnakeGame;