import React, {createContext, ReactNode, useContext, useState} from 'react';

export const MobileNavigationStateContext = createContext<{
  open: boolean;
  toggleNavigation: () => void;
}>({
  open: false,
  toggleNavigation: () => {},
});

type Props = {
  children?: ReactNode;
};

const MobileNavigationStateProvider = ({children}: Props) => {
  const [open, setOpen] = useState(false);

  const toggleNavigation = () => {
    setOpen((state) => !state);
  };

  return (
    <MobileNavigationStateContext.Provider
      value={{
        open,
        toggleNavigation,
      }}
    >
      {children}
    </MobileNavigationStateContext.Provider>
  );
};

export default MobileNavigationStateProvider;

export function useMobileNavigationState() {
  return useContext(MobileNavigationStateContext);
}
