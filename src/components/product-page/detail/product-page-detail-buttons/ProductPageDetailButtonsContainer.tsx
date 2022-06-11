import {useProductOptions} from '@shopify/hydrogen/dist/esnext/hooks/useProductOptions/useProductOptions.client';
import React from 'react';
import ProductPageDetailButtons from './ProductPageDetailButtons';

type Props = {};

export default function ProductPageDetailButtonsContainer({}: Props) {
  const {selectedVariant} = useProductOptions();

  const unavailableForSale = !selectedVariant?.availableForSale;

  return <ProductPageDetailButtons unavailableForSale={unavailableForSale} />;
}
