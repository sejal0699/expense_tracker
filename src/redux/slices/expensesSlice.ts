import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    editExpense: (state, action) => {
      const index = state.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteExpense: (state, action) => {
      return state.filter(exp => exp.id !== action.payload);
    },
  },
});

export const { addExpense, editExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;