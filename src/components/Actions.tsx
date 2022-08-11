import Image from "next/image";
import React from "react";

const actions = [
  {
    id: "1",
    title: "Register Yourself",
    body: "Register yourself in the portal.",
    src: "/images/person.png",
  },
  {
    id: "2",
    title: "Verify Documents",
    body: "Upload verification  documents for verification.",
    src: "/images/documents.png",
  },
  {
    id: "3",
    title: "Use Unique Id",
    body: "Use your unique id for regisrtation.",
    src: "/images/vector.png",
  },
];

const Actions = () => {
  return (
    <div className='py-5'>
      <div className='flex items-center  justify-start flex-col'>
        <div className=''>
          <h1 className='text-4xl '>3 Easy Steps </h1>
          <div className='h-1 w-24 mt-2 bg-sky-700'></div>
        </div>
      </div>
      <div className='mt-16 flex gap-1 items-center justify-around'>
        {actions.map((action) => (
          <div
            className='w-80 h-full p-6 px-4 bg-sky-200 flex flex-col items-center scale-100 hover:scale-110 transition-transform ease-out delay-400 cursor-pointer'
            key={action.id}>
            <img src={action.src} alt={action.title} className='my-9' />
            <h3 className='text-2xl font-popins font-medium my-4 '>
              {action.title}
            </h3>
            <p className='text-lg text-center px-4'>{action.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actions;
