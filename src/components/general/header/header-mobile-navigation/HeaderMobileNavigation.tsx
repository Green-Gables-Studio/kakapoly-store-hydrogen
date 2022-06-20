import {Link} from '@shopify/hydrogen';
import React from 'react';
import {useMobileNavigationState} from '../../../../providers/mobile-navigation-state-provider/MobileNavigationStateProvider';

import Icon, {ICON_TYPE} from '../../../ui/icon/Icon';
import AngleRightSVG from '../../../ui/svg/AngleRightSVG';
import {GNB_ITEMS} from '../header-navigation/HeaderNavigation';
import Drawer, {DRAWER_ANCHOR} from '../../../ui/drawer/Drawer.client';

const AngleRightIcon = () => {
  return <Icon type={ICON_TYPE[24]} svg={<AngleRightSVG />} />;
};

type Props = {};

const HeaderMobileNavigation = (props: Props) => {
  const {open, toggleNavigation} = useMobileNavigationState();
  return (
    <Drawer
      title=""
      open={open}
      onClose={toggleNavigation}
      anchor={DRAWER_ANCHOR.LEFT}
    >
      <ul>
        {GNB_ITEMS.map(({title, to}) => {
          return (
            <li className="border-b border-gray-200" key={to}>
              <Link
                className="group py-5 text-gray-700 text-base font-semibold flex items-center justify-between"
                to={to}
                onClick={() => {
                  toggleNavigation();
                }}
              >
                {title}
                <AngleRightIcon />
              </Link>
            </li>
          );
        })}
      </ul>
    </Drawer>
  );
};

export default HeaderMobileNavigation;
