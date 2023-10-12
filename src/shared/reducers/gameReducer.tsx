import { createSlice } from '@reduxjs/toolkit';

import { GamePhase, ResultType } from '@interfaces/state.interface';

export const ROUNDS = 4;

const initialState = {
  phase: GamePhase.START,
  results: [] as { type: ResultType }[],
};

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    resetGame() {
      return initialState;
    },
    startGuess(state) {
      return { ...state, phase: GamePhase.GUESS };
    },
    endGuess(state, action) {
      console.log('endGuess', action, JSON.parse(JSON.stringify(state)));

      return {
        phase: GamePhase.RESULT,
        results: state.results.concat(action.payload),
      };
    },
    displayTotal(state) {
      return { ...state, phase: GamePhase.TOTAL };
    },
  },
});

export const { resetGame, startGuess, endGuess, displayTotal } =
  gameSlice.actions;
export default gameSlice.reducer;
