import Layout from '@components/Layout';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Verify } from 'src/types/data';

const VerifiedUsers: NextPage = () => {
  const [users, setUsers] = useState<Verify[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json();
    setUsers(data);
  };

  return (
    <Layout title="Verified Users">
      {users.map((user) => (
        <div key={user.uid}>
          <h2>{user.uid}</h2>
          <h2>{user.pan}</h2>
          <h2>{user.bankAccount}</h2>
        </div>
      ))}
    </Layout>
  );
};

export default VerifiedUsers;
