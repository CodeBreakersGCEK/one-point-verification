import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <div className=" md:mt-5  ">
      <div className="flex justify-center flex-col-reverse md:flex-row ">
        <div className="px-2 flex-1 h-full mt-1 md:mt-14">
          <h1 className="md:text-5xl text-3xl my-2 text-sky-900">
            One Point Verification
          </h1>
          <p className=" md:text-xl text-md font-popins text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            inventore id amet quos possimus tempora eaque vel cupiditate,
            asperiores accusantium hic veniam cum ab temporibus quis officia in
            ullam itaque?
          </p>
          <button
            onClick={() => router.push("/verify")}
            className="text-center bg-sky-900 text-white md:text-lg text-md font-normal leading-6 rounded-3xl px-9 py-2 mt-5 scale-100 hover:scale-105 transition-transform border border-white duration-300 ease-linear"
          >
            Verify
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/herobanner.png"
            alt="hero banner "
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
