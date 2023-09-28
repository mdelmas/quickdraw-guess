export enum Page {
  HOME = 0,
  GAME = 1,
  GUESS = 2,
  SUCCESS = 3,
  FAILURE = 4,
}

export enum GamePhase {
  START,
  GUESS,
  TRANSITION,
  RESULT,
}

export type GameState = {
  phase: GamePhase;
  round: number;
  // word: string;
};

export type State = {
  game: GameState;
  page: Page;
};
