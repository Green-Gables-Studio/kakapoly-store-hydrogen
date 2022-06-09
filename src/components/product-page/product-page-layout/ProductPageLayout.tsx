import clsx from 'clsx';
import React, {ReactNode} from 'react';
import Layout from '../../layout/Layout';

type Props = {
  gallery: ReactNode;
  detail: ReactNode;
  sections: ReactNode;
};

export default function ProductPageLayout({gallery, detail, sections}: Props) {
  return (
    <>
      <Layout>
        <div
          className={clsx(
            'text-black',
            'grid',
            'md:gap-x-6 lg:gap-x-8',
            'grid-cols-1 md:grid-cols-[7fr,5fr] lg:grid-cols-[8fr,4fr]',
          )}
        >
          <div>{gallery}</div>
          <div>{detail}</div>
        </div>
        {sections}
      </Layout>
    </>
  );
}
