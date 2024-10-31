const initialGameBoard: (null | string)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface GameTurn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

interface GameBoardProps {
  turns: GameTurn[];
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
}

const GameBoard = ({ onSelectSquare, turns }: GameBoardProps) => {
  let gameBoard = initialGameBoard.map((row) => [...row]); // Делаем поверхностную копию массива
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player; // Обновляем значения ячеек на основе ходов
  }

  //   const [gameBoard, setGameBoard] =
  //     useState<(null | string)[][]>(initialGameBoard);

  //   const handleSelectSquare = (rowIndex: number, colIndex: number) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
