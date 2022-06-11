import {Product} from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import React, {ReactNode, useContext} from 'react';

import {createContext, useState} from 'react';

type Props = {
  product: Product;
  children?: ReactNode;
};

export const ProductPageStateContext = createContext<{
  product: Product | null;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}>({
  product: null,
  quantity: 0,
  setQuantity: () => {},
});

const ProductPageStateProvider = ({product, children}: Props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductPageStateContext.Provider
      value={{
        product,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ProductPageStateContext.Provider>
  );
};

export default ProductPageStateProvider;

export function useProductPageState() {
  return useContext(ProductPageStateContext);
}
