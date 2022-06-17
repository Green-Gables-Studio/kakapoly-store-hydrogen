import React from 'react';
import IndexPage from '../pages/index-page/IndexPage.client';
import {
  CacheLong,
  Seo,
  useShopQuery,
  gql,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
} from '@shopify/hydrogen';

export default function () {
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  const dummyDataFromAServer = {
    greetings: 'hello world!',
  };
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
    preload: '*',
  });

  return (
    <>
      <Seo
        type="defaultSeo"
        data={{
          title: name,
          description,
        }}
      />
      <IndexPage data={dummyDataFromAServer} />
    </>
  );
}

const QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
