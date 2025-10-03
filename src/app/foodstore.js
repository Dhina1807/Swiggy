// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../slices/FoodSlices"
import  PizzaReducer  from "../slices/FoodSlices"
import { BurgerReducer } from "../slices/FoodSlices";


const store = configureStore({
  reducer: {
    food: foodReducer,
    Pizza : PizzaReducer,
    Burger : BurgerReducer
  },
});

export default store;
