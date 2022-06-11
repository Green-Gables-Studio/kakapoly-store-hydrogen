import clsx from 'clsx';
import React, {ReactNode} from 'react';

type Props = {
  unavailableForSale?: boolean;
  addToCartButton: ReactNode;
  checkoutButton: ReactNode;
};

export default function ProductPageDetailButtonsLayout({
  unavailableForSale = false,
  addToCartButton,
  checkoutButton,
}: Props) {
  return (
    <div className="flex flex-col gap-y-3">
      {unavailableForSale ? (
        <>
          <button
            className={clsx(
              'block',
              'm-0',
              'w-full',
              'items-center',
              'justify-center',
              'uppercase',
              'font-medium',
              'text-center',
              'px-6',
              'py-4',
              'rounded',
              'disabled:border-gray-300',
              'disabled:bg-gray-300',
              'disabled:cursor-not-allowed',
              'text-white',
            )}
            disabled
          >
            품절 되었어요
          </button>
          <p className="text-center text-gray-500">
            빠른 시일 안에 준비할게요.
          </p>
        </>
      ) : (
        <>
          {addToCartButton}
          {checkoutButton}
        </>
      )}
    </div>
  );
}
