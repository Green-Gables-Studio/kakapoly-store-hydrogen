import React, {createContext, useContext} from 'react';

export const ProductPageDataContext = createContext(null);

const DataContext = ProductPageDataContext;

export function ProductPageDataProvider({data, children}) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useProductPageData() {
  return useContext(DataContext);
}
