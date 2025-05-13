import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
// import { DUMMY_PRODUCTS } from '../../DUMMY_DATA/DUMMY_PRODUCTS';
import { useEffect, useState } from 'react';
import { uiActions } from '../store/ui-slice';

const urlProducts = 'https://redux-cart-fa5bd-default-rtdb.europe-west1.firebasedatabase.app/cart-products.json';

let initialProducts = [];

const Products = (props) => {

  const [dataProducts, setDataProducts] = useState(initialProducts);
  const fetchingProducts = useSelector(state => state.ui.fetchingProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    async function gettingProducts() {

      dispatch(uiActions.setFetchingProducts(true));

      const response = await fetch(urlProducts);
      
      if (!response.ok) {
        // Manage the error
      }

      const dataResponse = await response.json();
      setDataProducts(dataResponse);
      dispatch(uiActions.setFetchingProducts(false));
    }

    gettingProducts();

  }, [dispatch])

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {fetchingProducts && <h2> Fetching products... </h2>}
      {!fetchingProducts && <ul>
        {dataProducts.map((item) => <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
      </ul>}
    </section>
  );
};

export default Products;
