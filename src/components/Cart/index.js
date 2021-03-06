import React from 'react';
import PropTypes from 'prop-types';
import BWImage from "../BWImage";

const calculateTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.price, 0);
}

const Cart = ({cartItems = [],cartItemCount,onViewCart,props}) => {
  const total = calculateTotal(cartItems);
  let cartItemList = Object.keys(cartItemCount).map((itemId) => {
    return  cartItems.find((item) => item.id === itemId)
  });


  return (
    <div className="flex-none text-white">
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span className="badge badge-sm indicator-item">{cartItems.length}</span>
          </div>
        </label>
        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-64 bg-base-100 shadow-lg">
          <div className="card-body">
            <span className="font-bold text-black text-lg">{cartItems.length} Items</span>
            {
              cartItemList.map((item) => {
                return <div key={item.id} className="text-gray-700 flex items-center gap-2">
                  <BWImage alt={item.name} src={item.thumb} width={30} height={30} imageClassName="rounded-full"/>
                  <span className="-mt-1">
                  {item.name}  ₹ {item.price} {cartItemCount[item.id] > 1 && `x ${cartItemCount[item.id]}`}
                  </span>
                </div>
              })
            }
            <span className="text-gray-700 font-semibold">Subtotal: ₹ {total || 0}</span>
            <div className="card-actions">
              <button className="btn btn-block" disabled onClick={onViewCart}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
};

export default Cart;
