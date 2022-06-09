import React, {ReactNode} from 'react';
import Layout from '../../../layout/Layout';

type Props = {
  title: string;
  content: ReactNode;
};

const PagePageLayout = ({title, content}: Props) => {
  return (
    <Layout>
      <div className="max-w-[704px] mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
        <div className="mt-10">{content}</div>
      </div>
    </Layout>
  );
};

export default PagePageLayout;
