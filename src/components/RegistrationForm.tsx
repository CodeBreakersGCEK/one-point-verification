import { useState } from 'react';
import Lottie from 'lottie-react';

import axios from 'axios';
import { useContext } from 'react';
import AppContext from 'src/AppContext';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

const initialState = {
  name: '',
  uid: '',
  pan: '',
  bankAccount: '',
  collegeCode: '',
  registrationNumber: '',
  email: '',
  image: '',
};

const Form = ({ setIsUser, setData, data }: any) => {
  const [isStudent, setIsStudent] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const inputClass = 'border-2 outline-none w-full my-1 rounded-lg px-4 py-2';

  return (
    <div className="flex gap-12 items-center w-full my-6 justify-center  ">
      <div className="border flex flex-col justify-center    items-center rounded-lg shadow-md   pb-8 bg-white w-[32rem] md:w-96">
        <div className="py-4 px-8 flex items-center justify-between shadow-md w-full">
          <h4 className="text-center text-lg text-sky-500 font-medium">
            Register Your Self
          </h4>
          <a className="text-neutral-400 cursor-pointer">Need Help?</a>
        </div>
        <div className="flex gap-36 justify-between pt-4  mb-2">
          <a
            className={`text-neutral-500 cursor-pointer border-b-2 ${
              isStudent ? 'border-sky-500' : 'border-transparent'
            }`}
            onClick={() => setIsStudent(true)}
          >
            Student
          </a>
          <a
            className={`text-neutral-500 cursor-pointer border-b-2 ${
              !isStudent ? 'border-sky-500' : 'border-transparent'
            }`}
            onClick={() => setIsStudent(false)}
          >
            Faculty
          </a>
        </div>
        <form onSubmit={handleSubmit} className="w-[82%]">
          <div className="flex flex-col gap-2 justify-center my-3  w-full ">
            <label className="text-sm  ">
              {isStudent ? 'Student' : 'Faculty'} Name
            </label>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Enter name"
              value={formData.name}
              required
              className={`${inputClass}`}
            />
          </div>

          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Aadhar Number</label>
            <input
              name="uid"
              value={formData.uid}
              required
              onChange={handleChange}
              placeholder="Enter AADHAAR number"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Pan Card Number</label>
            <input
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
              placeholder="Enter Pan Card Number"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm ">Account Number</label>
            <input
              name="bankAccount"
              value={formData.bankAccount}
              required
              onChange={handleChange}
              placeholder="Enter Account number"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">College Code</label>
            <input
              name="collegeCode"
              value={formData.collegeCode}
              required
              onChange={handleChange}
              placeholder="Enter College code"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Registration Number</label>
            <input
              name="registrationNumber"
              value={formData.registrationNumber}
              required
              onChange={handleChange}
              placeholder="Enter Registration Number"
              className={`${inputClass}`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3 w-full ">
            <label className="text-sm  ">Email ID</label>
            <input
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              placeholder="Enter Email Address"
              className={`${inputClass}`}
            />
          </div>

          <button className="w-full bg-blue-900 font-semibold rounded-md hover:bg-blue-800 text-center uppercase transition-all ease-linear text-white px-2 py-3 duration-75">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
