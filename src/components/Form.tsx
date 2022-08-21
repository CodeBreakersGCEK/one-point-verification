import { useState } from 'react';
import Lottie from 'lottie-react';
import authAnimation from '../../public/login.json';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from 'src/AppContext';
import { useRouter } from 'next/router';
const initialState = {
  password: '',
  uid: '',
};
const Form = ({ setIsUser, setData, data }: any) => {
  const [userData, setUserData] = useState(initialState);
  const router = useRouter();
  const { setUser } = useContext(AppContext);
  const SubmitForm = async (e: any) => {
    e.preventDefault();
    setUserData(userData);

    const res = await axios.post('/api/student/signin', userData);
    if (res.data.status === 'success') {
      setData(res.data.data);
      setUser(res.data.data);
      router.push('/verify');
    } else {
      window.alert(res.data.message);
    }

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
            AICTE AGENT
          </h4>
          <a className="text-neutral-400 cursor-pointer">Need Help?</a>
        </div>
        <div className="flex flex-col justify-between gap-6 p-10 w-full">
          <input
            className={`${inputClass}`}
            value={userData.uid}
            type="number"
            required
            placeholder="Unique Id"
            onChange={(e) => setUserData({ ...userData, uid: e.target.value })}
          />
          <input
            className={`${inputClass}`}
            value={userData.password}
            type="password"
            required
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button className="text-center bg-sky-500 text-white text-xl text-md font-normal rounded-lg px-20 py-2 scale-100 hover:scale-105 transition-transform duration-300 ease-linear">
            Login
          </button>
        </div>
        <p className="text-neutral-400 font-medium">
          Verify as a{' '}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => setIsUser(true)}
          >
            student/faculty
          </span>
          ?
        </p>
      </form>
    </div>
  );
};

export default Form;
