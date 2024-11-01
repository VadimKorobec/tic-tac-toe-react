import { GameTurn } from "../GameBoard/GameBoard";


interface LogProps {
  turns: GameTurn[];
}

const Log = ({ turns }:LogProps) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
