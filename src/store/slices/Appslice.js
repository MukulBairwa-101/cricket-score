import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upcomingMatches: [],
  currentMatches: [],
  searchedPlayers: [],
};

const stateContainer = createSlice({
  name: "stateContainer",
  initialState,
  reducers: {
    setUpcomingMatches: (state, { payload }) => {
      state.upcomingMatches = payload?.filter(
        (m) => m.matchStarted === false && m.matchEnded === false
      );
    },
    setCurrentMatches: (state, { payload }) => {
      state.currentMatches = payload?.filter(
        (m) => m.matchStarted === true && m.matchEnded === false
      );
    },
    setSearchedPlayers: (state, { payload }) => {
      state.searchedPlayers = payload;
    },
  },
});

export const { setUpcomingMatches, setCurrentMatches, setSearchedPlayers } =
  stateContainer.actions;
export default stateContainer.reducer;
