import { useDispatch, useSelector } from 'react-redux';

import Modal from './components/UI/Modal/Modal';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './components/store/ui-slice';
import AppInfo from './components/AppInfo/AppInfo';

function App() {

  const showCart = useSelector(state => state.ui.showCart);
  const showInfoApp = useSelector(state => state.ui.showInfoApp);

  const dispatch = useDispatch();

  const handleToogleInfoApp = () => {
    dispatch(uiActions.hiddeInfoApp());
  }

  return (
    <Layout>
      <Modal openModal={showInfoApp} onClose={handleToogleInfoApp}> <AppInfo/> </Modal>
      {showCart && <Cart />}
      {!showCart && <h3 className='cart-hidden'> Please, click on the cart Button to show it...</h3>}
      <Products />
    </Layout>
  );
}

export default App;
