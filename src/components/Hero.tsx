import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className='p-2 mt-[20px]'>
      <div className='flex   justify-center'>
        <div className='mt-8 px-2 flex-1 '>
          <h1 className='text-[45px] my-2 text-sky-900'>
            One Point Verification
          </h1>
          <p className='text-[24px]  font-popins text-gray-600 mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            inventore id amet quos possimus tempora eaque vel cupiditate,
            asperiores accusantium hic veniam cum ab temporibus quis officia in
            ullam itaque?
          </p>
          <button className=' text-center bg-sky-900 text-white text-[19px] font-normal  leading-6 rounded-3xl px-[35px] py-[8px] mt-5 scale-100 hover:scale-105 transition-transform  border-[1px] border-white   duration-300 ease-linear '>
            Register
          </button>
        </div>
        <div className='flex-1'>
          <Image
            src='/images/herobanner.png'
            alt='hero banner '
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
