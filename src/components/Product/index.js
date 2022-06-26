import React from 'react';
import BWImage from "../BWImage";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/reducer/cartReducer";

const Product = ({id,name,brand,price,src,thumb,alt, size = 200,...props}) => {

  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.cartItemCount[id]);

  const handleAddItemToCart = () => {
    dispatch(addItemToCart({
    item:{
      id, name, brand, price, thumb
    }
  }));
  }

  return (
    <div className="relative" >
      <BWImage src={src} alt={alt} width={size} height={size} {...props} />
      <div className="flex">
        <div className="w-9/12">
          <h2 className="text-black text-xl dark:text-white font-semibold break-all">{name.trim().slice(0,14)}</h2>
          <h3 className="text-black text-sm dark:text-white capitalize">{brand}</h3>
          <h4 className="text-black text-xs dark:text-white ">₹ {price}</h4>
        </div>
        <div className="w-3/12 mt-2 text-right">
          <div  className="tooltip z-10" data-tip="Add item to cart">
            <button className="btn btn-sm" onClick={handleAddItemToCart}>+</button>
          </div>
          <h4 className="text-sm text-gray-400 text-center">{itemCount}<span> {itemCount && "item"}</span></h4>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {

};

export default Product;
