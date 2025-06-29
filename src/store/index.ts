import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import counterReducer from './slices/counterSlice'; 

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
