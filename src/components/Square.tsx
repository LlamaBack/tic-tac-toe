function Square({ className, value, onClick, playerTurn }) {
  let hoverClass = null;
  let render = null;
  if (value !== null) {
    render = value
    render = render.toUpperCase();
  }
  const bgClass: any = {
    "X": " !bg-yellow-400",
    "O": " !bg-teal-500",
    "x": " !bg-yellow-200",
    "o": " !bg-teal-300"

  }
  const bgHoverClass: any = {
    "X": "hover:bg-yellow-400 hover:bg-opacity-70",
    "O": "hover:bg-teal-500 hover:bg-opacity-70"
  }

  if (value === null) {
    hoverClass = `hover:content-[${playerTurn}] ${bgHoverClass[playerTurn]}`
  }

  return (
    <div 
      onClick={onClick}
      className={`square ${className}` 
      + ` ${hoverClass} ${bgClass[value]}`
      + " text-5xl justify-center items-center flex hover:content-['X'] h-32 w-32"
      }>
      {render}
    </div>//   -----${bgHoverClass[value]}
    );
}

export default Square;