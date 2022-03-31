import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import LayoutLayout from './LayoutLayout';

export default function Layout({children}) {
  return (
    <LayoutLayout header={<Header />} footer={<Footer />}>
      {children}
    </LayoutLayout>
  );
}
