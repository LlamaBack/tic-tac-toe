import Square from "./Square";
import Strike from "./Strike";

function Board( {squares, onSquareClick, playerTurn} ) {
  return ( 
    <div className="grid grid-cols-[200px_200px_200px] grid-rows-[200px_200px_200px] cursor-pointer relative">
      <Square
        playerTurn={playerTurn} 
        onClick={()=> onSquareClick(0)} 
        value={squares[0]} 
        className="border-r-8 border-b-8 border-sky-600"
      />
      <Square
        playerTurn={playerTurn} 
        onClick={()=> onSquareClick(1)} 
        value={squares[1]} 
        className="border-r-8 border-b-8 border-sky-600"
      />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick(2)} 
        value={squares[2]} 
        className="border-b-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick(3)} 
        value={squares[3]} 
        className="border-r-8 border-b-8 border-sky-600"/>
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick(4)} 
        value={squares[4]} 
        className="border-r-8 border-b-8 border-sky-600"/>
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick(5)} 
        value={squares[5]} 
        className="border-b-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick(6)} 
        value={squares[6]} 
        className="border-r-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick(7)} 
        value={squares[7]} 
        className="border-r-8 border-sky-600"
        />
      <Square
        playerTurn={playerTurn}
        onClick={()=> onSquareClick(8)} 
        value={squares[8]} 
        className="border-sky-600"/>
      <Strike/>
    </div>
   );
}

export default Board;