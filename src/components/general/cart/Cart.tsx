import {
  useCartLine,
  Link,
  CartLineImage,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  CartLineQuantity,
  CartLinePrice,
  CartEstimatedCost,
  CartCheckoutButton,
  CartLines,
} from '@shopify/hydrogen';
import {CartFragmentFragment} from '@shopify/hydrogen/dist/esnext/components/CartProvider/graphql/CartFragment';
import React from 'react';
import Drawer, {DRAWER_ANCHOR} from '../../ui/drawer/Drawer.client';
import Icon from '../../ui/icon/Icon';
import TrashCanSVG from '../../ui/svg/TrashCanSVG';

// TODO: 내부적으로 useCart를 사용하는 컴포넌트들은 주입하는 방식으로 리팩터링 해보기.. conatiner의 역할에 맞게 나누는게 목표

function CartItemQuantity() {
  return (
    <div className="flex border rounded border-gray-300 items-center overflow-auto mt-2">
      <CartLineQuantityAdjustButton
        adjust="decrease"
        aria-label="Decrease quantity"
        className="p-2 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
      <CartLineQuantity
        as="div"
        className="p-2 text-gray-900 text-xs text-center"
      />
      <CartLineQuantityAdjustButton
        adjust="increase"
        aria-label="Increase quantity"
        className="p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
    </div>
  );
}

export function CartLine() {
  const {merchandise} = useCartLine();

  return (
    <div
      role="row"
      className="flex py-4 border-b first:border-t border-gray-200 gap-x-4"
    >
      <div role="cell" className="w-20 shrink">
        <Link to={`/products/${merchandise.product.handle}`}>
          <CartLineImage
            className="bg-white border border-black border-opacity-5 rounded-lg"
            loaderOptions={{width: 80, height: 80, crop: 'center'}}
          />
        </Link>
      </div>

      <div role="cell" className="w-20 flex-1">
        <div className="flex flex-col items-start">
          <Link
            to={`/products/${merchandise.product.handle}`}
            className="hover:underline"
          >
            <CartLineProductTitle className="text-base font-semibold" />
          </Link>
          <ul className="text-xs space-y-1 mt-2">
            {merchandise.selectedOptions.map(({name, value}) => (
              <li key={name}>
                {name}: {value}
              </li>
            ))}
          </ul>
          <CartItemQuantity />
        </div>
      </div>

      <div
        role="cell"
        className="flex flex-col justify-between items-end w-20 shrink"
      >
        <CartLineQuantityAdjustButton
          adjust="remove"
          aria-label="Remove from cart"
          className="disabled:pointer-events-all disabled:cursor-wait"
        >
          <Icon svg={<TrashCanSVG />} />
        </CartLineQuantityAdjustButton>
        <CartLinePrice className="text-base font-semibold" />
      </div>
    </div>
  );
}

export function CartFooter() {
  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">배송비</span>
          <span role="cell" className="text-base font-semibold">
            무료
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">주문 금액</span>
          <CartEstimatedCost
            amountType="subtotal"
            role="cell"
            className="text-base font-semibold"
          />
        </div>
      </div>

      <div className="mt-4">
        <CartCheckoutButton className="block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700">
          구매하기
        </CartCheckoutButton>
      </div>
    </div>
  );
}

function CartWithItems() {
  return (
    <div>
      <div>
        <CartLines>
          <CartLine />
        </CartLines>
      </div>
      <div className="mt-4">
        <CartFooter />
      </div>
    </div>
  );
}

function CartEmpty() {
  return (
    <div className="h-40 flex justify-center items-center border-t border-b border-gray-200">
      <div className="text-sm">장바구니가 비어있습니다.</div>
    </div>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
  lines: CartFragmentFragment['lines']['edges'][1]['node'][];
};

const Cart = ({open, onClose, lines}: Props) => {
  return (
    <Drawer
      open={open}
      title="장바구니"
      onClose={onClose}
      anchor={DRAWER_ANCHOR.RIGHT}
    >
      {lines.length > 0 ? <CartWithItems /> : <CartEmpty />}
    </Drawer>
  );
};

export default Cart;
