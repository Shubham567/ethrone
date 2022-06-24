import React from 'react';
import PropTypes from 'prop-types';
import BWImage from "../BWImage";

const Product = ({name,brand,price,src,alt, size = 200,...props}) => {
  return (
    <div className="relative" >
      <BWImage src={src} alt={alt} width={size} height={size} {...props} />
      <div className="flex">
        <div className="w-10/12">
          <h2 className="text-black text-xl dark:text-white font-semibold">{name}</h2>
          <h3 className="text-black dark:text-white">{brand}</h3>
          <h4 className="text-black text-xs dark:text-white ">{price}</h4>
        </div>
        <div className="w-2/12 mt-2">
          <button className="btn btn-sm">+</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {

};

export default Product;
