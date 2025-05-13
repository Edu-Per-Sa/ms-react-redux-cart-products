import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
// import { useEffect } from 'react';

// function setCartLocalStore(cartItems) {
//   localStorage.setItem("myCart", JSON.stringify(cartItems));
// }

const Cart = (props) => {

  const items = useSelector(state => state.cart.items);

  // useEffect(() => {
  //   setCartLocalStore(items);
  //   console.log("useEffect ---")
  // }, [items])

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            total: item.quantity * item.price,
            price: item.price,
            description: item.description
          }}
        />
        )}
      </ul>
    </Card>
  );
};

export default Cart;
