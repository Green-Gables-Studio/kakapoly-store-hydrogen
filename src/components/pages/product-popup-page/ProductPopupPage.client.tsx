import {useRouteParams} from '@shopify/hydrogen';
import React from 'react';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsPolicyGuideContent from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/popups/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsPolicyGuideContent';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsProductGuideContent from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/popups/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsProductGuideContent';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsSizeGuideContent from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/popups/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsSizeGuideContent';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';
import ProductPopupPageLayout from './product-popup-page-layout/ProductPopupPageLayout';

type Props = {};

export default function ProductPopupPage(props: Props) {
  const {productHandle, popupHandle} = useRouteParams();

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    const {
      PRODUCT_GUIDE_POPUP_HANDLE,
      SIZE_GUIDE_POPUP_HANDLE,
      POLICY_GUIDE_POPUP_HANDLE,
    } = SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1;

    if (popupHandle === PRODUCT_GUIDE_POPUP_HANDLE) {
      return (
        <ProductPopupPageLayout
          content={
            <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsProductGuideContent />
          }
        />
      );
    }

    if (popupHandle === SIZE_GUIDE_POPUP_HANDLE) {
      return (
        <ProductPopupPageLayout
          content={
            <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsSizeGuideContent />
          }
        />
      );
    }

    if (popupHandle === POLICY_GUIDE_POPUP_HANDLE) {
      return (
        <ProductPopupPageLayout
          content={
            <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1PopupsPolicyGuideContent />
          }
        />
      );
    }
  }

  return null;
}
