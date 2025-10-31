import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // En théorie, avec les store (et donc avec Redux), on ne modifie pas directement le state,
      // On est censé en faire une copie, la modifier puis retourner cette copie modifiée.
      // Avec redux toolkit ON PEUT MODIFIER LE STATE DIRECTEMENT

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      // Un objet 'action' contient un type et un payload
      // Redux et redux toolkit, on n'a jamais besoin de récupérer le type
      // Par contre la payload contiendra la valeur que l'on peut passer à nos reducer
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
