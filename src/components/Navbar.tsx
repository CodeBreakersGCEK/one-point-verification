import React from "react";
import Link from "next/link";
const Navbar = ({ type }: any) => {
  const navBarClassHome =
    "border-white text-lg font-normal leading-6 rounded-3xl px-9 py-2 hover:scale-105 transition-transform duration-300 ease-linear";
  return (
    <nav className='w-full bg-sky-700 h-16 px-24 py-2'>
      <div className=' h-full flex text-white flex-row justify-between items-center'>
        <h1 className='text-3xl text-center mx-2'>
          <Link href='/'>Logo</Link>
        </h1>
        <div className='flex items-center justify-between gap-6'>
          {type == "home" && (
            <>
              <button
                className={`border bg-transparent text-white ${navBarClassHome}`}>
                <Link href='/auth'>Register</Link>
              </button>
              <button className={`bg-sky-300 text-sky-900 ${navBarClassHome}`}>
                <Link href='/auth'>Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;