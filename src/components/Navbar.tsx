import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { HiMenu, HiX } from 'react-icons/hi';
import { useContext } from 'react';
import AppContext from 'src/AppContext';
import { useRouter } from 'next/router';
interface NavBarProps {
  type?: string;
}

const Navbar: NextPage<NavBarProps> = ({ type }) => {
  const router = useRouter();
  const { user, setUser } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    if (Object.keys(user).length === 0) {
      router.push('/auth');
    } else {
      setUser({});
      router.push('/auth');
    }
  };

  return (
    <nav className="text-2xl text-white font-medium flex m-3 sticky top-3 z-10 shadow-lg">
      <div className="bg-sky-500 flex-1 px-4 py-2 rounded-l-lg flex justify-between items-center">
        <Link href="/">
          <a>
            One<span className="text-lime-300">Verify</span>
          </a>
        </Link>
        <div className="text-base sm:flex gap-3 font-normal hidden">
          <Link href="/about">About Us</Link>
          <Link href="/about">How it works?</Link>
        </div>
      </div>
      <div className="bg-green-400 px-4 py-2 rounded-r-lg flex items-center">
        {type !== 'auth' && (
          <h1 onClick={onClick}>
            <a className="hidden sm:block cursor-pointer">
              {Object.keys(user).length === 0 ? 'Login' : 'Logout'}
            </a>
          </h1>
        )}
        {isOpen ? (
          <HiX
            className="cursor-pointer sm:hidden"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <HiMenu
            className="cursor-pointer sm:hidden"
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && (
          <div className="sm:hidden absolute left-0 top-12 mt-2 mr-2 p-4 bg-white border-2 rounded-lg flex flex-col gap-4 text-black text-xl font-normal w-full">
            <Link href="/about">About Us</Link>
            <Link href="/about">How it works?</Link>
            {type !== 'auth' && (
              <h1 onClick={onClick}>
                <a className="bg-green-400 px-4 py-2 rounded-md text-white flex items-center justify-center">
                  {Object.keys(user).length === 0 ? 'Login' : 'Logout'}
                </a>
              </h1>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
