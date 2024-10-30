import { useState } from "react";

interface PlayerProps {
  initialName: string;
  symbol: string;
}

const Player = ({ initialName, symbol }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(initialName);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            onChange={handleChange}
            type="text"
            required
            value={playerName}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
