import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handlerToogleCart = () => {
    dispatch(uiActions.toogleShowHiddeCart())
  }

  const itemQuantity = items.reduce((acumulated, item) => acumulated + item.quantity, 0)

  return (
    <button className={classes.button} onClick={handlerToogleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
