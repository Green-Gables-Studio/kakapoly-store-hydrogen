import clsx from 'clsx';
import React from 'react';

type Props = {title: string};

const ProductPageDetailTitle = ({title}: Props) => {
  return (
    <h1 className={clsx('font-bold', 'text-2xl', 'md:text-3xl')}>{title}</h1>
  );
};

export default ProductPageDetailTitle;
