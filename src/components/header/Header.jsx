import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import Icon from '../icon/Icon';
import CartShoppingSVG from '../svg/CartShoppingSVG';
import {ICON_TYPE} from '../icon/Icon';
import {useCartState} from '../../providers/cart-state-provider/CartStateProvider';

function HeaderContent() {
  const cartState = useCartState();

  return (
    <header className="h-14 md:h-16 lg:h-18" role="banner">
      <div className="fixed z-20 h-14 md:h-16 lg:h-18 w-full border-b border-gray-200 bg-white bg-opacity-95">
        <div className="flex px-4 md:px-8 h-14 md:h-16 lg:h-18 max-w-screen-xl mx-auto">
          <div className="text-center w-full flex justify-between items-center">
            <div className="flex-1 flex justify-start">
              <Navigation />
            </div>
            <div className="flex-1 flex justify-center">
              <Logo />
            </div>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => {
                  cartState.openCart();
                }}
              >
                <CartShoppingIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return <HeaderContent />;
}

function CartShoppingIcon() {
  return (
    <Icon
      type={ICON_TYPE[28]}
      svg={<CartShoppingSVG className="h-5 hover:opacity-80" />}
    />
  );
}
