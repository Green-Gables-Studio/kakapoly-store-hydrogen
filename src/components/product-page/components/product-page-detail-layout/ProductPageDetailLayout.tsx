import React, {ReactNode, FC} from 'react';

type Props = {
  title: ReactNode;
  price: ReactNode;
  options: ReactNode;
  buttons: ReactNode;
};

export default function ProductPageDetailLayout({
  title,
  price,
  options,
  buttons,
}: Props) {
  return (
    <div className="md:sticky md:top-[112px]">
      <div className="mt-10 md:mt-0">
        <div>{title}</div>
        <div className="mt-4">{price}</div>
      </div>
      <div className="mt-10">{options}</div>
      <div className="mt-10">{buttons}</div>
    </div>
  );
}
