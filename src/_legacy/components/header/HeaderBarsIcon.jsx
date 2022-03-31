import React from 'react';
import Icon from '../icon/Icon';
import {ICON_TYPE} from '../icon/Icon';
import BarsSVG from '../svg/BarsSVG';

export default function HeaderBarsIcon() {
  return <Icon type={ICON_TYPE[28]} svg={<BarsSVG />} />;
}
