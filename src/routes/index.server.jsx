import React from 'react';
import IndexPage from '../components/pages/index-page/IndexPage.client';
import {CacheLong, Seo, useShopQuery, gql} from '@shopify/hydrogen';

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
