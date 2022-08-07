 
import type { NextPage } from "next";
 import { Actions, Hero, Layout } from '../components'
 

const Home: NextPage = () => {
  
 

  return (
    <Layout title='Home' >
     <Hero/>
     <Actions/>
    </Layout>
  );
};

export default Home;
