import React from 'react';
import { Header, Footer } from '.';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="w-screen flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
