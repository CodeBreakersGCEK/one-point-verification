import { Form, UserForm } from '../components';
import Layout from '@components/Layout';
import React, { useState } from 'react';

const Auth = () => {
  const [isUser, setIsUser] = useState(false);
  const [data, setData] = useState({});

  return (
    <Layout title="SignIn">
      <div className="flex items-center justify-center h-[80vh]">
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
