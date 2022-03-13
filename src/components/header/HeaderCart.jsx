import React from 'react';
import CartToggle from '../CartToggle.client';
import {useHeaderState} from './HeaderStateContext.client';

export default function HeaderCart() {
  const {mobileNavOpen, toggleMobileNav} = useHeaderState();
  return (
    <CartToggle
      // TODO: 이 부분은 나중에 리팩토링
      handleClick={() => {
        if (mobileNavOpen) {
          toggleMobileNav();
        }
      }}
    />
  );
}
