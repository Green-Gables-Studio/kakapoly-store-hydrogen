import React from 'react';

export default function Icon({children}) {
  return (
    <div className="inline">
      <div className="flex justify-center items-center w-7 h-7">{children}</div>
    </div>
  );
}

// 24 - 16
// 28 - 20
// 32 - 24
// 48 - 32
