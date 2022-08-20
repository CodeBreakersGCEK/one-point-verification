import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Lottie from 'lottie-react';
import searchAnimation from '../../public/search_home.json';
import scrollAnimation from '../../public/scroll.json';

const Hero = () => {
  const router = useRouter();
  return (
    <div className="mb-10">
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
        <div className="px-2 flex-[0.8] h-full md:mt-14 flex flex-col gap-12 items-start">
          <h1 className="sm:text-7xl text-5xl text-sky-900">
            <span className="font-extralight">One Point</span> Verification
          </h1>
          <p className="sm:text-3xl text-2xl text-neutral-500 font-light">
            The simplest and fastest way to get your UID, PAN, Bank verified
            with AICTE.
          </p>
          <button
            onClick={() => router.push('/auth')}
            className="text-center bg-green-400 text-white sm:text-xl text-md font-normal rounded-lg px-20 py-2 scale-100 hover:scale-105 transition-transform duration-300 ease-linear"
          >
            Verify
          </button>
        </div>
        <div className="absolute right-0 lg:left-0 translate-x-0 lg:translate-x-[-20px] bottom-24">
          <Image height={300} width={300} src="/hero-bg.svg" alt="hero-bg" />
        </div>
        <div className="flex-[1.2]">
          <Lottie animationData={searchAnimation} />
        </div>
      </div>
      <div className="lg:mt-60 md:mt-40 mt-20">
        <Lottie
          animationData={scrollAnimation}
          style={{
            height: 60,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
