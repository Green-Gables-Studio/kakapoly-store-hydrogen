import {ProductTitle, useRouteParams} from '@shopify/hydrogen/client';
import clsx from 'clsx';
import React from 'react';
import ProductPageDetailLayout from '../product-page-detail-layout/ProductPageDetailLayout';
import ProductPageDetailPriceContainer from '../product-page-detail-price/ProductPageDetailPriceContainer';
import ProductPageDetailOptionsContainer from '../product-page-detail-options/ProductPageDetailOptionsContainer';
import ProductPageDetailButtonsContainer from '../product-page-detail-buttons/ProductPageDetailButtonsContainer';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1DetailDescription from '../../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1DetailDescription';
import ProductPageDetailQuantityContainer from '../product-page-detail-quantity/ProductPageDetailQuantityContainer';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';

type Props = {};

export default function ProductPageDetail({}: Props) {
  const {productHandle} = useRouteParams();

  const sections = [
    /**
     * title and price section
     */
    <div className="mt-10 md:mt-0">
      <div>
        <ProductTitle
          as="h1"
          className={clsx('font-bold', 'text-2xl', 'md:text-3xl')}
        />
      </div>
      <div className="mt-4">
        <ProductPageDetailPriceContainer />
      </div>
    </div>,
    /**
     * order section
     */
    <div className="space-y-8 mt-8">
      <ProductPageDetailOptionsContainer />
      <ProductPageDetailQuantityContainer />
      <ProductPageDetailButtonsContainer />
    </div>,
  ];

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    sections.push(
      <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1DetailDescription />,
    );
  }

  return <ProductPageDetailLayout sections={sections} />;
}
