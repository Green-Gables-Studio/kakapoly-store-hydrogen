import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
  Route,
  FileRoutes,
  ShopifyProvider,
  PerformanceMetrics,
  PerformanceMetricsDebug,
  HydrogenRouteProps,
  LocalizationProvider,
} from '@shopify/hydrogen';
import {Suspense} from 'react';
import MetaPixel from './components/general/meta-pixel/MetaPixel.client';
import {GoogleAnalytics} from './components/general/google-analytics/GoogleAnalytics.client';
import React from 'react';

function App({routes, request}: HydrogenRouteProps) {
  const pathname = new URL(request.normalizedUrl).pathname;
  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  return (
    <>
      <Suspense fallback={<>{/* Loading... */}</>}>
        <ShopifyProvider>
          <LocalizationProvider countryCode={countryCode}>
            <Router>
              <FileRoutes />
              <Route path="*" page={<>Not Found</>} />
            </Router>
            <PerformanceMetrics />
            {import.meta.env.DEV && <PerformanceMetricsDebug />}
          </LocalizationProvider>
        </ShopifyProvider>
      </Suspense>
      <MetaPixel />
      <GoogleAnalytics />
    </>
  );
}

export default renderHydrogen(App);
