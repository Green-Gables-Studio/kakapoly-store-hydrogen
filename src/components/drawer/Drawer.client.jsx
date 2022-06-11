import clsx from 'clsx';
import React, {useEffect} from 'react';
import Icon from '../icon/Icon';
import {ICON_TYPE} from '../icon/Icon';
import XMarkLargeSVG from '../svg/XMarkLargeSVG';

export const DRAWER_ANCHOR = {
  LEFT: 'left',
  RIGHT: 'right',
};

export function DrawerHeader({title, onClose}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-lg font-bold">{title}</div>
      <button
        type="button"
        className="z-10 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        tabIndex="0"
        onClick={onClose}
      >
        <span className="sr-only">Close navigation</span>
        <Icon type={ICON_TYPE[28]} svg={<XMarkLargeSVG />} />
      </button>
    </div>
  );
}

export default function Drawer({
  open,
  title = '',
  onClose,
  anchor = DRAWER_ANCHOR.RIGHT,
  children,
}) {
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (open) {
      htmlEl.style.setProperty('overflow', 'hidden');
    } else {
      htmlEl.style.removeProperty('overflow');
    }
  }, [open]);

  return (
    open && (
      <div
        className="fixed z-50 inset-0 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-black/50"
          aria-hidden="true"
          onClick={onClose}
        />
        <div
          className={clsx(
            'w-80 max-w-[calc(100%-3rem)] min-h-screen md:w-[428px] md:max-w-none',
            'relative bg-white px-4 py-4',
            'shadow-xl shadow-black/20',
            anchor === DRAWER_ANCHOR.RIGHT && 'ml-auto',
          )}
        >
          <div className="flex flex-col gap-y-4 h-full">
            <div>
              <DrawerHeader title={title} onClose={onClose} />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  );
}
