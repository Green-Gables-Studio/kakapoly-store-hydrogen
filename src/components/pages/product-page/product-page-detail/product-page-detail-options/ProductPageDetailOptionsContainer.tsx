import {useProductOptions} from '@shopify/hydrogen';
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
