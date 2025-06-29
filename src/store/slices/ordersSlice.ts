import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

interface Order {
  id: number;
  product: Product;
  quantity: number;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      const existingOrder = state.orders.find(
        (o) => o.product.id === action.payload.product.id
      );

      if (existingOrder) {
        existingOrder.quantity += action.payload.quantity;
      } else {
        state.orders.push(action.payload);
      }
    },
    removeOrder(state, action: PayloadAction<number>) {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    clearCart(state) {
      state.orders = [];
    },
  },
});

export const { addOrder, removeOrder, clearCart } = ordersSlice.actions;
export default ordersSlice.reducer;
