import {Link} from '@shopify/hydrogen';
import React from 'react';
import {useMobileNavigationState} from '../../../../providers/mobile-navigation-state-provider/MobileNavigationStateProvider';
import Icon, {ICON_TYPE} from '../../../ui/icon/Icon';
import BarsSVG from '../../../ui/svg/BarsSVG';
import HeaderMobileNavigation from '../header-mobile-navigation/HeaderMobileNavigation';

export const GNB_ITEMS = [
  {
    title: '제품',
    to: '#', // TODO: 테스트 기간이 끝나면 홈으로 이동하기
  },
];

const HeaderBarsIcon = () => {
  return <Icon type={ICON_TYPE[28]} svg={<BarsSVG />} />;
};

const LayoutHeaderNavigation = () => {
  const {toggleNavigation} = useMobileNavigationState();
  return (
    <>
      <div className="hidden lg:block ">
        <nav className="text-center">
          <ul className="md:flex items-center justify-center">
            {GNB_ITEMS.map(({title, to}) => {
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className="block py-2 text-base font-semibold hover:opacity-80"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="lg:hidden">
        <button
          type="button"
          className="flex justify-center items-center w-7 h-full"
          onClick={() => {
            toggleNavigation();
          }}
        >
          <HeaderBarsIcon />
        </button>
      </div>
      <HeaderMobileNavigation />
    </>
  );
};

export default LayoutHeaderNavigation;
