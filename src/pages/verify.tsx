import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout } from '../components';
import Image from 'next/image';
import swal from 'sweetalert2';
import AppContext from 'src/AppContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';
interface FormValues {
  uid: string;
  pan: string;
  bankAccount: string;
}

const initialValues = {
  uid: '',
  pan: '',
  bankAccount: '',
};

const Verify = () => {
  const router = useRouter();
  const { user } = useContext(AppContext);
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      router.push('/auth');
    }
  }, []);

  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const onSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const response = await axios.post('/api/verify', formValues);

    if (response.status === 200) {
      setData(response.data);
      setLoading(false);

      setFormValues(initialValues);
      setIsSubmit(true);
    }
  };

  const showNotification = () => {
    swal.fire({
      title: data?.status == 'success' ? 'Success' : 'Error',
      text: data?.message,
      icon: data.status,
      confirmButtonText: 'OKAY',
    });
    setIsSubmit(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'aadhar' && value.length <= 12)
      setFormValues({ ...formValues, [name]: value });
    else if (name === 'pan' && value.length <= 10)
      setFormValues({ ...formValues, [name]: value });
    else if (name === 'account' && value.length <= 18)
      setFormValues({ ...formValues, [name]: value });
  };

  const field = 'flex gap-3 items-center w-full';

  const inputClass =
    'border-2 outline-none rounded-lg px-4 py-2 w-full text-center';

  return (
    <Layout title="OneVerify | Verify" type="verify">
      {data && isSubmit && showNotification()}
      <div className="h-[80vh] bg-slate-100">
        <form
          onSubmit={onSubmit}
          className="flex items-center h-full justify-center text-sky-900"
        >
          <div className="bg-white md:px-7 px-2 md:py-10 py-4 md:w-[650px] w-full flex flex-col items-center justify-center gap-4 border-2 rounded-lg shadow-2xl">
            <div className={field}>
              <label>
                <Image
                  src="/images/aadhar.png"
                  width={65}
                  height={30}
                  alt="aadhar"
                />
              </label>
              <input
                type="number"
                name="aadhar"
                required
                maxLength={12}
                placeholder="1234-6789-5432"
                value={formValues.uid}
                onChange={handleChange}
                className={`${inputClass}`}
              />
            </div>

            <div className={field}>
              <label>
                <Image src="/images/pan.png" width={65} height={30} alt="pan" />
              </label>
              <input
                type="text"
                name="pan"
                required
                placeholder="ASDF12345Z"
                value={formValues.pan}
                onChange={handleChange}
                className={`${inputClass} uppercase`}
              />
            </div>

            <div className={field}>
              <label>
                <Image
                  src="/images/bank.png"
                  width={65}
                  height={30}
                  alt="bank"
                />
              </label>
              <input
                type="number"
                name="account"
                placeholder="123456789"
                required
                value={formValues.bankAccount}
                onChange={handleChange}
                className={`${inputClass}`}
              />
            </div>
            <button className="text-center bg-green-500 text-white text-xl text-md font-normal rounded-lg px-20 py-2 scale-100 hover:scale-105 transition-transform duration-300 ease-linear">
              {loading ? 'Loading...' : 'Verify'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Verify;
