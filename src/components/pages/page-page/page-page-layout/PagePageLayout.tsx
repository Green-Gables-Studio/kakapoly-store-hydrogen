import React, {ReactNode} from 'react';
import PageLayout from '../../../general/page-layout/PageLayout';

type Props = {
  title: string;
  content: ReactNode;
};

const PagePageLayout = ({title, content}: Props) => {
  return (
    <PageLayout>
      <div className="max-w-[704px] mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
        <div className="mt-10">{content}</div>
      </div>
    </PageLayout>
  );
};

export default PagePageLayout;
