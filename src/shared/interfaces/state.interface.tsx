export enum Page {
  HOME = 0,
  GAME = 1,
  GUESS = 2,
  SUCCESS = 3,
  FAILURE = 4,
}

export enum GamePhase {
  START = 0,
  GUESS = 1,
  RESULT = 2,
  TOTAL = 3,
}

export type GameState = {
  phase: GamePhase;
  round: number;
  score: number;
  result?: ResultType;
};

export type State = {
  game: GameState;
  page: Page;
};

export enum ResultType {
  SUCCESS = 0,
  FAILURE = 1,
}
