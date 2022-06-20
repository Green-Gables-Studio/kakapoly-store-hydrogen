import {
  flattenConnection,
  ProductOptionsProvider,
  useRouteParams,
} from '@shopify/hydrogen';
import React from 'react';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';

import ProductPageDetail from './product-page-detail/ProductPageDetail';
import ProductPageGalleryContainer from './product-page-gallery/ProductPageGalleryContainer';
import ProductPageLayout from './product-page-layout/ProductPageLayout';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections from '../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections';
import {
  Product,
  ProductVariant,
} from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import ProductPageStateProvider from '../../../providers/product-page-state-provider/ProductPageStateProvider';

export default function ProductPage({product}: {product: Product}) {
  const initialVariant = flattenConnection<ProductVariant>(product.variants)[0];

  const {productHandle} = useRouteParams();

  let sections = null;

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    sections = <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections />;
  }

  return (
    <ProductPageStateProvider product={product}>
      <ProductOptionsProvider
        data={product}
        initialVariantId={initialVariant.id}
      >
        <ProductPageLayout
          gallery={<ProductPageGalleryContainer />}
          detail={<ProductPageDetail />}
          sections={sections}
        />
      </ProductOptionsProvider>
    </ProductPageStateProvider>
  );
}
