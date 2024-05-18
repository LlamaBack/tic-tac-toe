import { useState, useEffect } from "react"; //I dont know what this does
import Board from "./Board";

const PLAYER_X = "X"
const PLAYER_O = "O"

const winningCombinations = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
]

function checkWinner(squares) {
  for(const winningCombination of winningCombinations){
    const squareValue1 = squares[winningCombination[0]]
    const squareValue2 = squares[winningCombination[1]]
    const squareValue3 = squares[winningCombination[2]]

    if(squareValue1 !== null && squareValue1 === squareValue2 && squareValue2 === squareValue3 ) {
      
    }
  }
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)) //setSquares > rebinds squares to new input. i assume it must be of the same parameter type?
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const handleSquareClick = (index) => {
    if(squares[index] !== null) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = playerTurn;
    setSquares(newSquares)
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X)
    }
  };

  useEffect(() => {
    checkWinner(squares);
  }, [squares]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} squares={squares} onSquareClick={handleSquareClick}></Board>
    </div>
  );
}
 
export default TicTacToe;