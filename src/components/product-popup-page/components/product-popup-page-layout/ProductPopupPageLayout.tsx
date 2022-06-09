import React, {ReactNode} from 'react';
import Layout, {LAYOUT_TEMPLATE} from '../../../layout/Layout';

type Props = {
  title?: string;
  content: ReactNode;
};

const ProductPopupPageLayout = ({title, content}: Props) => {
  return (
    <Layout template={LAYOUT_TEMPLATE.POPUP}>
      {title && (
        <h1 className="font-bold text-2xl md:text-3xl mb-4">{title}</h1>
      )}
      <div>{content}</div>
    </Layout>
  );
};

export default ProductPopupPageLayout;
