import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, children, type }: any) => {
  return (
    <div className="h-screen grid myRow ">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar type={type} />
      <div className="px-2  h-full md:px-24 ">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
