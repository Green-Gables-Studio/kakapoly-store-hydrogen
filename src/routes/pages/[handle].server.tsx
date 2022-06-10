// src = ../..
import {useShop, useShopQuery, Seo, gql} from '@shopify/hydrogen';
import React from 'react';
import PagePage from '../../components/page-page/PagePage.client';

export default function Page({params}: {params: any}) {
  const {languageCode} = useShop();

  const {handle} = params;
  const {data} = useShopQuery<any>({
    query: QUERY,
    variables: {language: languageCode, handle},
  });

  if (!data.pageByHandle) {
    // TODO: Not found page 만들고 적용하기
    return 'not found';
  }

  const page = data.pageByHandle;

  return (
    <>
      <Seo
        type="page"
        data={{
          ...page,
          title: `${page.title} | 카카폴리 스토어`,
        }}
      />
      <PagePage page={page} />
    </>
  );
}

const QUERY = gql`
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    pageByHandle(handle: $handle) {
      title
      body
      title
      seo {
        description
        title
      }
    }
  }
`;
