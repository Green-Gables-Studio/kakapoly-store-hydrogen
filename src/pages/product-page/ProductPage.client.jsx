import {
  flattenConnection,
  useProduct,
  useParsedMetafields,
  ProductProvider,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  BuyNowButton,
  MediaFile,
  Image,
} from '@shopify/hydrogen/client';
import {useState} from 'react';

import Layout from '../../components/layout/Layout';

function ProductOptions() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  // TODO: option 선택할 때 이미지 갤러리의 첫번째로 다시 스크롤하게 만들기 (모바일)
  return (
    <div className="flex flex-col gap-y-6">
      {options.map(({name, values}) => {
        return (
          <fieldset key={name}>
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
                      onChange={() => setSelectedOption(name, value)}
                    />
                    <div
                      className={`py-2 px-3 border cursor-pointer rounded text-sm md:text-md ${
                        checked ? 'bg-emerald-500 text-white' : 'text-gray-900'
                      }`}
                    >
                      {value}
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}

function Gallery() {
  const MODEL_3D_TYPE = 'MODEL_3D';
  const MODEL_3D_PROPS = {
    interactionPromptThreshold: '0',
  };
  const VIDEO_TYPE = 'VIDEO';
  const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';

  const {media, selectedVariant, variants} = useProduct();

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

  if (!media.length) {
    return null;
  }

  return (
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
  );
}

function AddToCartMarkup() {
  // TODO: clsx로 리팩터링하기
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

  const {selectedVariant} = useProduct();
  const isOutOfStock = !selectedVariant.availableForSale;

  return (
    <div>
      {isOutOfStock ? (
        <>
          {/* <p className="text-center">
            재고가 없습니다. 😢
            <br />
            빠른 시일 내에 준비하겠습니다.
          </p> */}
          <div>
            <BuyNowButton className={BUTTON_SECONDARY_CLASSES} disabled>
              일시 품절
            </BuyNowButton>
            <p className="text-center mt-4">빠른 시일 내에 준비하겠습니다.</p>
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
  );

  // return (
  //   <div className="space-y-3">
  //     <AddToCartButton
  //       className={BUTTON_PRIMARY_CLASSES}
  //       disabled={isOutOfStock}
  //     >
  //       {isOutOfStock ? '재고가 없습니다' : '장바구니에 담기'}
  //     </AddToCartButton>
  //     {isOutOfStock ? (
  //       <p className=" text-center">빠른 시일 안에 준비하겠습니다.</p>
  //     ) : (
  //       <BuyNowButton
  //         variantId={selectedVariant.id}
  //         className={BUTTON_SECONDARY_CLASSES}
  //       >
  //         구매하기
  //       </BuyNowButton>
  //     )}
  //   </div>
  // );
}

function SizeChart() {
  return (
    <>
      <h3 className="text-xl  font-semibold mt-8 mb-4" id="size-chart">
        사이즈 표
      </h3>
      <table className="min-w-full table-fixed text-sm text-center bg-white">
        <thead>
          <tr className="bg-black text-white">
            <th className="w-1/4 py-2 px-4 font-normal">Board Size</th>
            <th className="w-1/4 py-2 px-4 font-normal">154</th>
            <th className="w-1/4 py-2 px-4 font-normal">158</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border border-black">Weight Range</td>
            <td className="p-3 border border-black">120-180 lbs. /54-82kg</td>
            <td className="p-3 border border-black">150-200 lbs. /68-91 kg</td>
          </tr>
          <tr>
            <td className="p-3 border border-black">Waist Width</td>
            <td className="p-3 border border-black">246mm</td>
            <td className="p-3 border border-black">255mm</td>
          </tr>
          <tr>
            <td className="p-3 border border-black">Stance Width</td>
            <td className="p-3 border border-black">-40</td>
            <td className="p-3 border border-black">-40</td>
          </tr>
          <tr>
            <td className="p-3 border border-black">Binding Sizes</td>
            <td className="p-3 border border-black">
              Men&rsquo;s S/M, Women&rsquo;s S/M
            </td>
            <td className="p-3 border border-black">
              Men&rsquo;s L, Women&rsquo;s L
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default function ProductPage({product}) {
  const initialVariant = flattenConnection(product.variants)[0];

  const productMetafields = useParsedMetafields(product.metafields);
  const sizeChartMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'size_chart',
  );
  const sustainableMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'sustainable',
  );
  const lifetimeWarrantyMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' &&
      metafield.key === 'lifetime_warranty',
  );

  return (
    <Layout>
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <div className="grid grid-cols-1 md:grid-cols-[7fr,5fr] lg:grid-cols-[8fr,4fr] gap-x-8 text-black">
          <div className="flex flex-col gap-y-6">
            <div className="md:hidden">
              <ProductTitle as="h1" className="text-2xl font-bold  mb-4" />
              <div>
                <ProductPrice
                  className="text-gray-500 line-through text-base font-normal"
                  priceType="compareAt"
                  variantId={initialVariant.id}
                />
                <ProductPrice
                  className="text-gray-900 text-lg font-semibold"
                  variantId={initialVariant.id}
                />
              </div>
            </div>
            <div>
              <Gallery />
            </div>
          </div>

          <div>
            <div className="md:sticky md:top-[112px]">
              {/* md title & prices */}
              <div className="hidden md:block">
                <ProductTitle as="h1" className="text-3xl font-bold  mb-4" />
                <div>
                  <ProductPrice
                    className="text-gray-500 line-through text-base font-normal"
                    priceType="compareAt"
                    variantId={initialVariant.id}
                  />
                  <ProductPrice
                    className="text-gray-900 text-lg font-semibold"
                    variantId={initialVariant.id}
                  />
                </div>
              </div>

              <div className="mt-10">
                <ProductOptions />
                {(sizeChartMetafield?.value || true) && (
                  <a
                    href="#size-chart"
                    className="block underline text-gray-500 text-sm tracking-wide mt-4"
                  >
                    사이즈 표
                  </a>
                )}
              </div>

              <div className="mt-10">
                <AddToCartMarkup />
                <div className="flex items space-x-4">
                  {sustainableMetafield?.value && (
                    <span className="flex items-center mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-blue-600 mr-3"
                      >
                        <path
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071M16 12c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-gray-900 font-medium">
                        Sustainable Material
                      </span>
                    </span>
                  )}
                  {lifetimeWarrantyMetafield?.value && (
                    <span className="flex items-center mb-8">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current text-blue-600 mr-3"
                      >
                        <path
                          d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-gray-900 font-medium">
                        Lifetime Warranty
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12">
          <div className="border-gray-200 border-t mx-full"></div>
        </div>
        <div className="max-w-[704px]  mx-auto">
          <ProductDescription className="prose max-w-none" />
        </div>
      </ProductProvider>
    </Layout>
  );
}
