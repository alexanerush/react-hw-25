import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import ordersReducer from './slices/ordersSlice'; 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    orders: ordersReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
