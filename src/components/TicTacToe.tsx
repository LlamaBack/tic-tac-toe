import { useState, useEffect } from "react";
import Board from "./Board";
import GameState from "./GameState";
import GameOver from "./GameOver";
import History from "./History";
const PLAYER_X = "X"
const PLAYER_O = "O"
let history = [];
let giikerLogic = 1;
const n = 3;

function checkWinner(squares, setGameState, index, playerTurn, setPlayerTurn) {
  for (let i = 0; i < squares.length; i++){
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

function recordMove(last_move) {
  history.push(last_move)
};

// function giikerLogic() {
//   if (history.length === n * 2) {
//     return history.shift();
//   }

// };

const TicTacToe = () => {
  const [squares, setSquares] = useState((Array(n)).fill(null).map(() => Array(n).fill(null)));
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


    recordMove([index[0], index[1]]);

    if (history.length === n * 2 + 1 && giikerLogic === 1) {
      let oldestSquare = history.shift();
      newSquares[oldestSquare[0]][oldestSquare[1]] = null;
    }

    if (history.length === n * 2 && giikerLogic === 1) {
      if (playerTurn === "X") {
        newSquares[history[0][0]][history[0][1]] = "o";
      } else {
        newSquares[history[0][0]][history[0][1]] = "x";
      }
    }

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