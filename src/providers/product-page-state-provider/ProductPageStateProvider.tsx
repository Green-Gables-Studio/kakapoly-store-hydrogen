import React, {ReactNode, useContext} from 'react';

import {createContext, useState} from 'react';

type Props = {
  children?: ReactNode;
};

export const ProductPageStateContext = createContext<{
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}>({
  quantity: 0,
  setQuantity: () => {},
});

const ProductPageStateProvider = (props: Props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductPageStateContext.Provider
      value={{
        quantity,
        setQuantity,
      }}
    >
      {props.children}
    </ProductPageStateContext.Provider>
  );
};

export default ProductPageStateProvider;

export function useProductPageState() {
  return useContext(ProductPageStateContext);
}
