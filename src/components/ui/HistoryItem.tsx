import { useState } from "react";
import { matchHistoryType } from "../../types/type";
import HistoryReview from "./HistoryReview";
import { PLAYER_DRAW, PLAYER_ONE, PLAYER_TWO } from "../../utils/const";

const HistoryItem = ({
  playerWin,
  totalSteps,
  marks,
  steps,
}: matchHistoryType) => {
  const [onHover, setOnHover] = useState(false);
  const renderMatchResult = () => {
    if (playerWin == PLAYER_DRAW)
      return <p className="font-bold text-xl text-neutral-500">Draw</p>;
    else {
      if (playerWin == PLAYER_ONE || playerWin == PLAYER_TWO)
        return (
          <p
            className={`font-bold text-xl ${
              playerWin == PLAYER_ONE ? "text-player-one" : "text-player-two"
            }`}
          >
            {playerWin == PLAYER_ONE ? "X" : "O"} win
          </p>
        );
    }
  };
  const renderHistoryReview = () => {
    if (onHover)
      return (
        <HistoryReview
          playerWin={playerWin}
          totalSteps={totalSteps}
          marks={marks}
          steps={steps}
        />
      );
  };
  return (
    <>
      <div
        className="flex justify-between items-center w-3/4 mx-auto gap-2 mt-4 border px-4 py-2 rounded-xl hover:cursor-pointer hover:scale-110 duration-200 hover:shadow-lg"
        onMouseOver={() => setOnHover(true)}
        onMouseOut={() => setOnHover(false)}
      >
        {renderMatchResult()}
        <p className="text-xl border-l-neutral-500 border-l-2 pl-2">
          Total steps:
          <strong> {totalSteps}</strong>
        </p>
      </div>
      {renderHistoryReview()}
    </>
  );
};

export default HistoryItem;
