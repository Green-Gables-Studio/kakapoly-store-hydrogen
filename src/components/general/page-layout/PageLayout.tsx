import React, {ReactNode} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen';
import CartContainer from '../cart/CartContainer';
import CartStateProvider from '../../../providers/cart-state-provider/CartStateProvider';
import HeaderContainer from '../header/HeaderContainer';
import Layout, {LAYOUT_TEMPLATE} from '../../ui/layout/Layout';
import MetaPixel from '../meta-pixel/MetaPixel.client';
import {GoogleAnalytics} from '../google-analytics/GoogleAnalytics.client';

type Props = {
  children?: ReactNode;
  template?: LAYOUT_TEMPLATE;
};

const PageLayout = ({template, children}: Props) => {
  return (
    <>
      <ShopifyCartProvider numCartLines={undefined}>
        <CartStateProvider>
          <Layout
            template={template}
            header={<HeaderContainer />}
            cart={<CartContainer />}
          >
            {children}
          </Layout>
        </CartStateProvider>
      </ShopifyCartProvider>
      <MetaPixel />
      <GoogleAnalytics />
    </>
  );
};

export default PageLayout;
