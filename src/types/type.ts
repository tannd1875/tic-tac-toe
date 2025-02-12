export type squareType = {
  mark: number;
  index: number;
  step?: number;
};

export type winnerType = {
  isWin: boolean;
  winnerMarks: number[];
};

export type playerWinType = {
  player: number;
  winnerMarks: number[];
};

export type matchHistoryType = {
  playerWin: number;
  totalSteps: number;
  steps: Array<number>;
  marks: Array<number>;
};

export type historyType = {
  totalXWin: number;
  totalDraw: number;
  totalOWin: number;
  historyList: matchHistoryType[];
};

export interface squareReviewType extends squareType {
  marks: Array<number>;
}
