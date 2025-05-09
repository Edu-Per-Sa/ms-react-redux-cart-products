import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const showCart = useSelector(state => state.ui.showCart);

  return (
    <Layout>
      {showCart && <Cart />}
      {!showCart && <h3 className='cart-hidden'> Please, click on the cart Button to show it...</h3>}
      <Products />
    </Layout>
  );
}

export default App;
