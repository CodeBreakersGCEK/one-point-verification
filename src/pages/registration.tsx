import Layout from '@components/Layout';
import RegistrationForm from '@components/RegistrationForm';
import React, { useEffect } from 'react';
import AppContext from 'src/AppContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';
const Registration = () => {
  const router = useRouter();
  const { user } = useContext(AppContext);
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      router.push('/auth');
    }
  }, []);
  return (
    <Layout title="One Verify | Registration">
      <RegistrationForm />
    </Layout>
  );
};

export default Registration;
