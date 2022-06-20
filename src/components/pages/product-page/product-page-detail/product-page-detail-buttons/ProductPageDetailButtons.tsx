import React from 'react';
import ProductPageDetailButtonsLayout from '../product-page-detail-buttons-layout/ProductPageDetailButtonsLayout';
import ProductPageDetailAddToCartButtonContainer from '../product-page-detail-add-to-cart-button/ProductPageDetailAddToCartButtonContainer';
import ProductPageDetailCheckoutButtonContainer from '../product-page-detail-checkout-button/ProductPageDetailCheckoutButtonContainer';

type Props = {
  unavailableForSale?: boolean;
};

export default function ProductPageDetailButtons({unavailableForSale}: Props) {
  return (
    <ProductPageDetailButtonsLayout
      unavailableForSale={unavailableForSale}
      addToCartButton={<ProductPageDetailAddToCartButtonContainer />}
      checkoutButton={<ProductPageDetailCheckoutButtonContainer />}
    />
  );
}
