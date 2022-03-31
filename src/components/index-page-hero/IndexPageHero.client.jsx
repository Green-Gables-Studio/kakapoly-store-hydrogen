import React from 'react';
import {useIndexPageState} from '../../pages/index-page/IndexPage.client';

export default function IndexPageHero({children}) {
  const state = useIndexPageState();

  return <div>{state.greetings}</div>;
}
