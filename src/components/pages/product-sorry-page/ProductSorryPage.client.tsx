import {useRouteParams} from '@shopify/hydrogen';
import React from 'react';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1SorryContent from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/sorry/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1SorryContent';
import {ProductsSignOfTheDeathlyHallowsTShirtBlackTest1SorryTitle} from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/sorry/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1SorryTitle';
import PagePageLayout from '../page-page/page-page-layout/PagePageLayout';

type Props = {};

export default function ProductSorryPage({}: Props) {
  const {productHandle} = useRouteParams();

  let title = '';
  let content = null;

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    title = ProductsSignOfTheDeathlyHallowsTShirtBlackTest1SorryTitle;
    content = <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1SorryContent />;
  }

  return <PagePageLayout title={title} content={content} />;
}
