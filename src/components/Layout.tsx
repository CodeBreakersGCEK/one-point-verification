import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  title: string;
  type?: string;
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ title, children, type }) => {
  return (
    <div
      className={`font-popins h-screen grid myRow ${
        type === 'verify' ? 'bg-slate-100' : 'bg-white'
      }`}
    >
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar type={type} />
      <div className="px-2 md:h-full h-auto md:px-24">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
