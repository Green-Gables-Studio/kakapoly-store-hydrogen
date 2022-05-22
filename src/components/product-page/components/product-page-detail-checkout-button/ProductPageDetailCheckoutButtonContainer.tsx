import {
  useNavigate,
  useInstantCheckout,
  useProduct,
} from '@shopify/hydrogen/client';
import React, {useEffect, useState} from 'react';
import useProductPretotypingCollectData from '../../../../hooks/useProductPretotypingCollectData';
import useProductPretotypingMetafields from '../../../../hooks/useProductPretotypingMetafields';
import ProductPageDetailCheckoutButton from './ProductPageDetailCheckoutButton';

type Props = {};

export default function ProductPageDetailCheckoutButtonContainer({}: Props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {createInstantCheckout, checkoutUrl} = useInstantCheckout();
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
        navigate(`${sorryPagePath}?collectedDataId=${responseData.id}`); // 저장된 데이터의 대상 id를 쏘리페이지에서도 필요할것 같아서 미리 작업해 둠.
      }, 1000);
      return;
    }

    createInstantCheckout({
      lines: [
        {
          quantity: 1,
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
