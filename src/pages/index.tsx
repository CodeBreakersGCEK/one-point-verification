import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

type Data = { msg: string; team: string };

const Home: NextPage = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-primary'>
      <Head>
        <title>BrainChuck</title>
      </Head>
      <div>
        {data?.msg} @ {data?.team}
      </div>
    </div>
  );
};

export default Home;
