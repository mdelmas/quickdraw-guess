import { createSlice } from '@reduxjs/toolkit';

import { GamePhase, ResultType } from '@interfaces/state.interface';

export const ROUNDS = 4;

const initialState = { phase: GamePhase.START, round: 0, score: 0 };

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
        round: state.round + 1,
        result: {
          type: action.payload.result,
        },
        score:
          action.payload.result === ResultType.SUCCESS
            ? state.score + 1
            : state.score,
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
