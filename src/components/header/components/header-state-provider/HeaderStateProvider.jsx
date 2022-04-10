import {createContext, useContext, useState} from 'react';

export const HeaderStateContext = createContext(null);

export default function HeaderStateProvider({children}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((state) => !state);
  };

  return (
    <HeaderStateContext.Provider
      value={{
        mobileNavOpen,
        toggleMobileNav,
      }}
    >
      {children}
    </HeaderStateContext.Provider>
  );
}

export function useHeaderState() {
  return useContext(HeaderStateContext);
}
