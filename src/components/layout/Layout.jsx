import React from 'react';
import CartProvider from '../../providers/cart-provider/CartProvider';
import CartStateProvider from '../../providers/cart-state-provider/CartStateProvider';
import MobileNavigationStateProvider from '../../providers/mobile-navigation-state-provider/MobileNavigationStateProvider';
import Cart from '../cart/Cart';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MobileNavigation from '../mobile-navigation/MobileNavigation';

export default function Layout({children}) {
  return (
    <MobileNavigationStateProvider>
      <CartStateProvider>
        <CartProvider>
          <div className="min-h-screen max-w-screen text-gray-900 font-sans">
            <Header />
            <Cart />
            <MobileNavigation />
            <main role="main" id="mainContent" className="relative bg-gray-50">
              <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-10">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </CartStateProvider>
    </MobileNavigationStateProvider>
  );
}
