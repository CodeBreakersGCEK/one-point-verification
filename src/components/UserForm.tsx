import { useState } from 'react';
import Lottie from 'lottie-react';
import authAnimation from '../../public/login.json';

const initialState = {
  password: '',
  id: '',
  name: '',
  email: '',
};
const Form = ({ setIsUser }: any) => {
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState(initialState);

  const SubmitForm = (e: any) => {
    e.preventDefault();
    setUserData(userData);
    console.log(userData);

    setUserData(initialState);
  };

  const inputClass = 'border-2 outline-none rounded-lg px-4 py-2';

  return (
    <div className="flex gap-12 items-center">
      <div className="flex-1 md:block hidden">
        <Lottie animationData={authAnimation} />
      </div>
      <form
        className="border flex flex-col justify-center items-center rounded-lg shadow-md flex-1 pb-8 bg-white w-96"
        onSubmit={SubmitForm}
      >
        <div className="py-4 px-8 flex items-center justify-between shadow-md w-full">
          <h4 className="text-center text-lg text-sky-500 font-medium">
            AICTE USER
          </h4>
          <a className="text-neutral-400 cursor-pointer">Need Help?</a>
        </div>
        <div className="flex gap-20 justify-between pt-4">
          <a
            className={`text-neutral-500 cursor-pointer border-b-2 ${
              isRegister ? 'border-sky-500' : 'border-transparent'
            }`}
            onClick={() => setIsRegister(true)}
          >
            Register
          </a>
          <a
            className={`text-neutral-500 cursor-pointer border-b-2 ${
              !isRegister ? 'border-sky-500' : 'border-transparent'
            }`}
            onClick={() => setIsRegister(false)}
          >
            Login
          </a>
        </div>
        <div className="flex flex-col justify-between gap-6 p-10 w-full">
          <input
            className={`${inputClass}`}
            value={userData.id}
            type="number"
            placeholder="Unique Id / AADHAR No."
            onChange={(e) => setUserData({ ...userData, id: e.target.value })}
          />
          {isRegister && (
            <>
              <select className={`${inputClass}`}>
                <option disabled selected value="">
                  Select User Type
                </option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
              </select>
              <input
                className={`${inputClass}`}
                value={userData.name}
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <input
                className={`${inputClass}`}
                value={userData.email}
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </>
          )}
          <input
            className={`${inputClass}`}
            value={userData.password}
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button className="text-center bg-sky-500 text-white text-xl text-md font-normal rounded-lg px-20 py-2 scale-100 hover:scale-105 transition-transform duration-300 ease-linear">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </div>
        <p className="text-neutral-400 font-medium">
          Are you a{' '}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => setIsUser(false)}
          >
            AICTE agent
          </span>
          ?
        </p>
      </form>
    </div>
  );
};

export default Form;
