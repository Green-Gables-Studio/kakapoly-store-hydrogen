import {
  OptionWithValues,
  SelectedOptions,
  useRouteParams,
} from '@shopify/hydrogen';
import React from 'react';
import {SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1} from '../../../contents/products/sign-of-the-deathly-hallows-t-shirt-black-test-1/ProductsSignOfTheDeathlyHallowsTShirtBlackTest1.constants';

type Props = {
  options: OptionWithValues[];
  selectedOptions: SelectedOptions;
  onOptionValueChange: (optionName: string, value: string) => void;
};

export default function ProductPageDetailOptions({
  options,
  selectedOptions,
  onOptionValueChange,
}: Props) {
  const {productHandle} = useRouteParams();

  let sizeGuidePath = '';

  if (
    productHandle === SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1.HANDLE
  ) {
    const {SIZE_GUIDE_PATH} = SIGN_OF_THE_DEATHLY_HALLOW_T_SHIRT_BLACK_TEST_1;
    sizeGuidePath = SIZE_GUIDE_PATH;
  }

  return (
    <div className="flex flex-col gap-y-6">
      {options?.map((option) => {
        const {name, values} = option;
        return (
          <React.Fragment key={name}>
            <fieldset>
              <legend className="mb-4 text-base font-semibold text-gray-900">
                {name}
              </legend>
              <div className="flex items-center flex-wrap gap-4">
                {values.map((value) => {
                  const checked =
                    selectedOptions && selectedOptions[name] === value;
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
                        onChange={() => {
                          onOptionValueChange(name, value);
                        }}
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
                <div className="mt-4">
                  <a
                    href="#"
                    className="underline text-gray-500 text-sm font-medium"
                    onClick={() => {
                      window.open(
                        `${sizeGuidePath}`,
                        '',
                        'popup,width=610,height=700',
                      );
                    }}
                  >
                    사이즈 정보 알아보기
                  </a>
                </div>
              )}
            </fieldset>
          </React.Fragment>
        );
      })}
    </div>
  );
}
