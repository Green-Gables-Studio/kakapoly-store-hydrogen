import React from 'react';
import IndexPage from '../pages/index-page/IndexPage.client';
import DefaultSeo from '../components/default-seo/DefaultSeo.server';
import Layout from '../components/layout/Layout';

export default function () {
  const dummyDataFromAServer = {
    greetings: 'hello world!',
  };
  return (
    <>
      <DefaultSeo />
      <Layout>
        <IndexPage data={dummyDataFromAServer} />
      </Layout>
    </>
  );
}
