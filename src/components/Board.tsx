import Square from "./Square";
import Strike from "./Strike";

function Board( {squares, onSquareClick, playerTurn} ) {
  return ( 
    <div className="grid grid-cols-[200px_200px_200px] grid-rows-[200px_200px_200px] cursor-pointer relative">
      <Square
        playerTurn={playerTurn} 
        onClick={()=> onSquareClick([0,0])} 
        value={squares[0][0]} 
        className="border-r-8 border-b-8 border-sky-600"
      />
      <Square
        playerTurn={playerTurn} 
        onClick={()=> onSquareClick([0,1])} 
        value={squares[0][1]} 
        className="border-r-8 border-b-8 border-sky-600"
      />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick([0,2])} 
        value={squares[0][2]} 
        className="border-b-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick([1,0])} 
        value={squares[1][0]} 
        className="border-r-8 border-b-8 border-sky-600"/>
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick([1,1])} 
        value={squares[1][1]} 
        className="border-r-8 border-b-8 border-sky-600"/>
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick([1,2])} 
        value={squares[1][2]} 
        className="border-b-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick([2,0])} 
        value={squares[2][0]} 
        className="border-r-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick([2,1])} 
        value={squares[2][1]} 
        className="border-r-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick([2,2])} 
        value={squares[2][2]} 
        className="border-sky-600"/>
    </div>
   );
}

export default Board;