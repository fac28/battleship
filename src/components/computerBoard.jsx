import { useState } from 'react';
import '../../public/styles/board.css';
// import placeShip from './components/Ship.jsx';


export default function ComputerBoard() {
  // Define the initial state of the game board

  const [board, setBoard] = useState(Array(10).fill(Array(10).fill(null)));

  return (
    <div className="board computer-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {/* Display the contents of each cell here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
