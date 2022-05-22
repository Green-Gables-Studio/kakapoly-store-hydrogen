import {OptionWithValues, SelectedOptions} from '@shopify/hydrogen/client';
import React from 'react';

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
  );
}
