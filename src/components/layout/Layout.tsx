import React, {ReactNode} from 'react';
import CartProvider from '../../providers/cart-provider/CartProvider';
import CartStateProvider from '../../providers/cart-state-provider/CartStateProvider';
import MobileNavigationStateProvider from '../../providers/mobile-navigation-state-provider/MobileNavigationStateProvider';
import Cart from '../cart/Cart';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MobileNavigation from '../mobile-navigation/MobileNavigation';

export const LAYOUT_TEMPLATE = {
  DEFAULT: 'default',
  POPUP: 'popup',
} as const;

export type LAYOUT_TEMPLATE =
  typeof LAYOUT_TEMPLATE[keyof typeof LAYOUT_TEMPLATE];

type Props = {
  template?: LAYOUT_TEMPLATE;
  children?: ReactNode;
};

export default function Layout({
  template = LAYOUT_TEMPLATE.DEFAULT,
  children,
}: Props) {
  return (
    <MobileNavigationStateProvider>
      <CartStateProvider>
        <CartProvider numCartLines={null}>
          <div className="min-h-screen max-w-screen text-gray-900 font-sans">
            {template === LAYOUT_TEMPLATE.DEFAULT && (
              <>
                <Header />
                <Cart />
                <MobileNavigation />
                <main
                  role="main"
                  id="mainContent"
                  className="relative bg-gray-50"
                >
                  <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-10">
                    {children}
                  </div>
                </main>
                <Footer />
              </>
            )}
            {template === LAYOUT_TEMPLATE.POPUP && (
              <main
                role="main"
                id="mainContent"
                className="relative bg-gray-50"
              >
                <div className="mx-auto max-w-screen-xl min-h-screen px-4 md:px-8 py-10">
                  {children}
                </div>
              </main>
            )}
          </div>
        </CartProvider>
      </CartStateProvider>
    </MobileNavigationStateProvider>
  );
}
