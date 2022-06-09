import {useProduct} from '@shopify/hydrogen';
import {
  ExternalVideo,
  Image,
  Maybe,
  MediaContentType,
  MediaImage,
  Model3d,
  Video,
} from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import React from 'react';
import ProductPageGallery from './ProductPageGallery';

type Props = {};

export default function ProductPageGalleryContainer({}: Props) {
  const {media} = useProduct();

  const images: Image[] = media
    .filter((mediaItem: Video | ExternalVideo | Model3d | MediaImage) => {
      return mediaItem.mediaContentType === MediaContentType.Image;
    })
    .map((imageMedia: MediaImage) => {
      return imageMedia.image;
    })
    .filter((image: Maybe<Image> | undefined) => {
      return image;
    });

  return <ProductPageGallery images={images} />;
}
