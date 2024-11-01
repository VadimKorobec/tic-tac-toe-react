const initialGameBoard: (null | string)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export interface GameTurn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

interface GameBoardProps {
  board: (string | null)[][];
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
}

const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null ? true : false}
                >
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
