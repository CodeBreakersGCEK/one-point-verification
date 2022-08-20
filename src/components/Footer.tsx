import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const Footer: NextPage = () => {
  return (
    <div className="md:px-24 px-1 py-8 bg-slate-900 text-white w-full flex flex-col items-center gap-12">
      <div className="flex md:flex-row flex-col justify-between items-center w-full">
        <Link href="/">
          <a className="text-xl">
            One<span className="text-lime-300">Verify</span>
          </a>
        </Link>
        <div className="text-base flex gap-3 font-normal">
          <Link href="/about">About Us</Link>
          <Link href="/about">How it works?</Link>
        </div>
      </div>
      <p>© 2022 | BrainChuck</p>
    </div>
  );
};

export default Footer;
