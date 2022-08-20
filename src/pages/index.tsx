import type { NextPage } from 'next';
import { Hero, Layout } from '../components';

const Home: NextPage = () => {
  return (
    <Layout title="Home" type="home">
      <Hero />
    </Layout>
  );
};

export default Home;
