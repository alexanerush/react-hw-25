import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeOrder, clearCart } from '../../store/slices/ordersSlice';

const Order: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const dispatch = useDispatch();

  const handleRemoveOrder = (id: number) => {
    dispatch(removeOrder(id));
  };

  const totalAmount = orders.reduce(
    (sum, order) => sum + order.product.price * order.quantity,
    0
  );

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {orders.map((order) => (
              <div
                key={order.id}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>
                  <strong>{order.product.meal}</strong> — {order.quantity} pcs at {order.product.price}€
                </span>
                <button
                  onClick={() => handleRemoveOrder(order.id)}
                  style={{
                    backgroundColor: '#ff5c5c',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    padding: '4px 10px',
                    cursor: 'pointer',
                  }}
                >
                  ✖
                </button>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '30px' }}>
            Total: <span style={{ color: '#35B8BE' }}>{totalAmount.toFixed(2)} €</span>
          </h2>
        </>
      )}
    </div>
  );
};

export default Order;
