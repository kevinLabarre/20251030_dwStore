import { configureStore } from "@reduxjs/toolkit";

// Attention à l'import automatique !!
// On n'a pas besoin de déstructurer
import counterSlice from "./src/ReduxSlices/counterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
