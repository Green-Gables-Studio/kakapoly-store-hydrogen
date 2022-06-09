import {
  flattenConnection,
  ProductProvider,
  useRouteParams,
} from '@shopify/hydrogen';
import React from 'react';
import ProductPageStateProvider from '../../providers/product-page-state-provider/ProductPageStateProvider';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../components/contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';

import ProductPageDetail from './detail/product-page-detail/ProductPageDetail';
import ProductPageGalleryContainer from './gallery/product-page-gallery/ProductPageGalleryContainer';
import ProductPageLayout from './product-page-layout/ProductPageLayout';
import ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections from '../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections';

export default function ProductPage({product}: {product: any}) {
  const initialVariant: any = flattenConnection(product.variants)[0];

  const {productHandle} = useRouteParams();

  let sections = null;

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    sections = <ProductsSignOfTheDeathlyHallowsTShirtBlackTest1Sections />;
  }

  return (
    <ProductPageStateProvider>
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <ProductPageLayout
          gallery={<ProductPageGalleryContainer />}
          detail={<ProductPageDetail />}
          sections={sections}
        />
      </ProductProvider>
    </ProductPageStateProvider>
  );
}
