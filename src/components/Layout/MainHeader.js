import { useDispatch } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { uiActions } from '../store/ui-slice';

const MainHeader = (props) => {
  
  const dispatch = useDispatch();

  function handleInfoApp () {
    dispatch(uiActions.showInfoApp());
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <button onClick={handleInfoApp}> Show App Info </button>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
