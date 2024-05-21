import { useState, useEffect } from "react"; //I dont know what this does
import Board from "./Board";
import GameState from "./GameState";
import GameOver
 from "./GameOver";
const PLAYER_X = "X"
const PLAYER_O = "O"

const winningCombinations = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
]

function checkWinner(squares, setGameState) {
  for(const winningCombination of winningCombinations){
    const squareValue1 = squares[winningCombination[0]]
    const squareValue2 = squares[winningCombination[1]]
    const squareValue3 = squares[winningCombination[2]]

    if(
      squareValue1 !== null && 
      squareValue1 === squareValue2 && 
      squareValue2 === squareValue3 ) {
        if(squareValue1 === PLAYER_X) {
          setGameState(GameState.playerXWins)
        } else {
          setGameState(GameState.playerOWins)
        }
        return;
    }
  }

  const isDraw = squares.every((square) => square !== null);
  if (isDraw) {
    setGameState(GameState.draw);
  }
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  //setSquares > rebinds squares to new input. i assume it must be of the same parameter type?

  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleSquareClick = (index) => {
    // console.log(squares[index[0]][index[1]])


    // if (gameState !== GameState.inProgress) {
    //   return;
    // }

    if(squares[index[0]][index[1]] !== null) {
      return;
    }
    const newSquares = JSON.parse(JSON.stringify(squares));
    newSquares[index[0]][index[1]] = playerTurn;
    // console.log(newSquares[index[0]][index[1]])

    setSquares(newSquares)
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X)
    }
  };

  useEffect(() => {
    checkWinner(squares, setGameState);
  }, [squares]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} squares={squares} onSquareClick={handleSquareClick}></Board>
      <GameOver gameState={gameState} />
    </div>
  );
}
 
export default TicTacToe;