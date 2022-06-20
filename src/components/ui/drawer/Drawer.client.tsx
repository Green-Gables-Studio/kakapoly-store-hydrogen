import clsx from 'clsx';
import React, {ReactNode, useEffect} from 'react';
import DrawerHeader from './DrawerHeader';

export const DRAWER_ANCHOR = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

type DRAWER_ANCHOR = typeof DRAWER_ANCHOR[keyof typeof DRAWER_ANCHOR];

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  anchor: DRAWER_ANCHOR;
  children?: ReactNode;
};

const Drawer = ({
  open,
  title = '',
  onClose,
  anchor = DRAWER_ANCHOR.RIGHT,
  children,
}: Props) => {
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (open) {
      htmlEl.style.setProperty('overflow', 'hidden');
    } else {
      htmlEl.style.removeProperty('overflow');
    }
  }, [open]);

  return open ? (
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
  ) : (
    <></>
  );
};

export default Drawer;
