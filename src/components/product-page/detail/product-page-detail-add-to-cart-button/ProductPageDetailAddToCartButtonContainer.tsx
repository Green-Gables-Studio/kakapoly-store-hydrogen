import {useCart, useProduct, useRouteParams} from '@shopify/hydrogen';
import {useNavigate} from '@shopify/hydrogen/client';
import React, {useEffect, useState} from 'react';
import useProductPretotypingCollectData from '../../../../hooks/useProductPretotypingCollectData';
import useProductPretotypingMetafields from '../../../../hooks/useProductPretotypingMetafields';
import {useCartState} from '../../../../providers/cart-state-provider/CartStateProvider';
import {useProductPageState} from '../../../../providers/product-page-state-provider/ProductPageStateProvider';
import ProductPageDetailAddToCartButton from './ProductPageDetailAddToCartButton';

type Props = {};

export default function ProductPageDetailAddToCartButtonContainer({}: Props) {
  const [loading, setLoading] = useState(false);
  const {productHandle} = useRouteParams();
  const navigate = useNavigate();
  const {status, linesAdd} = useCart();
  const {openCart}: any = useCartState();
  const {quantity} = useProductPageState();
  const {selectedOptions, selectedVariant} = useProduct();
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
