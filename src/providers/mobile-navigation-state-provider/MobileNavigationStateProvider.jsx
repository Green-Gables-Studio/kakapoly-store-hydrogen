import {createContext, useContext, useState} from 'react';

export const MobileNavigationStateContext = createContext(null);

export default function MobileNavigationStateProvider({children}) {
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
}

export function useMobileNavigationState() {
  return useContext(MobileNavigationStateContext);
}
