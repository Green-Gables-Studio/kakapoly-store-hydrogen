import React, {createContext, useContext} from 'react';

export const ProductPageDataContext = createContext(null);

const DataContext = ProductPageDataContext;

// TODO: 이거 필요없을지도.. 삭제 고민하기
export default function ProductPageDataProvider({data, children}) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useProductPageData() {
  return useContext(DataContext);
}
