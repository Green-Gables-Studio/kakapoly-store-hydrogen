import {Fragment, useEffect, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {FocusTrap} from '@headlessui/react';

import {GNB_ITEMS} from './Navigation.client';
import BarsIcon from './ui/BarsIcon';
import XIcon from './ui/XIcon';

export default function MobileNavigation({isOpen, setIsOpen}) {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;

  const [topScrollOffset, setTopScrollOffset] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setTopScrollOffset(window.scrollY);
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
      window.scrollTo(0, parseInt(topScrollOffset, 10));
    }
  }, [isOpen, topScrollOffset]);

  return (
    <OpenFocusTrap>
      <button
        type="button"
        className="flex justify-center items-center w-7 h-full"
        onClick={() => setIsOpen((previousIsOpen) => !previousIsOpen)}
      >
        {isOpen ? <XIcon /> : <BarsIcon />}
      </button>
      {isOpen ? (
        <div className="fixed -left-0 top-14 md:top-16 w-full h-screen z-10 bg-gray-50 px-4 md:px-12 py-7">
          <ul>
            {GNB_ITEMS.map(({title, to}) => {
              return (
                <li className="border-b border-gray-200" key={to}>
                  <Link
                    className="group py-5 text-gray-700 text-base font-semibold flex items-center justify-between"
                    to={to}
                    onClick={() => setIsOpen(false)}
                  >
                    {title}
                    <ArrowRightIcon />
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

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 17L17 1M1 1L17 17"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({className}) {
  return (
    <svg
      className={className}
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.999762 12C0.743762 12 0.487762 11.902 0.292762 11.707C-0.0982383 11.316 -0.0982383 10.684 0.292762 10.293L4.58576 6.00001L0.292762 1.70701C-0.0982383 1.31601 -0.0982383 0.684006 0.292762 0.293006C0.683762 -0.0979941 1.31576 -0.0979941 1.70676 0.293006L6.70676 5.29301C7.09776 5.68401 7.09776 6.31601 6.70676 6.70701L1.70676 11.707C1.51176 11.902 1.25576 12 0.999762 12Z"
        fill="black"
      />
    </svg>
  );
}
