import React from 'react';

export default function HeaderLayout({navigation, logo, cart}) {
  return (
    <header className="h-14 md:h-16 lg:h-18" role="banner">
      <div className="fixed z-20 h-14 md:h-16 lg:h-18 w-full border-b border-gray-200 bg-white bg-opacity-95">
        <div className="h-full flex px-4 md:px-8 max-w-screen-xl mx-auto">
          <div className="text-center w-full flex justify-between items-center">
            <div className="flex-1 flex justify-start">{navigation}</div>
            <div className="flex-1 flex justify-center">{logo}</div>
            <div className="flex-1 flex justify-end">{cart}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
