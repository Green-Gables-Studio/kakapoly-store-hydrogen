import {
  useProduct,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  BuyNowButton,
  MediaFile,
  Image,
} from '@shopify/hydrogen/client';
import clsx from 'clsx';
import React from 'react';

export default function Content() {
  const {
    options,
    setSelectedOption,
    selectedOptions,
    media,
    selectedVariant,
    variants,
  } = useProduct();

  // options
  const DEFAULT_CLASSES =
    'block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed';

  const VARIANT_CLASSES = {
    primary:
      'text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700',
    secondary:
      'bg-white hover:bg-gray-50 active:bg-gray-100 border border-black',
  };

  const BUTTON_PRIMARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.primary}`;
  const BUTTON_SECONDARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.secondary}`;

  const isOutOfStock = !selectedVariant.availableForSale;

  // gallery
  const MODEL_3D_TYPE = 'MODEL_3D';
  const MODEL_3D_PROPS = {
    interactionPromptThreshold: '0',
  };
  const VIDEO_TYPE = 'VIDEO';
  const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';

  const featuredMedia = selectedVariant.image || media[0]?.image;
  const featuredMediaSrc = featuredMedia?.url.split('?')[0];
  const galleryMedia = media.filter((med) => {
    if (
      med.mediaContentType === MODEL_3D_TYPE ||
      med.mediaContentType === VIDEO_TYPE ||
      med.mediaContentType === EXTERNAL_VIDEO_TYPE
    ) {
      return true;
    }

    // variants의 이미지는 안보이게 처리
    if (variants.some((variant) => variant.image.url === med.image.url)) {
      return false;
    }

    return !med.image.url.includes(featuredMediaSrc);
  });

  return (
    <>
      <div
        className={clsx(
          'grid gap-x-8 text-black',
          'grid-cols-1',
          'md:grid-cols-[7fr,5fr]',
          'lg:grid-cols-[8fr,4fr]',
        )}
      >
        <div className="flex flex-col gap-y-6">
          <div>
            {media.length && (
              <div
                className="gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar scroll-snap-x scroll-smooth md:h-auto place-content-start"
                tabIndex="-1"
              >
                <Image
                  data={selectedVariant.image}
                  className="w-full h-full md:h-auto object-cover object-center flex-shrink-0 md:flex-shrink-none snap-start md:col-span-2 border border-gray-200 rounded-lg"
                />
                {galleryMedia.map((med) => {
                  let extraProps = {};

                  if (med.mediaContentType === MODEL_3D_TYPE) {
                    extraProps = MODEL_3D_PROPS;
                  }

                  // TODO: 클릭하면 zoom 되도록 추가하기
                  return (
                    <MediaFile
                      tabIndex="0"
                      key={med.id || med.image.id}
                      className="w-full h-full md:h-auto object-cover object-center transition-all snap-start border border-gray-200 flex-shrink-0 rounded-lg aspect-square"
                      data={med}
                      options={{
                        height: '485',
                        crop: 'center',
                      }}
                      {...extraProps}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="md:sticky md:top-[112px]">
            <div className="mt-10 md:mt-0">
              <ProductTitle
                as="h1"
                className={clsx('font-bold', 'text-2xl', 'md:text-3xl')}
              />
              <div className="mt-4">
                <ProductPrice
                  className="text-gray-500 line-through text-base font-normal"
                  priceType="compareAt"
                  variantId={selectedVariant.id}
                />
                <ProductPrice
                  className="text-gray-900 text-lg font-semibold"
                  variantId={selectedVariant.id}
                />
              </div>
            </div>
            <div className="mt-10">
              <div className="flex flex-col gap-y-6">
                {options.map(({name, values}) => {
                  return (
                    <React.Fragment key={name}>
                      <fieldset>
                        <legend className="mb-4 text-base font-semibold text-gray-900">
                          {name}
                        </legend>
                        <div className="flex items-center flex-wrap gap-4">
                          {values.map((value) => {
                            const checked = selectedOptions[name] === value;
                            const id = `option-${name}-${value}`;

                            return (
                              <label key={id} htmlFor={id}>
                                <input
                                  className="sr-only"
                                  type="radio"
                                  id={id}
                                  name={`option[${name}]`}
                                  value={value}
                                  checked={checked}
                                  onChange={() =>
                                    setSelectedOption(name, value)
                                  }
                                />
                                <div
                                  className={`py-2 px-3 border cursor-pointer rounded text-sm md:text-md ${
                                    checked
                                      ? 'bg-emerald-500 text-white'
                                      : 'text-gray-900'
                                  }`}
                                >
                                  {value}
                                </div>
                              </label>
                            );
                          })}
                        </div>
                        {name === '사이즈' && (
                          <a
                            href="#size-chart"
                            className="block underline text-gray-500 text-sm tracking-wide mt-4"
                          >
                            사이즈 표
                          </a>
                        )}
                      </fieldset>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className="mt-10">
              <div>
                {isOutOfStock ? (
                  <>
                    <div>
                      <BuyNowButton
                        className={BUTTON_SECONDARY_CLASSES}
                        disabled
                      >
                        일시 품절
                      </BuyNowButton>
                      <p className="text-center mt-4">
                        빠른 시일 내에 준비하겠습니다.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-y-3">
                    <AddToCartButton
                      className={BUTTON_PRIMARY_CLASSES}
                      disabled={isOutOfStock}
                    >
                      장바구니에 담기
                    </AddToCartButton>
                    <BuyNowButton
                      variantId={selectedVariant.id}
                      className={BUTTON_SECONDARY_CLASSES}
                      disabled={isOutOfStock}
                    >
                      구매하기
                    </BuyNowButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <div className="border-gray-200 border-t mx-full"></div>
      </div>
      <div className="max-w-[704px] mx-auto">
        <ProductDescription className="prose max-w-none" />
      </div>
    </>
  );
}
