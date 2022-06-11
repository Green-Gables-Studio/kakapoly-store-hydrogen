import {useInstantCheckout, useRouteParams} from '@shopify/hydrogen';
import {useProductOptions} from '@shopify/hydrogen/dist/esnext/hooks/useProductOptions/useProductOptions.client';
import {useNavigate} from '@shopify/hydrogen/client';
import React, {useEffect, useState} from 'react';
import useProductPretotypingCollectData from '../../../../hooks/useProductPretotypingCollectData';
import useProductPretotypingMetafields from '../../../../hooks/useProductPretotypingMetafields';
import {useProductPageState} from '../../../../providers/product-page-state-provider/ProductPageStateProvider';
import ProductPageDetailCheckoutButton from './ProductPageDetailCheckoutButton';

type Props = {};

export default function ProductPageDetailCheckoutButtonContainer({}: Props) {
  const [loading, setLoading] = useState(false);
  const {productHandle} = useRouteParams();
  const navigate = useNavigate();
  const {createInstantCheckout, checkoutUrl} = useInstantCheckout();
  const {quantity} = useProductPageState();
  const {selectedOptions, selectedVariant} = useProductOptions();
  const pretotypingMetafields = useProductPretotypingMetafields();

  const pretotyping = pretotypingMetafields.pretotyping?.value as
    | boolean
    | undefined;
  const databaseId = pretotypingMetafields.databaseId?.value as
    | string
    | undefined;

  const collectData = useProductPretotypingCollectData(
    databaseId ?? '',
    selectedOptions ?? {},
    quantity,
  );

  const disabled = loading;

  useEffect(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  const handleClick = async () => {
    setLoading(true);

    if (pretotyping) {
      const responseData = await collectData('checkoutButtonClick');

      if (!responseData) {
        setLoading(false);
        return;
      }

      setTimeout(() => {
        navigate(`/products/${productHandle}/sorry`);
      }, 1000);
      return;
    }

    createInstantCheckout({
      lines: [
        {
          quantity,
          merchandiseId: selectedVariant?.id ?? '',
        },
      ],
    });
  };
  return (
    <ProductPageDetailCheckoutButton
      loading={loading}
      disabled={disabled}
      onClick={handleClick}
    />
  );
}
