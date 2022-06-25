import {useSelector} from "react-redux";

const withCartDataInjector = (WrappedComponent) => (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return <WrappedComponent cartItems={cartItems} {...props}/>;
}

export default withCartDataInjector;
