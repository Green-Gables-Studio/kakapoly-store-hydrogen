import {useCartUI} from './CartUIProvider.client';
import CartShoppingIcon from './ui/CartShoppingIcon';

/**
 * A client component that defines the behavior when a user toggles a cart
 */
export default function CartToggle({handleClick}) {
  const cartUI = useCartUI();

  if (cartUI == null) {
    throw new Error('CartToggle must be a descendent of a CartUIProvider');
  }

  const {isCartOpen, toggleCart} = cartUI;

  return (
    <button
      type="button hover:opacity-80"
      aria-expanded={isCartOpen}
      aria-controls="cart"
      onClick={() => {
        toggleCart();
        handleClick();
      }}
    >
      <CartShoppingIcon />
      <span className="sr-only">Open cart</span>
    </button>
  );
}
