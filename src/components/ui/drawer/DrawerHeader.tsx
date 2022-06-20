import React from 'react';
import Icon, {ICON_TYPE} from '../icon/Icon';
import XMarkLargeSVG from '../svg/XMarkLargeSVG';

type Props = {
  title: string;
  onClose: () => void;
};

const DrawerHeader = ({title, onClose}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-lg font-bold">{title}</div>
      <button
        type="button"
        className="z-10 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        tabIndex={0}
        onClick={onClose}
      >
        <span className="sr-only">Close navigation</span>
        <Icon type={ICON_TYPE[28]} svg={<XMarkLargeSVG />} />
      </button>
    </div>
  );
};

export default DrawerHeader;
