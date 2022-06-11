import React, {createContext, useContext, useState} from 'react';
import Layout from '../../components/layout/Layout';

export const IndexPageStateContext = createContext(null);

export function IndexPageStateProvider({data, children}) {
  const [state, setState] = useState(data);

  const modifyState = () => {
    setState({
      ...data,
    });
  };

  return (
    <IndexPageStateContext.Provider
      value={{
        state,
        ...modifyState,
      }}
    >
      {children}
    </IndexPageStateContext.Provider>
  );
}

export function useIndexPageState() {
  return useContext(IndexPageStateContext);
}

export default function IndexPage({data}) {
  return (
    <Layout>
      <IndexPageStateProvider data={data}></IndexPageStateProvider>
    </Layout>
  );
}
