import Square from "./Square";
import Strike from "./Strike";

function Board() {
  return ( 
    <div className="grid grid-cols-[200px_200px_200px] grid-rows-[200px_200px_200px] cursor-pointer relative">
      <Square className="border-r-8 border-b-8 border-sky-600"/>
      <Square className="border-r-8 border-b-8 border-sky-600"/>
      <Square className="border-b-8 border-sky-600"/>
      <Square className="border-r-8 border-b-8 border-sky-600"/>
      <Square className="border-r-8 border-b-8 border-sky-600"/>
      <Square className="border-b-8 border-sky-600"/>
      <Square className="border-r-8 border-sky-600"/>
      <Square className="border-r-8 border-sky-600"/>
      <Square className="border-sky-600"/>
      <Strike/>
    </div>
   );
}

export default Board;