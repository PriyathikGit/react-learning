import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice";


  const Store = configureStore({
            reducer:todoReducer
}) 

export default Store