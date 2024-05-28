import Square from "./Square";
import Strike from "./Strike";

function Board( {squares, onSquareClick, playerTurn} ) {
  return ( 
    <div className={`grid gap-3 grid-cols-${squares.length} grid-rows-${squares.length} place-items-center`}>
      {squares.map((rows, x) => (
        rows.map((square, y) => (
          <Square playerTurn={playerTurn} 
          onClick={()=> onSquareClick([x,y])} 
          value={squares[x][y]} 
          className="bg-blue-600 w-20"/>
        ))
      ))
      }


    </div>
   );
}

export default Board;