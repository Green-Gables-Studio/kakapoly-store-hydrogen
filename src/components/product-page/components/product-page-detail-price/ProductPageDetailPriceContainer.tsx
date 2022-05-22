import {useProduct} from '@shopify/hydrogen/client';
import React from 'react';
import ProductPageDetailPrice from './ProductPageDetailPrice';

type Props = {};

export default function ProductPageDetailPriceContainer({}: Props) {
  const {selectedVariant} = useProduct();
  return <ProductPageDetailPrice variantId={selectedVariant?.id ?? ''} />;
}
