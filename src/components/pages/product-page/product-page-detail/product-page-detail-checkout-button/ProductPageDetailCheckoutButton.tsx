import clsx from 'clsx';
import React from 'react';
import Icon, {ICON_TYPE} from '../../../../ui/icon/Icon';
import SpinnerThirdSVG from '../../../../ui/svg/SpinnerThirdSVG';

type Props = {
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ProductPageDetailCheckoutButton(props: Props) {
  const {className, loading, ...rest} = props;

  return (
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
        'bg-white',
        'hover:bg-gray-50',
        'active:bg-gray-100',
        'border',
        'border-black',
      )}
      {...rest}
    >
      {/* {checkoutButton.loading ? <SpinnerIcon /> : '구매하기'} */}
      {loading ? (
        <Icon
          type={ICON_TYPE[24]}
          svg={<SpinnerThirdSVG className="animate-spin" fill="white" />}
        />
      ) : (
        '구매하기'
      )}
    </button>
  );
}
