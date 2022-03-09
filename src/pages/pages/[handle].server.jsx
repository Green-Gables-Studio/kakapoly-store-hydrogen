import {useShopQuery, RawHtml, Seo} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../../components/service/Layout.server';
import NotFound from '../../components/service/NotFound.server';

export default function Page({params}) {
  const {handle} = params;
  const {data} = useShopQuery({query: QUERY, variables: {handle}});

  if (!data.pageByHandle) {
    return <NotFound />;
  }

  const page = data.pageByHandle;

  return (
    <Layout>
      <Seo type="page" data={page} />
      <h1 className="text-2xl font-bold">{page.title}</h1>
      <RawHtml string={page.body} className="prose mt-8" />
    </Layout>
  );
}

const QUERY = gql`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
      seo {
        title
        description
      }
    }
  }
`;
