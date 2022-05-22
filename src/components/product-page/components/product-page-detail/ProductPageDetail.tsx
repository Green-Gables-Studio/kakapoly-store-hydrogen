import {ProductTitle} from '@shopify/hydrogen/client';
import clsx from 'clsx';
import React from 'react';
import ProductPageDetailLayout from '../product-page-detail-layout/ProductPageDetailLayout';
import ProductPageDetailPriceContainer from '../product-page-detail-price/ProductPageDetailPriceContainer';
import ProductPageDetailOptionsContainer from '../product-page-detail-options/ProductPageDetailOptionsContainer';
import ProductPageDetailButtonsContainer from '../product-page-detail-buttons/ProductPageDetailButtonsContainer';

type Props = {};

export default function ProductPageDetail({}: Props) {
  return (
    <ProductPageDetailLayout
      title={
        <ProductTitle
          as="h1"
          className={clsx('font-bold', 'text-2xl', 'md:text-3xl')}
        />
      }
      price={<ProductPageDetailPriceContainer />}
      options={<ProductPageDetailOptionsContainer />}
      buttons={<ProductPageDetailButtonsContainer />}
    />
  );
}
