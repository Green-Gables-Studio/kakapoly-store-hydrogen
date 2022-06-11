import {useProductOptions} from '@shopify/hydrogen/dist/esnext/hooks/useProductOptions/useProductOptions.client';
import React from 'react';
import ProductPageDetailOptions from './ProductPageDetailOptions';

type Props = {};

export default function ProductPageDetailOptionsContainer({}: Props) {
  const {options, setSelectedOption, selectedOptions} = useProductOptions();

  return (
    <ProductPageDetailOptions
      options={options}
      selectedOptions={selectedOptions}
      onOptionValueChange={(optionName, value) => {
        if (!setSelectedOption) return;
        setSelectedOption(optionName, value);
      }}
    />
  );
}
