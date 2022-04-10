import {Link} from '@shopify/hydrogen/client';
import React from 'react';
import {GNB_ITEMS} from '../navigation/Navigation';

export default function DesktopNavigation() {
  return (
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
  );
}
