import React, {ReactNode} from 'react';
import LayoutFooter from './layout-footer/LayoutFooter';

export const LAYOUT_TEMPLATE = {
  DEFAULT: 'default',
  POPUP: 'popup',
} as const;

export type LAYOUT_TEMPLATE =
  typeof LAYOUT_TEMPLATE[keyof typeof LAYOUT_TEMPLATE];

type Props = {
  template?: LAYOUT_TEMPLATE;
  header?: ReactNode;
  cart?: ReactNode;
  children?: ReactNode;
};

export default function Layout({
  template = LAYOUT_TEMPLATE.DEFAULT,
  header,
  cart,
  children,
}: Props) {
  return (
    <div className="min-h-screen max-w-screen text-gray-900 font-sans">
      {template === LAYOUT_TEMPLATE.DEFAULT && (
        <>
          {header}
          {cart}
          <main role="main" id="mainContent" className="relative bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-10">
              {children}
            </div>
          </main>
          <LayoutFooter />
        </>
      )}
      {template === LAYOUT_TEMPLATE.POPUP && (
        <main role="main" id="mainContent" className="relative bg-gray-50">
          <div className="mx-auto max-w-screen-xl min-h-screen px-4 md:px-8 py-10">
            {children}
          </div>
        </main>
      )}
    </div>
  );
}
