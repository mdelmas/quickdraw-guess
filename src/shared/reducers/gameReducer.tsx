import { createSlice } from '@reduxjs/toolkit';

import { GamePhase } from '../interfaces/state.interface';

export const ROUNDS = 4;

const gameSlice = createSlice({
  name: 'game',
  initialState: { phase: GamePhase.START, round: 0 },
  reducers: {
    startGuess(state) {
      return { phase: GamePhase.GUESS, round: state.round + 1 };
    },
    endGuess(state) {
      if (state.round === ROUNDS) {
        return { phase: GamePhase.RESULT, round: 0 };
      }
      return { phase: GamePhase.TRANSITION, round: 1 };
    },
  },
});

export const { startGuess, endGuess } = gameSlice.actions;
export default gameSlice.reducer;
