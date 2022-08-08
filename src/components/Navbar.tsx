import React from "react";
import Link from "next/link";
const Navbar = ({ type }: any) => {
  return (
    <nav className='w-full bg-sky-700 h-[70px] px-[6rem] py-2  '>
      <div className=' h-full flex text-white  flex-row justify-between items-center'>
        <h1 className='text-[2rem] text-center mx-2'>
          <Link href='/'>Logo</Link>{" "}
        </h1>
        <div className='flex items-center justify-between'>
          {type == "home" && (
            <>
              <button className='mx-2  bg-transparent text-white text-[19px] font-normal  leading-6 rounded-3xl px-[35px] py-[6px] scale-100 hover:scale-105 transition-transform  border-[1px] border-white   duration-300 ease-linear '>
                Verify
              </button>
              <button className='mx-2 border-white bg-[#83D3FF] text-[#0C4A6E] text-[19px] font-normal leading-6 rounded-3xl px-[35px] py-[6px] hover:scale-105 transition-transform   duration-300 ease-linear '>
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
