import React from 'react';
import {useProductPageState} from '../../../../../providers/product-page-state-provider/ProductPageStateProvider';
import ProductPageDetailQuantity from './ProductPageDetailQuantity';

type Props = {};

const ProductPageDetailQuantityContainer = (props: Props) => {
  const {quantity, setQuantity} = useProductPageState();
  return (
    <ProductPageDetailQuantity
      quantity={quantity}
      onDecrease={(quantity) => {
        setQuantity(quantity);
      }}
      onIncrease={(quantity) => {
        setQuantity(quantity);
      }}
    />
  );
};

export default ProductPageDetailQuantityContainer;
