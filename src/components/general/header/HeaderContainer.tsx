import React from 'react';
import {useCartState} from '../../../providers/cart-state-provider/CartStateProvider';
import Header from './Header';

type Props = {};

const HeaderContainer = (props: Props) => {
  const cartState = useCartState();

  return (
    <Header
      onCartButtonClick={() => {
        cartState.openCart();
      }}
    />
  );
};

export default HeaderContainer;
