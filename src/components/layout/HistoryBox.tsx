import HistoryTitle from "../ui/HistoryTitle";
import HistorySummary from "../ui/HistorySummary";
import HistoryItem from "../ui/HistoryItem";
import { matchHistoryType } from "../../types/type";
import { getHistoryList } from "../../utils/localStorage";
import ClearHistoryButton from "../ui/ClearHistoryButton";

const HistoryBox = () => {
  const historyList = getHistoryList();

  const renderHistoryItem = () => {
    if (historyList == null) {
      return (
        <p className="text-center italic text-xl mt-4 text-neutral-500">
          No match yet!
        </p>
      );
    }
    return (JSON.parse(historyList) as matchHistoryType[]).map(
      (item, index) => {
        return (
          <HistoryItem
            key={index}
            playerWin={item.playerWin}
            totalSteps={item.totalSteps}
            marks={item.marks}
            steps={item.steps}
          />
        );
      }
    );
  };
  return (
    <div className="w-1/3 md:min-w-[300px] min-w-[320px] flex flex-col items-center justify-between pt-4 border-neutral-200 border-2 relative">
      <HistoryTitle />
      <HistorySummary />
      <div className="w-full border-t-2 h-[460px] overflow-y-scroll pb-4">
        {renderHistoryItem()}
      </div>
      {localStorage.getItem("historyList") ? <ClearHistoryButton /> : null}
    </div>
  );
};

export default HistoryBox;
