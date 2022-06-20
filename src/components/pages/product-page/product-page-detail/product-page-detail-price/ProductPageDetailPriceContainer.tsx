import {useProductOptions} from '@shopify/hydrogen';
import React from 'react';
import {useProductPageState} from '../../../../../providers/product-page-state-provider/ProductPageStateProvider';
import ProductPageDetailPrice from './ProductPageDetailPrice';

type Props = {};

export default function ProductPageDetailPriceContainer({}: Props) {
  const {product} = useProductPageState();
  const {selectedVariant} = useProductOptions();

  if (!product) {
    return null;
  }

  return (
    <ProductPageDetailPrice
      product={product}
      variantId={selectedVariant?.id ?? ''}
    />
  );
}
