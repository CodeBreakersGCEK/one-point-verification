import { Form } from '../components';
import Layout from '@components/Layout';
import React from 'react';

const Auth = () => {
  return (
    <Layout title="SignIn">
      <div className="flex items-center justify-center h-screen">
        <Form />
      </div>
    </Layout>
  );
};

export default Auth;
