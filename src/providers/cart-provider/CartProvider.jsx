import React, {createContext} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';
import {useCartState} from '../cart-state-provider/CartStateProvider';

export default function CartProvider({children, numCartLines}) {
  const {openCart} = useCartState();

  return (
    <ShopifyCartProvider
      numCartLines={numCartLines}
      onLineAdd={() => {
        openCart();
      }}
      onCreate={() => {
        openCart();
      }}
    >
      {children}
    </ShopifyCartProvider>
  );
}
