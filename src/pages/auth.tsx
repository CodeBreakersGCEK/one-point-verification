import { Form, UserForm } from '../components';
import Layout from '@components/Layout';
import React, { useState } from 'react';

const Auth = () => {
  const [isUser, setIsUser] = useState(false);
  return (
    <Layout title="SignIn">
      <div className="flex items-center justify-center h-[80vh]">
        {isUser ? (
          <UserForm setIsUser={setIsUser} />
        ) : (
          <Form setIsUser={setIsUser} />
        )}
      </div>
    </Layout>
  );
};

export default Auth;
