import {Image} from '@shopify/hydrogen/client';
import {Image as ImageType} from '@shopify/hydrogen/dist/esnext/storefront-api-types';
import clsx from 'clsx';
import React from 'react';

type Props = {
  images: ImageType[];
};

export default function ProductPageGallery({images}: Props) {
  return (
    <>
      <div className={clsx('-ml-4', '-mr-4', 'md:hidden')}>
        <div
          className={clsx(
            'snap-x',
            'snap-mandatory',
            'flex',
            'overflow-x-auto',
            'scroll-pl-4',
            'gap-1',
          )}
        >
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className={clsx(
                  'shrink-0',
                  'snap-start',
                  'first:pl-4',
                  'last:pr-4',
                )}
              >
                <Image
                  className={clsx(
                    'border',
                    'border-gray-200',
                    'object-cover',
                    'object-center',
                    'rounded-lg',
                    'aspect-square',
                    'w-[calc(100vw-2rem)]',
                  )}
                  data={image}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* md 사이즈 이후 */}
      <div className={clsx('hidden', 'md:block')}>
        <div className={clsx('grid', 'grid-cols-2', 'gap-4')}>
          {images.map((image, index) => {
            return (
              <div key={image.id} className={clsx(index === 0 && 'col-span-2')}>
                <Image
                  className={clsx(
                    'border',
                    'border-gray-200',
                    'object-cover',
                    'object-center',
                    'rounded-lg',
                    'aspect-square',
                    'cursor-zoom-in',
                  )}
                  data={image}
                  onClick={() => {
                    window.open(image.url, '', 'popup,width=1200,height=1200');
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
