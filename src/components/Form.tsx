import Image from "next/image";
import React, { useState } from "react";

const initialState = {
  password: "",
  id: "",
};
const Form = () => {
  const [userData, setUserData] = useState(initialState);

  const SubmitForm = (e: any) => {
    e.preventDefault();
    setUserData(userData);
    console.log(userData);

    setUserData(initialState);
  };

  const inputClass =
    "border-2 border-sky-900 outline-none rounded-sm px-2 py-[3px]";

  return (
    <div className="w-auto h-auto flex-col md:flex-row flex  rounded-lg p-2 my-4  border-2 border-sky-900">
      <div className="flex-1 bg-sky-200 md:w-96 md:h-96 h-auto w-full flex items-center justify-center">
        <Image src="/images/login.png" alt="login" width={196} height={195} />
      </div>

      <form
        className="flex flex-col flex-1 px-11 py-9 gap-4"
        onSubmit={SubmitForm}
      >
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-center text-lg font-popins text-sky-900 font-bold">
            Login
          </h4>
        </div>

        <input
          className={`${inputClass}`}
          value={userData.id}
          type="text"
          placeholder="Unique Id"
          onChange={(e) => setUserData({ ...userData, id: e.target.value })}
        />

        <input
          className={`${inputClass}`}
          value={userData.password}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button className=" text-center bg-sky-900 text-white text-lg font-normal leading-6 rounded-3xl px-8 py-2 mt-5 scale-100 hover:scale-105 transition-transform border border-white duration-300 ease-linear">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
