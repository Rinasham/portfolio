import Link from 'next/link';
import { Flex, Text } from '../../Element/Layout';

export const Top = () => {
  return (
    <div
      className={`relative w-screen h-[85vh] bg-cover bg-no-repeat bg-computer  flex items-center justify-center`}
    >
      <div className="border-2 border-white py-3 px-3 flex items-center justify-center w-80 md:w-96">
        <Flex className=" bg-white bg-opacity-90 py-8 px-6 gap-6 flex-col text-center items-center w-full h-full">
          <h2 className="font-title text-7xl">HELLO!</h2>
          <Flex className="flex-col gap-2">
            <Text>
              My name is <span className="text-hotpink">Rina</span>
            </Text>
            <Text>I am a software developer in Sydney!</Text>
          </Flex>

          <Link href="#about" scroll={false}>
            <a className="px-2.5 py-2 w-full hover:cursor-pointer font-medium bg-hotpink hover:bg-darkred text-white text-2xl font-text">
              ABOUT ME
            </a>
          </Link>
        </Flex>
      </div>
    </div>
  );
};
