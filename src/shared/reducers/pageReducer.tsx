import { createSlice } from '@reduxjs/toolkit';

import { Page } from '../interfaces/state.interface';

const pageSlice = createSlice({
  name: 'game',
  initialState: Page.HOME,
  reducers: {
    setHome() {
      return Page.HOME;
    },
    setGame() {
      return Page.GAME;
    },
  },
});

export const { setHome, setGame } = pageSlice.actions;
export default pageSlice.reducer;
