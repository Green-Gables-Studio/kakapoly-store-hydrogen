// src: ../../../..
import {useEffect, useCallback} from 'react';
import {
  useProduct,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  MediaFile,
  Image,
  useInstantCheckout,
  useCart,
  useNavigate,
} from '@shopify/hydrogen/client';
import clsx from 'clsx';
import React, {useState} from 'react';
import SpinnerThirdSVG from '../../../../components/svg/SpinnerThirdSVG';
import Icon from '../../../../components/icon/Icon';
import {
  PRODUCT_METAFIELD_NAMESPACES,
  PRODUCT_PRETOTYPING_METAFIELDS,
} from '../../../../constants';
import {ICON_TYPE} from '../../../../components/icon/Icon';
import {useCartState} from '../../../../providers/cart-state-provider/CartStateProvider';

const DEFAULT_CLASSES =
  'block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed';

const VARIANT_CLASSES = {
  primary:
    'text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700',
  secondary: 'bg-white hover:bg-gray-50 active:bg-gray-100 border border-black',
};

const ADD_TO_CART_BUTTON_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.primary}`;
const CHECKOUT_BUTTON_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.secondary}`;

// gallery
const MODEL_3D_TYPE = 'MODEL_3D';
const MODEL_3D_PROPS = {
  interactionPromptThreshold: '0',
};
const VIDEO_TYPE = 'VIDEO';
const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';

const ADD_TO_CART_DEFAULT_QUANTITY = 1;

function useAddToCartButton(
  variantId,
  quantity,
  pretotyping = false,
  sorryPagePath = '',
  collectData,
) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {status, linesAdd} = useCart();

  const {openCart} = useCartState();

  const disabled = loading;

  useEffect(() => {
    if (pretotyping) {
      return;
    }

    if (loading && status === 'idle') {
      setLoading(false);
      openCart();
    }
  }, [status, loading, openCart, pretotyping]);

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
        quantity,
        merchandiseId: variantId,
      },
    ]);
  };

  return {
    loading,
    disabled,
    handleClick,
  };
}

function useCheckoutButton(
  variantId,
  pretotyping = false,
  sorryPagePath = '',
  collectData,
) {
  const navigate = useNavigate();
  const {createInstantCheckout, checkoutUrl} = useInstantCheckout();
  const [loading, setLoading] = useState(false);

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
          merchandiseId: variantId,
        },
      ],
    });
  };

  return {
    loading,
    disabled,
    handleClick,
  };
}

export default function Content() {
  const {
    options,
    setSelectedOption,
    selectedOptions,
    media,
    selectedVariant,
    variants,
    metafields,
  } = useProduct();

  const pretotyping = metafields.find((metafield) => {
    return (
      metafield.namespace === PRODUCT_METAFIELD_NAMESPACES.PRETOTYPING &&
      metafield.key === PRODUCT_PRETOTYPING_METAFIELDS.PRETOTYPING
    );
  })?.value;

  const databaseId = metafields.find((metafield) => {
    return (
      metafield.namespace === PRODUCT_METAFIELD_NAMESPACES.PRETOTYPING &&
      metafield.key === PRODUCT_PRETOTYPING_METAFIELDS.DATABASE_ID
    );
  })?.value;

  const sorryPageHandle = metafields.find((metafield) => {
    return (
      metafield.namespace === PRODUCT_METAFIELD_NAMESPACES.PRETOTYPING &&
      metafield.key === PRODUCT_PRETOTYPING_METAFIELDS.SORRY_PAGE
    );
  })?.reference?.handle;
  const sorryPagePath = `/pages/${sorryPageHandle}`;

  const collectData = async (event) => {
    try {
      if (!databaseId) {
        throw Error('No database id provided.');
      }
      const response = await fetch('/api/notion/pages', {
        method: 'post',
        body: JSON.stringify({
          parent: {
            database_id: databaseId,
          },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: 'Knock Knock!',
                  },
                },
              ],
            },
            Event: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: event,
                  },
                },
              ],
            },
            Data: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: JSON.stringify(selectedOptions, null, 2),
                  },
                },
              ],
            },

            Environment: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: process.env.NODE_ENV,
                  },
                },
              ],
            },
          },
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const unavailableForSale = !selectedVariant.availableForSale;

  const addToCartButton = useAddToCartButton(
    selectedVariant.id,
    ADD_TO_CART_DEFAULT_QUANTITY,
    pretotyping,
    sorryPagePath,
    collectData,
  );
  const checkoutButton = useCheckoutButton(
    selectedVariant.id,
    pretotyping,
    sorryPagePath,
    collectData,
  );

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
          'grid md:gap-x-6 lg:gap-x-8 text-black',
          'grid-cols-1',
          'md:grid-cols-[7fr,5fr]',
          'lg:grid-cols-[8fr,4fr]',
        )}
      >
        <div className="flex flex-col gap-y-6">
          <div>
            {media.length > 0 && (
              <div
                className="gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar scroll-snap-x scroll-smooth md:h-auto place-content-start"
                tabIndex="-1"
              >
                <Image
                  fetchpriority="high"
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
                      fetchpriority="low"
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
                {unavailableForSale ? (
                  <>
                    <div>
                      <button className={CHECKOUT_BUTTON_CLASSES} disabled>
                        일시 품절
                      </button>
                      <p className="text-center mt-4">
                        빠른 시일 내에 준비하겠습니다.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-y-3">
                    <button
                      className={ADD_TO_CART_BUTTON_CLASSES}
                      disabled={addToCartButton.disabled}
                      onClick={addToCartButton.handleClick}
                    >
                      {addToCartButton.loading ? (
                        <SpinnerIcon />
                      ) : (
                        '장바구니에 담기'
                      )}
                    </button>
                    <button
                      className={CHECKOUT_BUTTON_CLASSES}
                      disabled={checkoutButton.disabled}
                      onClick={checkoutButton.handleClick}
                    >
                      {checkoutButton.loading ? <SpinnerIcon /> : '구매하기'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="border-gray-200 border-t mx-full"></div>
      </div>
      <div className="max-w-[704px] mx-auto">
        <ProductDescription className="prose max-w-none" />
      </div>
    </>
  );
}

function SpinnerIcon() {
  return (
    <Icon
      type={ICON_TYPE[24]}
      svg={<SpinnerThirdSVG className="animate-spin" fill="white" />}
    />
  );
}
