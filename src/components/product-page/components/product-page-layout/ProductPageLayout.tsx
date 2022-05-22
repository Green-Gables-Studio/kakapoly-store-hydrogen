import clsx from 'clsx';
import React, {ReactNode} from 'react';

type Props = {
  gallery: ReactNode;
  detail: ReactNode;
  description: ReactNode;
};

export default function ProductPageLayout({
  gallery,
  detail,
  description,
}: Props) {
  return (
    <>
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
      <div className="my-10">
        <div className="border-gray-200 border-t mx-full"></div>
      </div>
      <div className="max-w-[704px] mx-auto">{description}</div>
    </>
  );
}
