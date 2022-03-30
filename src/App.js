import './App.css';
import Squares from './squares/Squares';
import Keyboard from './keyboard/Keyboard';
import { createContext, useState } from 'react';
import { gameBoard } from './Board';

export const BoardContext = createContext();

function App() {
  const [board, setBoard] = useState(gameBoard); // update board
  const [curPosition, setCurPosition] = useState({cx: 0, cy: 0}); // update current x and y
  return (
    <div className="App">
      <div id="header">
        <div id="title">WORDLE</div>
      </div>
      <BoardContext.Provider value={{ board, setBoard, curPosition, setCurPosition}}>
        <div id="board-container">
          <Squares />
        </div>
        <div id="keyboard-container">
          <Keyboard />
        </div>
      </BoardContext.Provider>
    </div>
  );
}

export default App;
