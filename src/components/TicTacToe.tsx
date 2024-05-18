import { useState } from "react"; //I dont know what this does
import Board from "./Board";

const PLAYER_X = "X"
const PLAYER_O = "O"

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

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} squares={squares} onSquareClick={handleSquareClick}></Board>
    </div>
  );
}
 
export default TicTacToe;