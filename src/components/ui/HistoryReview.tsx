import { matchHistoryType } from "../../types/type";
import { PLAYER_ONE } from "../../utils/const";
import SquareReview from "./SquareReview";

const HistoryReview = ({
  playerWin,
  totalSteps,
  marks,
  steps,
}: matchHistoryType) => {
  const renderMatchResult = () => {
    if (playerWin > 0)
      return (
        <p
          className={`p-4 font-bold md:text-3xl text-xl ${
            playerWin == PLAYER_ONE ? "text-player-one" : "text-player-two"
          }`}
        >
          Player {playerWin} WIN
        </p>
      );
    if (playerWin == -1) {
      return <p className="p-4 font-bold text-3xl text-neutral-500">DRAW</p>;
    }
  };

  const renderPlayGroundResult = () => {
    return (
      <>
        <SquareReview marks={marks} mark={marks[0]} step={steps[0]} index={0} />
        <SquareReview marks={marks} mark={marks[1]} step={steps[1]} index={1} />
        <SquareReview marks={marks} mark={marks[2]} step={steps[2]} index={2} />
        <SquareReview marks={marks} mark={marks[3]} step={steps[3]} index={3} />
        <SquareReview marks={marks} mark={marks[4]} step={steps[4]} index={4} />
        <SquareReview marks={marks} mark={marks[5]} step={steps[5]} index={5} />
        <SquareReview marks={marks} mark={marks[6]} step={steps[6]} index={6} />
        <SquareReview marks={marks} mark={marks[7]} step={steps[7]} index={7} />
        <SquareReview marks={marks} mark={marks[8]} step={steps[8]} index={8} />
      </>
    );
  };
  return (
    <div className="absolute md:right-[105%] md:top-[10%] mt-2 w-full md:w-2/3 min-w-[300px] lg:min-w-[500px] flex justify-between flex-col items-center gap-4 bg-yellow-100 pb-4 shadow-xl rounded-lg">
      <div className="flex justify-between items-center">
        {renderMatchResult()}
        <p className="text-xl">
          Total steps: <strong>{totalSteps}</strong>
        </p>
      </div>
      <div
        className={`grid grid-cols-3 gap-2 max-w-[500px] min-w-[320px]${
          playerWin >= 1 ? "pointer-events-none" : ""
        }`}
      >
        {renderPlayGroundResult()}
      </div>
    </div>
  );
};

export default HistoryReview;
