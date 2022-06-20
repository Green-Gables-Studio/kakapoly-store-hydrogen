import React, {ReactNode, useMemo} from 'react';

export const ICON_TYPE = {
  20: '20',
  24: '24',
  28: '28',
} as const;

type ICON_TYPE = typeof ICON_TYPE[keyof typeof ICON_TYPE];

type Props = {
  type?: ICON_TYPE;
  svg: ReactNode;
};

const Icon = ({type = ICON_TYPE[24], svg}: Props) => {
  const iconClassName = useMemo(() => {
    if (type === ICON_TYPE[20]) {
      return 'icon-20';
    }

    if (type === ICON_TYPE[24]) {
      return 'icon-24';
    }

    if (type === ICON_TYPE[28]) {
      return 'icon-28';
    }
  }, [type]);

  return (
    <div className="inline">
      <div className={iconClassName}>{svg}</div>
    </div>
  );
};

export default Icon;
