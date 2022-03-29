import {Link} from '@shopify/hydrogen/client';
import React from 'react';
import LogoSVG from '../svg/LogoSVG';

export default function HeaderLogo() {
  return (
    <Link to="/products">
      <div className="relative">
        <div className="h-6">
          <LogoSVG className="w-full h-full" />
        </div>
        <div className="absolute w-8 h-4 top-[-3px] left-full ml-[1px] flex items-center justify-center">
          <span className="font-sans text-xs font-semibold italic text-rose-600">
            βeta
          </span>
        </div>
      </div>
    </Link>
  );
}
