import {flattenConnection, ProductProvider} from '@shopify/hydrogen/client';
import React from 'react';

import Layout from '../layout/Layout';
import Content from './components/content/Content';

export default function ProductPage({product}: {product: any}) {
  const initialVariant: any = flattenConnection(product.variants)[0];

  return (
    <Layout>
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <Content />
      </ProductProvider>
    </Layout>
  );
}
