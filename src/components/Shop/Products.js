
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { uiActions } from '../store/ui-slice';
import Error from '../Error/Error';

const urlGetProducts = 'https://redux-cart-fa5bd-default-rtdb.europe-west1.firebasedatabase.app/cart-products.json';

let initialProducts = [];

const Products = (props) => {

  const [dataProducts, setDataProducts] = useState(initialProducts);
  const [error, setError] = useState(null);
  const fetchingProducts = useSelector(state => state.ui.fetchingProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    async function gettingProducts() {

      dispatch(uiActions.setFetchingProducts(true));
      setError(null);

      const response = await fetch(urlGetProducts);

      if (!response.ok) {
        setError(await response.json());
        return;
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
      {error && <Error message={`Error buscando los productos ---> ${error.error}`}/>}
      {fetchingProducts && !error && <h2> Fetching products... </h2>}
      {!fetchingProducts && !error && <ul>
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
