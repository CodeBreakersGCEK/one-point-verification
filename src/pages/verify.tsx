import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import Image from "next/image";

interface FormValues {
  aadhar: string;
  pan: string;
  account: string;
}

const initialValues = {
  aadhar: "",
  pan: "",
  account: "",
};

const Verify = () => {
  const [formErrors, setFormErrors] = useState<FormValues>(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values: FormValues) => {
    const errors = {
      aadhar: "",
      pan: "",
      account: "",
    };

    if (!values.aadhar) {
      errors.aadhar = "aadhar is required!";
    } else if (values.aadhar.length < 12) {
      errors.aadhar = "Invalid aadhar";
    }
    if (!values.pan) {
      errors.pan = "Pan is required!";
    } else if (values.pan.length < 10) {
      errors.pan = "Invalid Pan";
    }
    if (!values.account) {
      errors.account = "Account is required";
    } else if (values.account.length < 9) {
      errors.account = "Account must be more than 9 characters";
    } else if (values.account.length > 16) {
      errors.account = "Account cannot exceed more than 16 characters";
    }
    return errors;
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const field = "flex gap-3 items-center w-full";

  return (
    <Layout type='verify'>
      <div className='h-full '>
        <form
          onSubmit={onSubmit}
          className='flex items-center h-full justify-center text-sky-900'>
          <div className='md:px-7 px-2 md:py-10 py-4 md:w-[650px] w-full flex flex-col items-center justify-center gap-1 border-[3px] border-sky-800 rounded-lg '>
            <div className={field}>
              <label>
                <Image
                  src='/images/aadhar.png'
                  width={65}
                  height={30}
                  alt='aadhar'
                />
              </label>
              <input
                type='text'
                name='aadhar'
                placeholder='0000-0000-0000'
                value={formValues.aadhar}
                onChange={handleChange}
                className='w-full text-center text-xl outline-none border-[1px] rounded-lg  border-sky-800'
              />
            </div>
            <p className='text-red-600 w-full'>{formErrors.aadhar}</p>
            <div className={field}>
              <label>
                <Image src='/images/pan.png' width={65} height={30} alt='pan' />
              </label>
              <input
                type='text'
                name='pan'
                placeholder='AAAAA12345'
                value={formValues.pan}
                onChange={handleChange}
                className='w-full text-center text-xl outline-none border-[1px] rounded-lg  border-sky-800'
              />
            </div>
            <p className='text-red-600 w-full'>{formErrors.pan}</p>
            <div className={field}>
              <label>
                <Image
                  src='/images/bank.png'
                  width={65}
                  height={30}
                  alt='bank'
                />
              </label>
              <input
                type='text'
                name='account'
                placeholder='123456789'
                value={formValues.account}
                onChange={handleChange}
                className='w-full text-center text-xl outline-none border-[1px] rounded-lg  border-sky-800'
              />
            </div>
            <p className='text-red-600 w-full'>{formErrors.account}</p>

            <button className=' text-center bg-sky-900 text-white text-lg  font-normal leading-6 rounded-3xl   px-14 py-1 md:py-2 mt-5 scale-100 hover:scale-105 transition-transform   duration-300 ease-linear'>
              Verify
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Verify;
