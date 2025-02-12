import { createContext, useContext } from "react";

export type matchContext = {
  turn: number;
  setTurn: (arg: number) => void;
  marks: Array<number>;
  setMarks: (arg: Array<number>) => void;
  playerWin: number;
  setPLayerWin: (arg: number) => void;
  winnerMarks: Array<number>;
  setWinnerMarks: (arg: Array<number>) => void;
  steps: Array<number>;
  setSteps: (arg: Array<number>) => void;
};

export const MatchContext = createContext<matchContext>({
  turn: 0,
  setTurn: () => {},
  marks: [],
  setMarks: () => {},
  playerWin: 0,
  setPLayerWin: () => {},
  winnerMarks: [],
  setWinnerMarks: () => {},
  steps: [],
  setSteps: () => {},
});

export const useGlobalMatchContext = () => useContext(MatchContext);
