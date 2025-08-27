
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
interface HowItWorksState {
  selectedStep: number | null;
}

// Slice for HowItWorks
const howItWorksSlice = createSlice({
  name: "howItWorks",
  initialState: { selectedStep: null } as HowItWorksState,
  reducers: {
    selectStep: (state, action: PayloadAction<number>) => {
      state.selectedStep = action.payload;
    },
    clearSelection: (state) => {
      state.selectedStep = null;
    },
  },
});

// Export actions
export const { selectStep, clearSelection } = howItWorksSlice.actions;

// Main store
export const store = configureStore({
  reducer: {
    howItWorks: howItWorksSlice.reducer,
    // other reducers if needed
    // counter: counterReducer,
    // auth: authReducer,
    // form: formReducer,
  },
});

// Types for useSelector and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
