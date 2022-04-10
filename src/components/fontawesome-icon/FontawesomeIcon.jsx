import React, {useMemo} from 'react';

const SIZE = 24;
const SIZE_REM = 1.5;

export default function FontawesomeIcon({icon, size = 16}) {
  const viewBox = useMemo(() => {
    const [width, height] = icon.icon;
    return `0 0 ${width} ${height}`;
  }, [icon]);

  const d = useMemo(() => {
    const [, , , , d] = icon.icon;
    return d;
  }, [icon]);

  const getSize = useMemo(() => {
    return `${SIZE_REM * (size / SIZE)}rem`;
  }, [size]);

  return (
    <svg
      data-testid={icon.iconName}
      style={{width: getSize, height: getSize}}
      viewBox={viewBox}
    >
      <path d={d} />
    </svg>
  );
}
