import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';

import { cartActions } from '../store/cart-slice';

const CartItem = (props) => {
  const { id, title, quantity, total, price, description } = props.item;
  const item = {id, title, price, description};

  const dispatch = useDispatch();

  const handlerAddItem = () => {
    dispatch(cartActions.addItem({item}))
  };

  const handlerRemoveItem = () => {
    dispatch(cartActions.removeItem({id}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handlerRemoveItem}>-</button>
          <button onClick={handlerAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
