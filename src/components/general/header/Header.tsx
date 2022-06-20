import HeaderLogo from './header-logo/HeaderLogo';
import Icon from '../../ui/icon/Icon';
import CartShoppingSVG from '../../ui/svg/CartShoppingSVG';
import {ICON_TYPE} from '../../ui/icon/Icon';
import React from 'react';
import HeaderNavigation from './header-navigation/HeaderNavigation';
import MobileNavigationStateProvider from '../../../providers/mobile-navigation-state-provider/MobileNavigationStateProvider';

const CartShoppingIcon = () => {
  return (
    <Icon
      type={ICON_TYPE[28]}
      svg={<CartShoppingSVG className="h-5 hover:opacity-80" />}
    />
  );
};

type Props = {
  onCartButtonClick: () => void;
};

const Header = ({onCartButtonClick}: Props) => {
  return (
    <MobileNavigationStateProvider>
      <header className="h-14 md:h-16 lg:h-18" role="banner">
        <div className="fixed z-20 h-14 md:h-16 lg:h-18 w-full border-b border-gray-200 bg-white bg-opacity-95">
          <div className="flex px-4 md:px-8 h-14 md:h-16 lg:h-18 max-w-screen-xl mx-auto">
            <div className="text-center w-full flex justify-between items-center">
              <div className="flex-1 flex justify-start">
                <HeaderNavigation />
              </div>
              <div className="flex-1 flex justify-center">
                <HeaderLogo />
              </div>
              <div className="flex-1 flex justify-end">
                <button onClick={onCartButtonClick}>
                  <CartShoppingIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </MobileNavigationStateProvider>
  );
};

export default Header;
