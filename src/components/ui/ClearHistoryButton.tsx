import { useState } from "react";
const ClearHistoryButton = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <>
      <div
        className={`font-bold absolute z-20 bottom-4 right-6 text-white bg-red-500 flex justify-center items-center shadow-2xl shadow-amber-100 hover:cursor-pointer w-12 aspect-square rounded-[50%] text-3xl  border-white border-2
        // ${onHover ? "animate-bounce" : ""}`}
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
        {onHover ? "!" : "X"}
      </div>
      {/* <p
        className={`absolute bottom-4 z-10 animate-slideIn right-6 text-white bg-red-500 py-2 pl-4 pr-14 rounded-full text-2xl font-semibold
          ${onHover ? "animation-slideIn" : ""}
            `}
      >
        Clear history
      </p> */}
      {onHover ? (
        <p
          className={`absolute bottom-4 z-10 animate-slideIn right-6 text-white bg-red-500 py-2 pl-4 pr-14 rounded-full text-2xl font-semibold shadow-2xl ${
            onHover ? "animation-slideIn" : "animation-slideIn"
          }
            `}
        >
          Clear history
        </p>
      ) : null}
      <div
        className={`absolute z-10 bottom-4 right-6 rounded-full w-56 h-12
          ${onHover ? "animate-appear" : ""}`}
      ></div>
      <div
        className={`absolute z-10 bottom-4 translate-x-28 right-6 rounded-full w-40 h-12
          ${onHover ? "animate-appear" : ""}`}
      ></div>
    </>
  );
};

export default ClearHistoryButton;
