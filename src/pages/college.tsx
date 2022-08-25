import Layout from '@components/Layout';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';
import AppContext from 'src/AppContext';

const College: NextPage = () => {
  const [userData, setUserData] = useState<any>([]);
  const [approved, setApproved] = useState('pending');

  const router = useRouter();
  const { user } = useContext(AppContext);
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      router.push('/auth');
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [approved]);

  const getUsers = async () => {
    const res = await fetch('/api/verifiedStudent');
    const data = await res.json();
    setUserData(data.data);
  };

  const onClickHandler = async (id: string, type: string) => {
    await axios.put(`/api/verifiedStudent/${id}`, {
      isVerified: type,
    });
    setApproved(type);
  };

  return (
    <Layout title="OneVerify | College">
      <div className="flex gap-8">
        {userData.map((data: any) => (
          <div
            key={data.uid}
            className="shadow-lg w-80 border p-8 rounded-lg flex flex-col justify-between gap-8"
          >
            <div>
              <p>Aadhar: {data.uid}</p>
              <p>PAN: {data.pan}</p>
              <p>Bank Account No: {data.bankAccount}</p>
              <p>College Code: {data.collegeCode}</p>
              <p>Registration No: {data.registrationNo}</p>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
            </div>
            {data.isVerified === 'pending' && (
              <div className="flex justify-around text-white">
                <button
                  onClick={() => {
                    onClickHandler(data._id, 'accepted');
                  }}
                  className="text-center bg-green-500 py-2 px-8 rounded-lg text-xl hover:bg-green-700 transition-colors"
                >
                  <ImCheckmark />
                </button>
                <button
                  onClick={() => onClickHandler(data._id, 'rejected')}
                  className="text-center bg-red-500 py-2 px-8 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <ImCross />
                </button>
              </div>
            )}
            {data.isVerified === 'accepted' && <div>Approved</div>}
            {data.isVerified === 'rejected' && <div>Rejected</div>}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default College;
