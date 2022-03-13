import {useState} from 'react';

import CartToggle from '../CartToggle.client';
import Navigation from '../Navigation.client';
import MobileNavigation from '../MobileNavigation.client';
import {Link} from '@shopify/hydrogen';
import Logo from '../ui/Logo.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-14 md:h-16 lg:h-18" role="banner">
      <div className="fixed z-20 h-14 md:h-16 lg:h-18 w-full border-b border-gray-200 px-4 md:px-8 mx-auto bg-white bg-opacity-95">
        <div className="h-full flex">
          <div className="text-center w-full flex justify-between items-center">
            <div className="flex-1 flex justify-start">
              <div className="hidden lg:block">
                <Navigation />
              </div>
              <div className="lg:hidden">
                <MobileNavigation
                  isOpen={isMobileNavOpen}
                  setIsOpen={setIsMobileNavOpen}
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Link to="/">
                <div className="relative">
                  <div className="h-6">
                    <Logo className="w-full h-full" />
                  </div>
                  <div className="absolute w-8 h-4 top-[-3px] left-full ml-[1px] flex items-center justify-center">
                    <span className="font-sans text-xs font-semibold italic text-rose-600">
                      βeta
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex-1 flex justify-end">
              <CartToggle
                handleClick={() => {
                  if (isMobileNavOpen) setIsMobileNavOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
