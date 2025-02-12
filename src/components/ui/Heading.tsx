import { useGlobalMatchContext } from "../../contexts/matchContext";
import { PLAYER_DRAW, PLAYER_ONE } from "../../utils/const";

const Heading = () => {
  const { turn, playerWin } = useGlobalMatchContext();
  if (playerWin > 0)
    return (
      <p
        className={`p-4 font-bold text-3xl ${
          playerWin == PLAYER_ONE ? "text-player-one" : "text-player-two"
        }`}
      >
        Player {playerWin} WIN
      </p>
    );
  if (playerWin == PLAYER_DRAW) {
    return <p className="p-4 font-bold text-3xl text-neutral-500">DRAW</p>;
  }

  return (
    <p
      className={`p-4 font-bold text-3xl ${
        turn == PLAYER_ONE ? "text-player-one" : "text-player-two"
      }`}
    >
      Player {turn} turn
    </p>
  );
};

export default Heading;
