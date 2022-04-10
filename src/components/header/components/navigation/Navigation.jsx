import React from 'react';
import DesktopNavigation from '../desktop-navigation/DesktopNavigation';
import MobileNavigation from '../mobile-navigation/MobileNavigation';

export const GNB_ITEMS = [
  {
    title: '제품',
    to: '/products',
  },
];

export default function Navigation() {
  return (
    <>
      <div className="hidden lg:block ">
        <DesktopNavigation />
      </div>
      <div className="lg:hidden">
        <MobileNavigation />
      </div>
    </>
  );
}
