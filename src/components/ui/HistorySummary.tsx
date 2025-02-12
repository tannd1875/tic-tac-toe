import {
  getTotalDraw,
  getTotalOWin,
  getTotalXWin,
} from "../../utils/localStorage";

const HistorySummary = () => {
  const totalXWin = getTotalXWin() ? Number(getTotalXWin()) : 0;
  const totalOWin = getTotalOWin() ? Number(getTotalOWin()) : 0;
  const totalDraw = getTotalDraw() ? Number(getTotalDraw()) : 0;

  return (
    <div className="flex justify-between items-center w-2/3 my-6 font-bold text-xl">
      <p className="text-player-one">X: {totalXWin}</p>
      <p className="text-neutral-500">Draw: {totalDraw}</p>
      <p className="text-player-two">O: {totalOWin}</p>
    </div>
  );
};

export default HistorySummary;
