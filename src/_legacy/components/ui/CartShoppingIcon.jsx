import React from 'react';
import Icon from '../icon/Icon';
import CartShoppingSVG from '../svg/CartShoppingSVG';

export default function CartShoppingIcon() {
  return (
    <Icon svg={<CartShoppingSVG className="h-5 hover:opacity-80" />}></Icon>
  );
}
