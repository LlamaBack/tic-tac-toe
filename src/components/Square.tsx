function Square({ className, value, onClick }) {
  const bgClass: any = {
    "X": " bg-yellow-600",
    "O": " bg-teal-700"
    // orange: " bg-orange-700",
    // yellow: " bg-yellow-700",
    // green: " bg-green-700",
    // teal: " bg-teal-700",
    // blue: " bg-blue-700",
    // indigo: " bg-indigo-700",
    // purple: " bg-purple-700",
    // pink: " bg-pink-700",
  }

  return (
    <div 
      onClick={onClick}
      className={`square ${className}` + "text-9xl justify-center items-center flex" + `${bgClass[value]}`}>
      {value}
      </div> //${bgClass[gray]}
    );
}

export default Square;