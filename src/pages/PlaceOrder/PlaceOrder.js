import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  // 🧮 Calculate values once
  const subtotal = getTotalCartAmount();
  const delivery = subtotal === 0 ? 0 : 2;
  const total = subtotal + delivery;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-feilds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${delivery}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
