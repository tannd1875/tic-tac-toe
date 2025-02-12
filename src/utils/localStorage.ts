import { matchHistoryType } from "../types/type";
import { PLAYER_DRAW, PLAYER_ONE, PLAYER_TWO } from "./const";

export const saveMatchResult = (matchResult: matchHistoryType) => {
  const historyList = getHistoryList();
  if (historyList == null) {
    localStorage.setItem("historyList", JSON.stringify([matchResult]));
  } else {
    const newHistoryList: matchHistoryType[] = JSON.parse(historyList);
    newHistoryList.push(matchResult);
    localStorage.setItem("historyList", JSON.stringify(newHistoryList));
  }
};

export const getTotalXWin = () => {
  return localStorage.getItem("totalXWin");
};

export const setTotalXWin = () => {
  localStorage.setItem("totalXWin", calculateSummary(PLAYER_ONE).toString());
};

export const getTotalOWin = () => {
  return localStorage.getItem("totalOWin");
};

export const setTotalOWin = () => {
  localStorage.setItem("totalOWin", calculateSummary(PLAYER_TWO).toString());
};

export const getTotalDraw = () => {
  return localStorage.getItem("totalDraw");
};

export const setTotalDraw = () => {
  localStorage.setItem("totalDraw", calculateSummary(PLAYER_DRAW).toString());
};

export const calculateTotalSteps = (steps: Array<number>) => {
  let count = 0;
  steps.forEach((step) => {
    if (step) count += 1;
  });
  return count;
};

export const getHistoryList = () => {
  return localStorage.getItem("historyList");
};

export const calculateSummary = (player: number) => {
  const historyList = getHistoryList();
  if (historyList != null) {
    let total = 0;
    const list: matchHistoryType[] = JSON.parse(historyList);
    list.forEach((item) => {
      if (item.playerWin == player) total += 1;
    });
    return total;
  }
  return 0;
};
