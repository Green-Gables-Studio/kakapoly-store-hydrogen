import React from 'react';
import {useHeaderState} from './HeaderStateContext.client';

export default function HeaderCart() {
  const headerState = useHeaderState();
  return null;
  // return (
  //   <CartToggle
  //     // TODO: 이 부분은 나중에 리팩토링
  //     handleClick={() => {
  //       if (mobileNavOpen) {
  //         toggleMobileNav();
  //       }
  //     }}
  //   />
  // );
}
