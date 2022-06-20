import {
  Image,
  MediaImage,
} from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import React from 'react';
import {useProductPageState} from '../../../../providers/product-page-state-provider/ProductPageStateProvider';
import ProductPageGallery from './ProductPageGallery';

type Props = {};

export default function ProductPageGalleryContainer({}: Props) {
  const {product} = useProductPageState();
  if (!product) {
    return null;
  }

  const mediaItems = product.media.nodes as MediaImage[];

  const images = mediaItems.reduce<Image[]>((acc, item) => {
    if (item.image) {
      return [...acc, item.image];
    }
    return acc;
  }, []);

  return <ProductPageGallery images={images} />;
}
