import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";
import Log from "./components/Log/Log";

const App = () => {
  const [gameTurns, setGameTurns] = useState<
    { square: { row: number; col: number }; player: string }[]
  >([]);
  const [activePlayer, setActivePlayer] = useState<string>("X");

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          
        />
      </div>
      <Log />
    </main>
  );
};

export default App;
