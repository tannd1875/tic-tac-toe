import { winnerType, playerWinType } from "../types/type";
import { PLAYER_DRAW, PLAYER_ONE, PLAYER_TWO } from "./const";
const WIN_MARKS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWinner = (playerMarks: number[]): winnerType => {
  if (playerMarks.length < 3) return { isWin: false, winnerMarks: [] };

  for (const win_mark of WIN_MARKS) {
    let flag = true;
    const temp: number[] = win_mark;
    for (const mark of win_mark) {
      if (playerMarks.indexOf(mark) == -1) flag = false;
    }
    if (flag) return { isWin: true, winnerMarks: temp };
  }
  return { isWin: false, winnerMarks: [] };
};

const getPlayerMarks = (matchMarks: number[], playerMark: number): number[] => {
  const iterator = matchMarks.keys();
  const playerMarks = [];
  for (const key of iterator) {
    if (matchMarks[key] == playerMark) playerMarks.push(key);
  }
  return playerMarks;
};

export const getPlayerWin = (matchMarks: number[]): playerWinType => {
  const playerXMarks = getPlayerMarks(matchMarks, PLAYER_ONE);
  const playerOMarks = getPlayerMarks(matchMarks, PLAYER_TWO);
  const isXWin = checkWinner(playerXMarks).isWin;
  const isOWin = checkWinner(playerOMarks).isWin;
  if (playerOMarks.length > 2 || playerXMarks.length > 2) {
    if (isXWin && !isOWin)
      return {
        player: PLAYER_ONE,
        winnerMarks: checkWinner(playerXMarks).winnerMarks,
      };
    if (!isXWin && isOWin)
      return {
        player: PLAYER_TWO,
        winnerMarks: checkWinner(playerOMarks).winnerMarks,
      };
    if (playerOMarks.length + playerXMarks.length == 9)
      if (!isXWin && !isOWin) return { player: PLAYER_DRAW, winnerMarks: [] };
  }
  return { player: 0, winnerMarks: [] };
};
