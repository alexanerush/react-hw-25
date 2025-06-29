import ordersReducer, { addOrder, removeOrder, clearCart } from './ordersSlice';
import { Product } from '../../types/Product';
import { expect, describe, it } from 'vitest';


const mockProduct: Product = {
  id: 'burger-123',
  meal: 'Burger Combo',
  price: 9.99,
  img: 'test.jpg',
};

describe('ordersSlice', () => {
  it('should return initial state', () => {
    const initialState = { orders: [] };
    const result = ordersReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual(initialState);
  });

  it('should add new order to empty cart', () => {
    const initialState = { orders: [] };
    const action = addOrder({
      id: 1,
      product: mockProduct,
      quantity: 1,
    });

    const result = ordersReducer(initialState, action);
    expect(result.orders.length).toBe(1);
    expect(result.orders[0].product.id).toBe('burger-123');
    expect(result.orders[0].quantity).toBe(1);
  });

  it('should increase quantity if product already exists', () => {
    const initialState = {
      orders: [
        {
          id: 1,
          product: mockProduct,
          quantity: 2,
        },
      ],
    };

    const action = addOrder({
      id: 2, 
      product: mockProduct,
      quantity: 3,
    });

    const result = ordersReducer(initialState, action);
    expect(result.orders.length).toBe(1);
    expect(result.orders[0].quantity).toBe(5); 
  });

  it('should remove order by id', () => {
    const initialState = {
      orders: [
        {
          id: 1,
          product: mockProduct,
          quantity: 1,
        },
      ],
    };

    const action = removeOrder(1);
    const result = ordersReducer(initialState, action);
    expect(result.orders.length).toBe(0);
  });

  it('should clear cart', () => {
    const initialState = {
      orders: [
        { id: 1, product: mockProduct, quantity: 2 },
        { id: 2, product: mockProduct, quantity: 1 },
      ],
    };    
    const result = ordersReducer(initialState, clearCart());
    expect(result.orders.length).toBe(0);
  });
});
