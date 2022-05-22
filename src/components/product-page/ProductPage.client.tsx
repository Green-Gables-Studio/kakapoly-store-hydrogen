import {
  flattenConnection,
  ProductDescription,
  ProductProvider,
} from '@shopify/hydrogen/client';
import React from 'react';

import Layout from '../layout/Layout';
import ProductPageDetail from './components/product-page-detail/ProductPageDetail';
import ProductPageGalleryContainer from './components/product-page-gallery/ProductPageGalleryContainer';
import ProductPageLayout from './components/product-page-layout/ProductPageLayout';

export default function ProductPage({product}: {product: any}) {
  const initialVariant: any = flattenConnection(product.variants)[0];

  return (
    <Layout>
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <ProductPageLayout
          gallery={<ProductPageGalleryContainer />}
          detail={<ProductPageDetail />}
          description={<ProductDescription className="prose max-w-none" />}
        />
      </ProductProvider>
    </Layout>
  );
}
