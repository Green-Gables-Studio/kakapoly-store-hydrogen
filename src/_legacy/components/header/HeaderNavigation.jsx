import React from 'react';
import HeaderDesktopNavigation from './HeaderDesktopNavigation';
import HeaderMobileNavigation from './HeaderMobileNavigation.client';

export const GNB_ITEMS = [
  {
    title: '제품',
    to: '/products',
  },
];

export default function HeaderNavigation() {
  return (
    <>
      <div className="hidden lg:block ">
        <HeaderDesktopNavigation />
      </div>
      <div className="lg:hidden">
        <HeaderMobileNavigation />
      </div>
    </>
  );
}
