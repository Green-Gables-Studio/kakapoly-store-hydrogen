import React, {createContext, ReactNode, useContext, useState} from 'react';

export const CartStateContext = createContext<{
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}>({
  open: false,
  openCart: () => {},
  closeCart: () => {},
  toggleCart: () => {},
});

type Props = {
  children?: ReactNode;
};

export default function CartStateProvider({children}: Props) {
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
