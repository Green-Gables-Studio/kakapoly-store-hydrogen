import {useProduct} from '@shopify/hydrogen/client';
import React from 'react';
import ProductPageDetailButtons from './ProductPageDetailButtons';

type Props = {};

export default function ProductPageDetailButtonsContainer({}: Props) {
  const {selectedVariant} = useProduct();

  const unavailableForSale = !selectedVariant?.availableForSale;

  return <ProductPageDetailButtons unavailableForSale={unavailableForSale} />;
}
