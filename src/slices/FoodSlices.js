import { createSlice } from "@reduxjs/toolkit";

const FoodSlices = createSlice({
  name: "food",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
  },
});


const PizzaSlice = createSlice({
  name: "Pizza",
  initialState: { items: [] },
  reducers: {
    addPizza: (state, action) => {
      state.items.push(action.payload);
    },
    removePizza: (state, action) => {
      state.items = state.items.filter((_, i) => i !== action.payload);
    },
  },
});

const BurgerSlice = createSlice({
  name: "Burger",
  initialState: { items: [] },
  reducers: {
    addBurger: (state, action) => {
      state.items.push(action.payload);
    },
    removeBurger: (state, action) => {
      state.items = state.items.filter((_, i) => i !== action.payload,1);
    },
  },
});



export const { addBurger, removeBurger } = BurgerSlice.actions;
export const BurgerReducer = BurgerSlice.reducer;


export const { addPizza, removePizza } = PizzaSlice.actions;
export const PizzaReducer = PizzaSlice.reducer;


export const { addToCart, removeFromCart } = FoodSlices.actions;
export default FoodSlices.reducer;
