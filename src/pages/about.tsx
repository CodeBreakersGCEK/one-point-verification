import Layout from '@components/Layout';
import Lottie from 'lottie-react';
import teamAnimation from '../../public/team_about.json';

const about = () => {
  return (
    <Layout title="About">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full">
        <div className="flex-1">Hello About page</div>
        <div className="flex-1">
          <Lottie animationData={teamAnimation} />
        </div>
      </div>
    </Layout>
  );
};

export default about;
