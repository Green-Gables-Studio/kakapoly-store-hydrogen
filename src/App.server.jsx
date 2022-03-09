import renderHydrogen from '@shopify/hydrogen/entry-server';
import {DefaultRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import shopifyConfig from '../shopify.config';
import DefaultSeo from './components/service/DefaultSeo.server';
import NotFound from './components/service/NotFound.server';
import LoadingFallback from './components/service/LoadingFallback';
import CartProvider from './components/service/CartProvider.client';

function App({log, pages, ...serverState}) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <CartProvider>
          <DefaultSeo />
          <DefaultRoutes
            pages={pages}
            serverState={serverState}
            log={log}
            fallback={<NotFound />}
          />
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

const pages = import.meta.globEager('./pages/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {pages});
