import {
  useCart,
  CartCheckoutButton,
  Link,
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  CartShopPayButton,
  CartEstimatedCost,
  useCartLine,
} from '@shopify/hydrogen/client';
import {Dialog} from '@headlessui/react';

import {useCartState} from '../cart-provider/CartProvider.client';

/**
 * A client component that contains the merchandise that a customer intends to purchase, and the estimated cost associated with the cart
 */
export default function CartModal() {
  const {isCartOpen, closeCart} = useCartState();
  const {totalQuantity} = useCart();

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`z-20 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${
          isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={isCartOpen ? closeCart : null}
      />
      <Dialog open={isCartOpen} onClose={closeCart}>
        <Dialog.Overlay className="fixed z-20 inset-0 bg-gray-50 opacity-75" />
        <div
          className={`absolute flex flex-col md:block z-20 top-0 left-0 right-0 bottom-0 md:top-7 h-full md:left-auto md:right-7 md:bottom-auto md:h-auto md:max-h-[calc(100vh-56px)] bg-gray-50 w-full md:w-[470px] rounded-b-lg shadow-2xl ${
            totalQuantity === 0 ? 'overflow-hidden' : 'overflow-y-scroll'
          }`}
        >
          <CartHeader />
          {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartItems />
              <CartFooter />
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}

function CartHeader() {
  const {closeCart} = useCartState();
  return (
    <header className="border-b border-gray-300 bg-white py-2 px-4 flex justify-between items-center sticky top-0">
      <button type="button" onClick={closeCart}>
        <ArrowIcon />
        <span className="sr-only">Close cart</span>
      </button>
      <span className="text-xs text-gray-500">
        Free shipping on orders over $50
      </span>
      <CartIconWithItems />
    </header>
  );
}

function CartItems() {
  return (
    <div className="px-7 flex-grow" role="table" aria-label="Shopping cart">
      <div role="row" className="sr-only">
        <div role="columnheader">Product image</div>
        <div role="columnheader">Product details</div>
        <div role="columnheader">Price</div>
      </div>
      <CartLines>
        <LineInCart />
      </CartLines>
    </div>
  );
}

function LineInCart() {
  const {merchandise} = useCartLine();
  return (
    <div
      role="row"
      className="flex py-7 border-b last:border-b-0 border-gray-300 text-gray-900"
    >
      <div role="cell" className="flex-shrink-0 mr-7">
        <Link to={`/products/${merchandise.product.handle}`}>
          <CartLineImage
            className="bg-white border border-black border-opacity-5 rounded-xl "
            options={{width: 98, height: 98, crop: 'center'}}
          />
        </Link>
      </div>
      <div
        role="cell"
        className="flex flex-col w-full justify-between items-start flex-grow-1 mr-4"
      >
        <Link
          to={`/products/${merchandise.product.handle}`}
          className="hover:underline"
        >
          <CartLineProductTitle className="text-lg font-medium" />
        </Link>
        <ul className="text-xs space-y-1">
          {merchandise.selectedOptions.map(({name, value}) => (
            <li key={name}>
              {name}: {value}
            </li>
          ))}
        </ul>
        <CartItemQuantity />
      </div>
      <div role="cell" className="flex flex-col justify-between items-end">
        <CartLineQuantityAdjustButton
          adjust="remove"
          aria-label="Remove from cart"
          className="disabled:pointer-events-all disabled:cursor-wait"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </CartLineQuantityAdjustButton>
        <CartLinePrice className="text-lg" />
      </div>
    </div>
  );
}

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

function CartFooter() {
  return (
    <footer className="bottom-0 sticky pb-8 border-t border-black border-opacity-5">
      <div className="relative h-60 bg-white text-gray-900 p-7">
        <div role="table" aria-label="Cost summary">
          <div role="row" className="flex justify-between">
            <span className="font-semibold" role="rowheader">
              Subtotal
            </span>
            <CartEstimatedCost
              amountType="subtotal"
              role="cell"
              className="text-right "
            />
          </div>
          <div role="row" className="flex justify-between mt-2">
            <span className="font-semibold" role="rowheader">
              Shipping
            </span>
            <span role="cell" className="uppercase">
              Free
            </span>
          </div>
        </div>
        <CartShopPayButton className="flex my-4 justify-center w-full bg-[#5a31f4] py-2 rounded-md" />
        <CartCheckoutButton className="block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700">
          Checkout
        </CartCheckoutButton>
      </div>
    </footer>
  );
}

function CartEmpty() {
  const {closeCart} = useCartState();
  return (
    <div className="p-7 flex flex-col">
      <p className="mb-4 text-lg text-gray-500 text-center">
        Your cart is empty
      </p>
      <button
        type="button"
        onClick={closeCart}
        className="block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700"
      >
        Continue Shopping
      </button>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5L19 8.5M19 8.5L12 15.5M19 8.5L1 8.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIconWithItems() {
  const {totalQuantity} = useCart();

  return (
    <>
      <div className="relative">
        <CartIcon />

        <div
          className={`bg-blue-700 text-xs rounded-full leading-none text-white absolute bottom-3 right-1 flex items-center justify-center transform translate-y-1/2 transition-all ${
            totalQuantity > 0 ? 'h-4 w-4' : 'h-0 w-0 overflow-hidden'
          }`}
          aria-hidden
        >
          {totalQuantity > 0 ? totalQuantity : null}
        </div>
      </div>
      <span className="sr-only">Cart, {totalQuantity} items</span>
    </>
  );
}

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5894 12H14.4106C13.8945 12 13.4632 12.3928 13.415 12.9067L12.205 25.8133C12.095 26.9865 13.018 28 14.1963 28H26.8037C27.982 28 28.905 26.9865 28.795 25.8133L27.585 12.9067C27.5368 12.3928 27.1055 12 26.5894 12Z"
        stroke="#1F2937"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M17 12V14.9895C17 17.0075 18.6359 18.6434 20.6539 18.6434V18.6434C22.6718 18.6434 24.3077 17.0075 24.3077 14.9895V12"
        stroke="#1F2937"
        strokeWidth="2"
      />
      <path
        d="M24 11L24 9.5C24 7.567 22.433 6 20.5 6V6C18.567 6 17 7.567 17 9.5L17 11"
        stroke="#1F2937"
        strokeWidth="2"
      />
    </svg>
  );
}
