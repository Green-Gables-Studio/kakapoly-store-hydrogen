import {ProductPrice} from '@shopify/hydrogen/client';
import React from 'react';

type Props = {
  variantId: string;
};

export default function ProductPageDetailPrice({variantId}: Props) {
  return (
    <>
      <ProductPrice
        className="text-gray-500 line-through text-base font-normal"
        priceType="compareAt"
        variantId={variantId}
      />
      <ProductPrice
        className="text-gray-900 text-lg font-semibold"
        variantId={variantId}
      />
    </>
  );
}
