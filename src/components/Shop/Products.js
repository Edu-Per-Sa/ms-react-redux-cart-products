import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { DUMMY_PRODUCTS } from '../../DUMMY_DATA/DUMMY_PRODUCTS';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
