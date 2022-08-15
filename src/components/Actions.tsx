import Image from "next/image";
import React from "react";

const actions = [
  {
    id: "1",
    title: "Aadhar Verification",
    body: "AADHAR verification once in life",
    src: "/images/person.png",
  },
  {
    id: "2",
    title: "Pan Verification",
    body: "Check your Pan is verified or not",
    src: "/images/documents.png",
  },
  {
    id: "3",
    title: "Bank Verification",
    body: "Check your Bank is linked or not",
    src: "/images/vector.png",
  },
];

const Actions = () => {
  return (
    <div className="pb-7 my-5 ">
      <div className="flex items-center  justify-start flex-col">
        <div>
          <h1 className="md:text-4xl text-3xl ">3 Easy Steps </h1>
          <div className="h-1 w-24 mt-2 bg-sky-700"></div>
        </div>
      </div>
      <div className="mt-16 flex gap-2  flex-col md:flex-row items-center justify-around">
        {actions.map((action) => (
          <div
            className=" md:gap-4 w-[95%] h-full p-6 px-4 bg-sky-200 flex flex-col items-center scale-100 hover:scale-110 transition-transform ease-out delay-400 cursor-pointer"
            key={action.id}
          >
            <img src={action.src} alt={action.title} className="my-9" />
            <h3 className="text-2xl font-popins font-medium my-4 ">
              {action.title}
            </h3>
            <p className="text-lg text-center px-4">{action.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actions;
