import O_mark from "./O_mark";
import X_mark from "./X_mark";
import { useGlobalMatchContext } from "../../contexts/matchContext";
import { useState } from "react";
import { squareType } from "../../types/type";
import { PLAYER_ONE, PLAYER_TWO } from "../../utils/const";

const Square = ({ mark, index, step }: squareType) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const {
    turn,
    setTurn,
    marks,
    setMarks,
    winnerMarks,
    setSteps,
    steps,
    playerWin,
  } = useGlobalMatchContext();

  const renderMark = () => {
    if (!clicked) return null;

    if (mark == null) {
      setClicked(false);
      return null;
    }

    if (mark == 1) {
      return <X_mark />;
    } else {
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
    <div className={`relative ${playerWin != 0 ? "pointer-events-none" : ""}`}>
      <div
        className={`w-28 aspect-square md:w-32 border rounded hover:cursor-pointer flex justify-center items-center ${
          turn == PLAYER_ONE ? "hover:bg-player-one " : "hover:bg-player-two"
        } ${clicked ? "pointer-events-none" : ""} ${
          winnerMarks.indexOf(index) != -1 ? "bg-player-win" : "bg-white"
        }`}
        onClick={() => {
          setClicked(true);

          if (turn == PLAYER_ONE) setTurn(PLAYER_TWO);
          else setTurn(PLAYER_ONE);

          const newMarks = [...marks];
          newMarks[index] = turn;
          setMarks(newMarks);

          const newSteps = [...steps];
          const max = Math.max(...newSteps);
          newSteps[index] = max + 1;
          setSteps(newSteps);
        }}
      >
        {renderMark()}
        {renderSteps()}
      </div>
    </div>
  );
};

export default Square;
