import React from 'react';
import IndexPage from '../pages/index-page/IndexPage.client';
import {CacheDays, Seo, useShopQuery, gql} from '@shopify/hydrogen';

export default function () {
  const dummyDataFromAServer = {
    greetings: 'hello world!',
  };
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: QUERY,
    cache: CacheDays(),
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
