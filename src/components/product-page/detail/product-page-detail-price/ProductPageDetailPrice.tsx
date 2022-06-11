import {ProductPrice} from '@shopify/hydrogen';
import {Product} from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import React from 'react';

type Props = {
  product: Product;
  variantId: string;
};

export default function ProductPageDetailPrice({product, variantId}: Props) {
  return (
    <>
      <ProductPrice
        className="text-gray-500 line-through text-base font-normal"
        priceType="compareAt"
        variantId={variantId}
        data={product}
      />
      <ProductPrice
        className="text-gray-900 text-lg font-semibold"
        variantId={variantId}
        data={product}
      />
    </>
  );
}
