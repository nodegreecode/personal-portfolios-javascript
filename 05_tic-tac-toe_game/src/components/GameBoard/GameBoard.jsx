
export default function GameBoard({onSelectSquare, board}) {


/*  const [gameBoard, setGameBoard] = useState(initilaGameBoard);

  const handleClick = (rowIndex, colIndex) => {
    setGameBoard((prevValue) => {
      const updatedGameBoard = [...prevValue.map(innerArr=>[...innerArr])];
      updatedGameBoard[rowIndex][colIndex] = playerSymbol;
      return updatedGameBoard;
    });

    onSelectSquare();
  };*/

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, symbolIndex) => (
                <li key={symbolIndex}>
                  <button onClick={() =>  onSelectSquare(rowIndex, symbolIndex)} disabled={playerSymbol !== null }>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
