import { useState, useEffect } from "react";
import Board from "./Board";
import GameState from "./GameState";
import GameOver from "./GameOver";
const PLAYER_X = "X"
const PLAYER_O = "O"

function checkWinner(squares, setGameState, index, playerTurn, setPlayerTurn) {
  for (let i = 0; i < squares.length; i++){
    console.log(playerTurn)
    if( squares[i][index[1]] !== playerTurn) {
        break;
    }
    if (i === squares.length - 1) {
      if(playerTurn === PLAYER_X) {
        setGameState(GameState.playerXWins)
      } else {
        setGameState(GameState.playerOWins)
      }
      return;
    }
  }

  for (let i = 0; i < squares.length; i++){
    if( squares[index[0]][i] !== playerTurn) {
        break;
    }
    if (i === squares.length - 1) {
      if(playerTurn === PLAYER_X) {
        setGameState(GameState.playerXWins)
      } else {
        setGameState(GameState.playerOWins)
      }
      return;
    }
  }

  if (index[1] === index[0]) {
    for (let i = 0; i < squares.length; i++){
      if( squares[i][i] !== playerTurn) {
          break;
      }
      if (i === squares.length - 1) {
        if(playerTurn === PLAYER_X) {
          setGameState(GameState.playerXWins)
        } else {
          setGameState(GameState.playerOWins)
        }
        return;
      }
    }
  }

  if (index[1] + index[0] === squares.length - 1) {
    for (let i = 0; i < squares.length; i++){
      if( squares[i][(squares.length - 1) - i] !== playerTurn) {
          break;
      }
      if (i === squares.length - 1) {
        if(playerTurn === PLAYER_X) {
          setGameState(GameState.playerXWins)
        } else {
          setGameState(GameState.playerOWins)
        }
        return;
      }
    }
  }

  const isDraw = !squares.some(row => row.includes(null))
  if (isDraw) {
    setGameState(GameState.draw);
  }

  if (playerTurn === PLAYER_X) {
    setPlayerTurn(PLAYER_O);
  } else {
    setPlayerTurn(PLAYER_X);
  }
};

const TicTacToe = () => {
  const [squares, setSquares] = useState((Array(4)).fill(null).map(() => Array(4).fill(0)));
  //setSquares > rebinds squares to new input. i assume it must be of the same parameter type?

  const [playerTurn, setPlayerTurn] = useState(PLAYER_O);
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [coord, setCoord] = useState([0, 0]);

  const handleSquareClick = (index) => {
    setCoord(index);
    if (gameState !== GameState.inProgress) {
      return;
    }

    if(squares[index[0]][index[1]] !== null) {
      return;
    }
    const newSquares = JSON.parse(JSON.stringify(squares));
    newSquares[index[0]][index[1]] = playerTurn;
    setSquares(newSquares);
  };

  useEffect(() => {
    checkWinner(squares, setGameState, coord, playerTurn, setPlayerTurn);
  }, [squares]);


  return (
    <div>
      <h1 className={"w-screen"}>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} squares={squares} onSquareClick={handleSquareClick}></Board>
      <GameOver gameState={gameState} />
    </div>
  );
}
 
export default TicTacToe;