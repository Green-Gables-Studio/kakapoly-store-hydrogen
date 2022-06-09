import React from 'react';
import PagePageLayout from './components/page-page-layout/PagePageLayout';

type Props = {
  page: any;
};

const PagePage = ({page}: Props) => {
  const {title, body} = page;
  return (
    <PagePageLayout
      title={title}
      content={
        <div
          dangerouslySetInnerHTML={{__html: body}}
          className="prose max-w-none"
        />
      }
    />
  );
};

export default PagePage;
