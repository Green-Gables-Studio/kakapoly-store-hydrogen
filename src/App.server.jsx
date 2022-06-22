import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
  Route,
  FileRoutes,
  ShopifyProvider,
  PerformanceMetrics,
  PerformanceMetricsDebug,
} from '@shopify/hydrogen';
import {Suspense} from 'react';
import MetaPixel from './components/general/meta-pixel/MetaPixel.client';
import {GoogleAnalytics} from './components/general/google-analytics/GoogleAnalytics.client';

function App() {
  return (
    <>
      <Suspense fallback={<>{/* Loading... */}</>}>
        <ShopifyProvider>
          <Router>
            <FileRoutes />
            <Route path="*" page={<>Not Found</>} />
          </Router>
          <PerformanceMetrics />
          {import.meta.env.DEV && <PerformanceMetricsDebug />}
        </ShopifyProvider>
      </Suspense>
      <MetaPixel />
      <GoogleAnalytics />
    </>
  );
}

export default renderHydrogen(App);
