import { useState } from "react";

const ClearHistoryButton = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className={`font-bold absolute bottom-4 right-6 text-white bg-red-500 flex justify-center items-center shadow-2xl shadow-amber-100 hover:cursor-pointer duration-500
        ${
          onHover
            ? "p-2 rounded-sm text-2xl"
            : "w-12 aspect-square rounded-[50%] text-3xl animate-bounce"
        }`}
      onMouseOver={() => {
        setOnHover(true);
      }}
      onMouseOut={() => {
        setOnHover(false);
      }}
      onClick={() => {
        localStorage.removeItem("totalXWin");
        localStorage.removeItem("totalOWin");
        localStorage.removeItem("totalDraw");
        localStorage.removeItem("historyList");
        window.location.reload();
      }}
    >
      {onHover ? "Clear history" : "X"}
    </div>
  );
};

export default ClearHistoryButton;
