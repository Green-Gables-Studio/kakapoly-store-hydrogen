import React, {createContext, useContext, useState} from 'react';

export const CartStateContext = createContext(null);

export default function CartStateProvider({children}) {
  const [open, setOpen] = useState(false);

  const openCart = () => {
    setOpen(true);
  };

  const closeCart = () => {
    setOpen(false);
  };

  const toggleCart = () => {
    setOpen((state) => !state);
  };

  return (
    <CartStateContext.Provider
      value={{
        open,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  return useContext(CartStateContext);
}
