import Layout from '@components/Layout';
import Lottie from 'lottie-react';
import workAnimation from '../../public/work.json';

const howItWorks = () => {
  return (
    <Layout title="About">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-8 gap-2 lg:gap-16 h-full">
        <div className="flex-1 text-sky-900 p-4 flex flex-col gap-10">
          <h1 className="text-4xl font-medium">How it works?</h1>
          <div className="leading-8 tracking-wide flex flex-col gap-8">
            1 - Enter details of aadhaar, pan, and bank account no. 2 - It will
            check is the added details are valid or not. 3 - If it shows
            verified, then it need not to verify again, and these verified
            details will be used further. If it shows not verified, then the
            admin must register their profile in a database for verification
            purposes. We have some additional features for which it can be
            verified when AICTE will collect students data for the first time.
            After getting verified data, it can be used easily.
          </div>
        </div>
        <div className="flex-1">
          <Lottie animationData={workAnimation} />
        </div>
      </div>
    </Layout>
  );
};

export default howItWorks;
