import PlayGround from "../ui/PlayGround";
import { useEffect, useState } from "react";
import { MatchContext } from "../../contexts/matchContext";
import Heading from "../ui/Heading";
import ResetButton from "../ui/ResetButton";
import { getPlayerWin } from "../../utils/helper";
import {
  calculateTotalSteps,
  saveMatchResult,
  setTotalDraw,
  setTotalOWin,
  setTotalXWin,
} from "../../utils/localStorage";
import { PLAYER_ONE } from "../../utils/const";

const PlayingBox = () => {
  const [turn, setTurn] = useState<number>(PLAYER_ONE);
  const [playerWin, setPLayerWin] = useState<number>(0);
  const [marks, setMarks] = useState<number[]>(Array(9).fill(null));
  const [winnerMarks, setWinnerMarks] = useState<number[]>(Array(3).fill(-1));
  const [steps, setSteps] = useState<number[]>(Array(9).fill(0));

  useEffect(() => {
    const result = getPlayerWin(marks);
    if (result.player != 0) {
      setPLayerWin(result.player);
      setWinnerMarks(result.winnerMarks);

      saveMatchResult({
        playerWin: result.player,
        totalSteps: calculateTotalSteps(steps),
        steps: steps,
        marks: marks,
      });

      setTotalDraw();
      setTotalXWin();
      setTotalOWin();
    }
  }, [marks, steps]);

  return (
    <div className="w-full md:w-2/3 min-w-[300px] lg:min-w-[500px] flex justify-between flex-col items-center gap-4 border bg-neutral-200">
      <MatchContext.Provider
        value={{
          turn,
          setTurn,
          playerWin,
          setPLayerWin,
          marks,
          setMarks,
          winnerMarks,
          setWinnerMarks,
          steps,
          setSteps,
        }}
      >
        <Heading />
        <PlayGround />
        <ResetButton />
      </MatchContext.Provider>
    </div>
  );
};

export default PlayingBox;
