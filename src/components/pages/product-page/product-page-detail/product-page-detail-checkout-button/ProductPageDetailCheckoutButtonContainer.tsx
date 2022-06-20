import {
  useInstantCheckout,
  useNavigate,
  useProductOptions,
  useRouteParams,
} from '@shopify/hydrogen';
import React, {useEffect, useState} from 'react';
import useProductPretotypingCollectData from '../../../../../hooks/useProductPretotypingCollectData';
import {useProductPageState} from '../../../../../providers/product-page-state-provider/ProductPageStateProvider';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';
import ProductPageDetailCheckoutButton from './ProductPageDetailCheckoutButton';

type Props = {};

export default function ProductPageDetailCheckoutButtonContainer({}: Props) {
  const [loading, setLoading] = useState(false);
  const {productHandle} = useRouteParams();
  const navigate = useNavigate();
  const {createInstantCheckout, checkoutUrl} = useInstantCheckout();
  const {quantity} = useProductPageState();
  const {selectedOptions, selectedVariant} = useProductOptions();

  let pretotyping = false;
  let databaseId = '';

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    pretotyping = SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.PRETOTYPING;
    databaseId = SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.DATABASE_ID;
  }

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
