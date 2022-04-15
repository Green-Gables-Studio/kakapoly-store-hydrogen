import {Link} from '@shopify/hydrogen/client';
import React from 'react';
import {useMobileNavigationState} from '../../providers/mobile-navigation-state-provider/MobileNavigationStateProvider';
import Drawer from '../drawer/Drawer.client';
import {DRAWER_ANCHOR} from '../drawer/Drawer.client';
import {GNB_ITEMS} from '../header/components/navigation/Navigation';
import Icon from '../icon/Icon';
import {ICON_TYPE} from '../icon/Icon';
import AngleRightSVG from '../svg/AngleRightSVG';

export default function MobileNavigation() {
  const {open, toggleNavigation} = useMobileNavigationState();
  return (
    <Drawer open={open} onClose={toggleNavigation} anchor={DRAWER_ANCHOR.LEFT}>
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
}

function AngleRightIcon() {
  return <Icon type={ICON_TYPE[24]} svg={<AngleRightSVG />} />;
}
