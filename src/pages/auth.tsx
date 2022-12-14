import { Form, UserForm } from '../components';
import Layout from '@components/Layout';
import React, { useState } from 'react';
const Auth = () => {
  const [isUser, setIsUser] = useState(false);
  const [data, setData] = useState({});

  return (
    <Layout title="OneVerify | Authentication" type="auth">
      <div className="flex items-center justify-center min-h-[80vh]">
        {isUser ? (
          <UserForm setIsUser={setIsUser} setData={setData} data={data} /> // AICTE users
        ) : (
          <Form setIsUser={setIsUser} setData={setData} data={data} /> // AICTE agent
        )}
      </div>
    </Layout>
  );
};

export default Auth;
