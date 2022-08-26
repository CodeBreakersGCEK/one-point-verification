import { useState } from 'react';
import Lottie from 'lottie-react';
import authAnimation from '../../public/login.json';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from 'src/AppContext';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

const initialState = {
  password: '',
  uid: '',
  name: '',
  email: '',
  type: '',
  otp: '',
};

const Form = ({ setIsUser, setData, data }: any) => {
  const [number, setNumber] = useState('');
  const router = useRouter();
  const { setUser } = useContext(AppContext);
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [otp, setOtp] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const SubmitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (isRegister) {
      const res = await axios.post('/api/student/signup', userData);
      if (res.data.status === 'success') {
        setData(res.data.data);
        setUser(res.data.data);
        setLoading(false);
        router.push('/registration');
      } else {
        setLoading(false);
        enqueueSnackbar(res.data.message, {
          variant: 'error',
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    } else {
      const res = await axios.post('/api/student/signin', userData);
      if (res.data.status === 'success') {
        setData(res.data.data);
        setUser(res.data.data);
        setLoading(false);
        router.push('/registration');
      } else {
        setLoading(false);
        enqueueSnackbar(res.data.message, {
          variant: 'error',
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    }
    setUserData(initialState);
  };

  const inputClass = 'border-2 outline-none rounded-lg px-4 py-2';

  const sendOtp = async () => {
    getNumber();
    const res = await axios.post('/api/message', {
      number,
    });
    setOtp(res.data.otp);
  };
  const verifyOtp = async () => {
    if (userData.otp === otp) {
      setDisable(false);
    }
  };
  const getNumber = async () => {
    const res = await axios.get(`/api/aadhar/${userData.uid}`);
    setNumber(`+91${res.data.phone}`);
  };

  return (
    <div className="flex gap-12 items-center">
      <div className="flex-1 md:block hidden">
        <Lottie animationData={authAnimation} />
      </div>
      <form
        className="border flex flex-col justify-center items-center rounded-lg shadow-md flex-1 pb-8 bg-white w-[22rem] md:w-96"
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
          <div className="flex ">
            <input
              className={`${inputClass}`}
              value={userData.uid}
              type="text"
              required
              placeholder="AADHAR."
              onChange={(e) =>
                setUserData({ ...userData, uid: e.target.value })
              }
            />
            {isRegister && (
              <button
                type="button"
                onClick={sendOtp}
                className="text-center bg-sky-500 text-white text-md  font-normal rounded-lg px-2 py-2 scale-100 hover:scale-105 transition-transform duration-300 ease-linear"
              >
                send otp
              </button>
            )}
          </div>
          <div className="flex">
            <input
              className={`${inputClass}`}
              value={userData.otp}
              type="text"
              required
              placeholder="OTP"
              onChange={(e) =>
                setUserData({ ...userData, otp: e.target.value })
              }
            />
            {isRegister && (
              <button
                type="button"
                onClick={verifyOtp}
                className="text-center bg-green-500 text-white text-md  font-normal rounded-lg px-2 py-2 scale-100 hover:scale-105 transition-transform duration-300 ease-linear ml-2"
              >
                Verify
              </button>
            )}
          </div>

          {isRegister && (
            <>
              <select
                className={`${inputClass}`}
                value={userData.type}
                required
                defaultValue={''}
                onChange={(e) =>
                  setUserData({ ...userData, type: e.target.value })
                }
              >
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
                required
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <input
                className={`${inputClass}`}
                value={userData.email}
                type="text"
                placeholder="Email"
                required
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
          <button
            className={`disabled:bg-neutral-400 disabled:cursor-no-drop text-center bg-sky-500 text-white text-xl text-md font-normal rounded-lg px-20 py-2 scale-100 hover:scale-105 transition-transform duration-300 ease-linear`}
            disabled={isRegister && disable}
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </div>
        <p className="text-neutral-400 font-medium">
          Are you a{' '}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => setIsUser(false)}
          >
            AICTE/College agent
          </span>
          ?
        </p>
      </form>
    </div>
  );
};

export default Form;
