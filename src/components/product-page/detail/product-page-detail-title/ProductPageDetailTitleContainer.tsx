import React from 'react';
import {useProductPageState} from '../../../../providers/product-page-state-provider/ProductPageStateProvider';
import ProductPageDetailTitle from './ProductPageDetailTitle';

type Props = {};

const ProductPageDetailTitleContainer = (props: Props) => {
  const {product} = useProductPageState();

  if (!product) {
    return null;
  }

  return <ProductPageDetailTitle title={product.title ?? ''} />;
};

export default ProductPageDetailTitleContainer;
