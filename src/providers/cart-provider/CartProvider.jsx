import React from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen';

export default function CartProvider({children, numCartLines}) {
  return (
    <ShopifyCartProvider numCartLines={numCartLines}>
      {children}
    </ShopifyCartProvider>
  );
}
