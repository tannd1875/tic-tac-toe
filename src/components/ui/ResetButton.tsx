import { useGlobalMatchContext } from "../../contexts/matchContext";
import { PLAYER_TWO } from "../../utils/const";

const ResetButton = () => {
  const {
    setMarks,
    setTurn,
    playerWin,
    setPLayerWin,
    setSteps,
    setWinnerMarks,
  } = useGlobalMatchContext();
  return (
    <button
      className="font-bold text-2xl border-4 max-w-[500px] min-w-[340px] p-4 rounded-full mb-4 uppercase shadow-2xl
      bg-white text-green-500
      hover:border-white hover:bg-green-500 hover:text-white"
      onClick={() => {
        setMarks(Array(9).fill(null));
        setTurn(PLAYER_TWO);
        setPLayerWin(0);
        setSteps(Array(9).fill(0));
        setWinnerMarks(Array(3).fill(-1));
        window.location.reload();
      }}
    >
      {playerWin > 0 || playerWin == -1 ? "New Game" : "Restart"}
    </button>
  );
};

export default ResetButton;
