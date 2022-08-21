import { NextPage } from 'next';
import Lottie from 'lottie-react';
import cardAnimation from '../../public/card_home.json';
import personAnimation from '../../public/person_home.json';
import verifiedAnimation from '../../public/verified_home.json';
import Image from 'next/image';

const Content: NextPage = () => {
  const data = [
    {
      id: '1',
      lottie: cardAnimation,
      title: 'Verify all your details through a single portal with AICTE.',
      reverse: false,
      backGround: '/round-bg.svg',
    },
    {
      id: '2',
      lottie: personAnimation,
      title: 'Users can also self verify themselves through our portal.',
      reverse: true,
      backGround: '/hexa-bg.svg',
    },
    {
      id: '3',
      lottie: verifiedAnimation,
      title:
        'After verification API can be used anywhere verification is required.',
      reverse: false,
      backGround: '/triangle-bg.svg',
    },
  ];

  return (
    <div className="mt-20 flex flex-col gap-30">
      {data.map(({ id, lottie, title, reverse, backGround }) => (
        <div
          className={`flex ${
            reverse ? 'flex-row-reverse' : null
          } items-center justify-between lg:gap-30 md:gap-20`}
          key={id}
        >
          <div className="">
            <Lottie
              animationData={lottie}
              className="lg:w-[400px] md:w-80 sm:w-60"
            />
          </div>
          <div className="font-semibold text-sky-900 lg:text-4xl md:text-3xl sm:text-2xl relative">
            {title}
            <div
              className={`absolute ${
                reverse ? 'left' : 'right'
              }-0 top-0 -z-10 opacity-80`}
            >
              <img
                className="lg:w-36 md:w-28 w-16"
                src={backGround}
                alt={'bg'}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
