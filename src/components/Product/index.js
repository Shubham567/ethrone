import React from 'react';
import PropTypes from 'prop-types';
import BWImage from "../BWImage";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/reducer/cartReducer";

const Product = ({id,name,brand,price,src,alt, size = 200,...props}) => {

  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.cartItemCount[id]);

  const handleAddItemToCart = () => {
    dispatch(addItemToCart({
    item:{
      id, name, brand, price
    }
  }));
  }

  return (
    <div className="relative" >
      <BWImage src={src} alt={alt} width={size} height={size} {...props} />
      <div className="flex">
        <div className="w-9/12">
          <h2 className="text-black text-xl dark:text-white font-semibold">{name}</h2>
          <h3 className="text-black text-sm dark:text-white">{brand}</h3>
          <h4 className="text-black text-xs dark:text-white ">₹ {price}</h4>
        </div>
        <div className="w-3/12 mt-2 text-right">
          <button className="btn btn-sm" onClick={handleAddItemToCart}>+</button>
          <h4 className="text-sm text-gray-400 text-center">{itemCount}<span> {itemCount && "items"}</span></h4>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {

};

export default Product;
