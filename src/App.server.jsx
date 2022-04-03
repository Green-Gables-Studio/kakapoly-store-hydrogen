import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, Route, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import shopifyConfig from '../shopify.config';
import CartProvider from './components/cart-provider/CartProvider.client';

function App({routes}) {
  return (
    <Suspense fallback={<>{/* Loading... */}</>}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <CartProvider>
          <Router>
            <FileRoutes routes={routes} />
            <Route path="*" page={<>Not Found</>} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {shopifyConfig, routes});
