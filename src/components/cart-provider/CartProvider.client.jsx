import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';

export const CartStateContext = createContext(null);

/**
 * A client component that creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks
 */
export default function CartProvider({children, numCartLines}) {
  const [open, setOpen] = useState(false);

  const openCart = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeCart = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleCart = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  const contextValue = useMemo(() => {
    return {
      isCartOpen: open,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [open, openCart, closeCart, toggleCart]);

  const handleLineAdd = () => {
    openCart();
  };

  const handleCreate = () => {
    openCart();
  };

  // TODO: CartState와 ShopifyCart가 같이 껴있을 이유가 전혀 없다. 분리하자.
  return (
    <CartStateContext.Provider value={contextValue}>
      <ShopifyCartProvider
        numCartLines={numCartLines}
        onLineAdd={handleLineAdd}
        onCreate={handleCreate}
      >
        {children}
      </ShopifyCartProvider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  return useContext(CartStateContext);
}
