import React, {Fragment, useEffect, useState} from 'react';
import {GNB_ITEMS} from '../navigation/Navigation';
import {FocusTrap} from '@headlessui/react';
import {Link} from '@shopify/hydrogen/client';
import Icon from '../../../../components/icon/Icon';
import {ICON_TYPE} from '../../../../components/icon/Icon';
import BarsSVG from '../../../../components/svg/BarsSVG';
import XMarkLargeSVG from '../../../../components/svg/XMarkLargeSVG';
import {useHeaderState} from '../header-state-provider/HeaderStateProvider';
import AngleRightSVG from '../../../../components/svg/AngleRightSVG';

export default function MobileNavigation() {
  const {mobileNavOpen, toggleMobileNav} = useHeaderState();

  const OpenFocusTrap = mobileNavOpen ? FocusTrap : Fragment;

  const [topScrollOffset, setTopScrollOffset] = useState(0);

  useEffect(() => {
    if (mobileNavOpen) {
      setTopScrollOffset(window.scrollY);
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
      window.scrollTo(0, parseInt(topScrollOffset, 10));
    }
  }, [mobileNavOpen, topScrollOffset]);

  return (
    <OpenFocusTrap>
      <button
        type="button"
        className="flex justify-center items-center w-7 h-full"
        onClick={() => {
          toggleMobileNav();
        }}
      >
        {mobileNavOpen ? <HeaderXIcon /> : <HeaderBarsIcon />}
      </button>
      {mobileNavOpen ? (
        <div className="fixed -left-0 top-14 md:top-16 w-full h-screen z-10 bg-gray-50 px-4 md:px-12 py-7">
          <ul>
            {GNB_ITEMS.map(({title, to}) => {
              return (
                <li className="border-b border-gray-200" key={to}>
                  <Link
                    className="group py-5 text-gray-700 text-base font-semibold flex items-center justify-between"
                    to={to}
                    onClick={() => {
                      toggleMobileNav();
                    }}
                  >
                    {title}
                    <AngleRightIcon />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </OpenFocusTrap>
  );
}

function AngleRightIcon() {
  return <Icon type={ICON_TYPE[24]} svg={<AngleRightSVG />} />;
}

function HeaderBarsIcon() {
  return <Icon type={ICON_TYPE[28]} svg={<BarsSVG />} />;
}

function HeaderXIcon() {
  return <Icon type={ICON_TYPE[28]} svg={<XMarkLargeSVG />} />;
}
