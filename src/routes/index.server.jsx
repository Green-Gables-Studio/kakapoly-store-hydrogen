import React from 'react';
import IndexPage from '../pages/index-page/IndexPage.client';
import Layout from '../components/layout/Layout';
import gql from 'graphql-tag';
import {CacheDays, Seo, useShopQuery} from '@shopify/hydrogen';

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
      <Layout>
        <IndexPage data={dummyDataFromAServer} />
      </Layout>
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
