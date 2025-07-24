import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OptionsState {
  [key: string]: string;
}

const initialState: OptionsState = {};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<OptionsState>) => {
      state = action.payload;
    },
  },
});

export const { addOption } = optionsSlice.actions;
export default optionsSlice.reducer;
