import Layout from '@components/Layout';
import Lottie from 'lottie-react';
import teamAnimation from '../../public/team_about.json';

const about = () => {
  return (
    <Layout title="OneVerify | About">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-8 gap-2 lg:gap-16">
        <div className="flex-1 text-sky-900 p-4 flex flex-col gap-10">
          <h1 className="text-4xl font-medium">About US</h1>
          <div className="leading-8 tracking-wide flex flex-col gap-8">
            We are a team of students, working together to develop solutions
            that are widely loved by individuals and industries. We believe that
            the best ideas are born from the desire to help others. Our team is
            composed of students who have demonstrated a commitment to building
            solutions that provide real value to their customers.
            <br />
            We are a team of students who were always curious to find a solution
            together which is effective, efficient, and more reliable. Our
            mission is to make your life better by developing innovative
            products that solve real problems for our society.
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium">Our Team - </h1>
              <div>
                Mr. Rakesh Gain (Team Leader)
                <br />
                Mr. Purusottam Pandey (Fullstack Developer )
                <br />
                Mr. Rahul Pradhan (Fullstack Developer )
                <br />
                Mr. Suchak Barik (UI/UX Designer)
                <br />
                Ms. Shyamashree Padhi ( Frontend Developer)
                <br />
                Mr. Subrat Kumar Sahu ( Presentation Designer)
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Lottie animationData={teamAnimation} />
        </div>
      </div>
    </Layout>
  );
};

export default about;
