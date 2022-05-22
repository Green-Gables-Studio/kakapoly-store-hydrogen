import {useCart, useNavigate, useProduct} from '@shopify/hydrogen/client';
import React, {useEffect, useState} from 'react';
import useProductPretotypingCollectData from '../../../../hooks/useProductPretotypingCollectData';
import useProductPretotypingMetafields from '../../../../hooks/useProductPretotypingMetafields';
import {useCartState} from '../../../../providers/cart-state-provider/CartStateProvider';
import ProductPageDetailAddToCartButton from './ProductPageDetailAddToCartButton';

const ADD_TO_CART_DEFAULT_QUANTITY = 1;

type Props = {};

export default function ProductPageDetailAddToCartButtonContainer({}: Props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {status, linesAdd} = useCart();
  const {openCart}: any = useCartState();
  const {selectedOptions, selectedVariant} = useProduct();
  const pretotypingMetafields = useProductPretotypingMetafields();

  const pretotyping = pretotypingMetafields.pretotyping?.value as
    | boolean
    | undefined;
  const databaseId = pretotypingMetafields.databaseId?.value as
    | string
    | undefined;
  const sorryPageHandle = (pretotypingMetafields.sorryPage?.reference as any)
    ?.handle as string | undefined;
  const sorryPagePath = `/pages/${sorryPageHandle}`;

  const collectData = useProductPretotypingCollectData(
    databaseId ?? '',
    selectedOptions ?? {},
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
        navigate(`${sorryPagePath}?collectedDataId=${responseData.id}`); // 저장된 데이터의 대상 id를 쏘리페이지에서도 필요할것 같아서 미리 작업해 둠.
      }, 1000);
      return;
    }

    linesAdd([
      {
        quantity: ADD_TO_CART_DEFAULT_QUANTITY,
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
