import {useSelector} from "react-redux";

const withCartDataInjector = (WrappedComponent) => (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemCount = useSelector((state) => state.cart.cartItemCount);
  return <WrappedComponent cartItems={cartItems} cartItemCount={cartItemCount} {...props}/>;
}

export default withCartDataInjector;
