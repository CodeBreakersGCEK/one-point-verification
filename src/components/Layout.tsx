import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, children, type }: any) => {
  return (
    <div className="h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar type={type} />
      </nav>
      <main className="px-[6rem] ">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
