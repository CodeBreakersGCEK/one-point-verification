import type { NextPage } from 'next';
import { Content, Hero, Layout } from '../components';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Content />
    </Layout>
  );
};

export default Home;
