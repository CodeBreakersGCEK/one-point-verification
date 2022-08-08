import Image from "next/image";
import React, { useState } from "react";

const initialState = {
  email: "",
  adharno: "",
  panno: "",
  password: "",
  type: "",
  id: "",
};
const Form = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const [userData, setUserData] = useState(initialState);

  const SubmitForm = (e: any) => {
    e.preventDefault();
    setUserData(userData);

    setUserData(initialState);
  };

  return (
    <div className="w-auto h-auto  rounded-lg p-2 flex border-[3px] border-[#0C4A6E] ">
      <div className="flex-1 bg-[#C5EAFF] w-96 h-[380px] flex items-center justify-center  ">
        <Image src="/images/login.png" alt="login" width={196} height={195} />
      </div>

      <form
        className="flex flex-col flex-1 px-11 py-9 gap-4"
        onSubmit={SubmitForm}
      >
        <div className="flex items-center justify-between mb-2">
          <h4
            className={`text-center flex-1 cursor-pointer ${
              !isSignIn && "border-b-4"
            } pb-[1px] border-[#0C4A6E]`}
            onClick={() => {
              setIsSignIn(false);
              setUserData(initialState);
            }}
          >
            Register
          </h4>
          <h4
            className={`text-center flex-1 cursor-pointer ${
              isSignIn && "border-b-4"
            } pb-[1px] border-[#0C4A6E]`}
            onClick={() => {
              setIsSignIn(true);
              setUserData(initialState);
            }}
          >
            Login
          </h4>
        </div>
        {isSignIn && (
          <>
            <select
              className="border-2 outline-none border-[#0C4A6E] rounded-sm px-2  py-[3px]  "
              value={userData.type}
              onChange={(e) =>
                setUserData({ ...userData, type: e.target.value })
              }
            >
              <option>AICTE</option>
              <option>Staff authority</option>
              <option>Institute</option>
              <option>Staff</option>
              <option>Student</option>
            </select>
            <input
              className="border-2 border-[#0C4A6E] outline-none rounded-sm px-2 py-[3px]"
              value={userData.id}
              type="text"
              placeholder="Unique Id"
              onChange={(e) => setUserData({ ...userData, id: e.target.value })}
            />
          </>
        )}
        {!isSignIn && (
          <>
            <input
              className="border-2 border-[#0C4A6E] outline-none rounded-sm  px-2 py-[3px] "
              type="email"
              value={userData.email}
              placeholder="Email id"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <input
              className="border-2 border-[#0C4A6E] outline-none rounded-sm  px-2 py-[3px] "
              value={userData.adharno}
              type="number"
              placeholder="AADHAR Number"
              onChange={(e) =>
                setUserData({ ...userData, adharno: e.target.value })
              }
            />
            <input
              className="border-2 border-[#0C4A6E] outline-none rounded-sm  px-2 py-[3px] "
              value={userData.panno}
              type="text"
              placeholder="PAN Number"
              onChange={(e) =>
                setUserData({ ...userData, panno: e.target.value })
              }
            />
          </>
        )}

        <input
          className="border-2 border-[#0C4A6E] outline-none rounded-sm  px-2 py-[3px] "
          value={userData.password}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button className=" text-center bg-sky-900 text-white text-[19px] font-normal  leading-6 rounded-3xl px-[30px] py-[5px] mt-5 scale-100 hover:scale-105 transition-transform  border-[1px] border-white   duration-300 ease-linear ">
          {isSignIn ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Form;
