import Square from "./Square";
import Strike from "./Strike";

function Board( {squares, onSquareClick, playerTurn} ) {
  return ( 
    <div className="grid grid-cols-[200px_200px_200px] gap-3 grid-rows-[200px_200px_200px] cursor-pointer relative">
      {squares.map((rows, x) => (
        rows.map((square, y) => (
          <Square playerTurn={playerTurn} 
          onClick={()=> onSquareClick([x,y])} 
          value={squares[x][y]} 
          className="bg-blue-600"/>
        ))
      ))
       }

      {/* <Square
        playerTurn={playerTurn} 
        onClick={()=> onSquareClick([0,0])} 
        value={squares[0][0]} 
        className="border-r-8 border-b-8 border-sky-600"
      /> */}


    </div>
   );
}

export default Board;