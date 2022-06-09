import {useProduct} from '@shopify/hydrogen';
import React from 'react';
import ProductPageDetailTitle from './ProductPageDetailTitle';

type Props = {};

const ProductPageDetailTitleContainer = (props: Props) => {
  const product = useProduct();
  return <ProductPageDetailTitle title={product.title ?? ''} />;
};

export default ProductPageDetailTitleContainer;
