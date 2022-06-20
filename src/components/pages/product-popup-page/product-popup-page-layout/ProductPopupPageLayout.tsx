import React, {ReactNode} from 'react';
import PageLayout from '../../../general/page-layout/PageLayout';
import {LAYOUT_TEMPLATE} from '../../../ui/layout/Layout';

type Props = {
  title?: string;
  content: ReactNode;
};

const ProductPopupPageLayout = ({title, content}: Props) => {
  return (
    <PageLayout template={LAYOUT_TEMPLATE.POPUP}>
      {title && (
        <h1 className="font-bold text-2xl md:text-3xl mb-4">{title}</h1>
      )}
      <div>{content}</div>
    </PageLayout>
  );
};

export default ProductPopupPageLayout;
