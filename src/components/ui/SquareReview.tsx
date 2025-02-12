import O_mark from "./O_mark";
import X_mark from "./X_mark";
import { squareReviewType } from "../../types/type";
import { getPlayerWin } from "../../utils/helper";
import { PLAYER_ONE, PLAYER_TWO } from "../../utils/const";

const Square = ({ mark, step, marks, index }: squareReviewType) => {
  const winnerMarks = getPlayerWin(marks).winnerMarks;
  const renderMark = () => {
    if (mark == PLAYER_ONE) {
      return <X_mark />;
    }
    if (mark == PLAYER_TWO) {
      return <O_mark />;
    }
  };

  const renderSteps = () => {
    if (step != 0)
      return (
        <p className="absolute font-semibold text-l bottom-2 right-2">{step}</p>
      );
  };
  return (
    <div className="relative">
      <div
        className={`w-24 overflow-hidden aspect-square md:w-32 border rounded hover:cursor-pointer flex justify-center items-center 
            ${
              winnerMarks.indexOf(index) != -1 ? "bg-player-win" : "bg-white"
            } `}
      >
        {renderMark()}
        {renderSteps()}
      </div>
    </div>
  );
};

export default Square;
