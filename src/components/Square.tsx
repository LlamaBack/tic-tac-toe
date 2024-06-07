function Square({ className, value, onClick, playerTurn }) {
  let hoverClass = null;

  const bgClass: any = {
    "X": " !bg-yellow-400",
    "O": " !bg-teal-500"
  }
  const bgHoverClass: any = {
    "X": "hover:bg-yellow-400 hover:bg-opacity-70",
    "O": "hover:bg-teal-500 hover:bg-opacity-70"
  }

  if (value == null) {
    hoverClass = `hover:content-[${playerTurn}] ${bgHoverClass[playerTurn]}`
  }

  return (
    <div 
      onClick={onClick}
      className={`square ${className}` 
      + ` ${hoverClass} ${bgClass[value]}`
      + " text-5xl justify-center items-center flex hover:content-['X'] h-32 w-32"
      }>
      {value}
    </div>//   -----${bgHoverClass[value]}
    );
}

export default Square;