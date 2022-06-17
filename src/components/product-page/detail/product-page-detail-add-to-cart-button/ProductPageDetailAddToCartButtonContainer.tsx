import {
  useCart,
  useNavigate,
  useProductOptions,
  useRouteParams,
} from '@shopify/hydrogen';

import React, {useEffect, useState} from 'react';
import useProductPretotypingCollectData from '../../../../hooks/useProductPretotypingCollectData';
import {useCartState} from '../../../../providers/cart-state-provider/CartStateProvider';
import {useProductPageState} from '../../../../providers/product-page-state-provider/ProductPageStateProvider';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';
import ProductPageDetailAddToCartButton from './ProductPageDetailAddToCartButton';

type Props = {};

export default function ProductPageDetailAddToCartButtonContainer({}: Props) {
  const [loading, setLoading] = useState(false);
  const {productHandle} = useRouteParams();
  const navigate = useNavigate();
  const {status, linesAdd} = useCart();
  const {openCart}: any = useCartState();
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
    selectedOptions,
    quantity,
  );

  const disabled = loading;

  const handleClick = async () => {
    setLoading(true);

    if (pretotyping) {
      const responseData = await collectData('addToCartButtonClick');

      if (!responseData) {
        setLoading(false);
        return;
      }

      setTimeout(() => {
        navigate(`/products/${productHandle}/sorry`);
      }, 1000);
      return;
    }

    linesAdd([
      {
        quantity,
        merchandiseId: selectedVariant?.id ?? '',
      },
    ]);
  };

  useEffect(() => {
    if (pretotyping) {
      return;
    }

    if (loading && status === 'idle') {
      setLoading(false);
      openCart();
    }
  }, [status, loading, openCart, pretotyping]);

  return (
    <ProductPageDetailAddToCartButton
      disabled={disabled}
      onClick={handleClick}
      loading={loading}
    />
  );
}
