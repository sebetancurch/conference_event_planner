// mealsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    numberOfPeople: 1,
    list: [
      { name: "Breakfast", cost: 50, selected: false },
      { name: "High Tea", cost: 25, selected: false },
      { name: "Lunch", cost: 65, selected: false },
      { name: "Dinner", cost: 70, selected: false },
    ],
  },
  reducers: {
    toggleMealSelection: (state, action) => {
      const { payload: index } = action;
      state.list[index].selected = !state.list[index].selected;
    },
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },
  },
});

export const { toggleMealSelection, setNumberOfPeople } = mealsSlice.actions;

export default mealsSlice.reducer;
