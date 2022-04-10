import React from 'react';
import CartModal from '../cart-modal/CartModal';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Layout({children}) {
  return (
    <div className="min-h-screen max-w-screen text-gray-700 font-sans">
      <Header />
      <CartModal />
      <main role="main" id="mainContent" className="relative bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
