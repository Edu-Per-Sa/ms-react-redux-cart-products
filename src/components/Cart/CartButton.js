import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../store/cart-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handlerToogleCart = () => {
    dispatch(cartActions.toogleShowHiddeCart())
  }

  return (
    <button className={classes.button} onClick={handlerToogleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
