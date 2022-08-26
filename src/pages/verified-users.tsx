import Layout from '@components/Layout';
import AicteTable from '@components/AicteTable';

import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Verify } from 'src/types/data';

const VerifiedUsers: NextPage = () => {
  const [users, setUsers] = useState<Verify[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    const res = await axios.get('http://localhost:3000/api/aicte');
    console.log(res);
    setUsers(res.data.data);
    setLoading(false);
  };

  return (
    <Layout title="Verified Users">
      <div className="w-full flex items-center justify-center my-8">
        {loading ? 'Loading...' : <AicteTable users={users} />}
      </div>
    </Layout>
  );
};

export default VerifiedUsers;
