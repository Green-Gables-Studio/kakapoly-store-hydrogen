import clsx from 'clsx';
import React, {ReactNode} from 'react';
import PageLayout from '../../../general/page-layout/PageLayout';

type Props = {
  gallery: ReactNode;
  detail: ReactNode;
  sections: ReactNode;
};

export default function ProductPageLayout({gallery, detail, sections}: Props) {
  return (
    <>
      <PageLayout>
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
      </PageLayout>
    </>
  );
}
