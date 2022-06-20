import {useCart} from '@shopify/hydrogen';
import React from 'react';
import {useCartState} from '../../../providers/cart-state-provider/CartStateProvider';
import Cart from './Cart';

type Props = {};

const CartContainer = (props: Props) => {
  const {open, closeCart} = useCartState();

  const {lines} = useCart();

  return <Cart open={open} onClose={closeCart} lines={lines} />;
};

export default CartContainer;
