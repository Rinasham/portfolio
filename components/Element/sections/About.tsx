import Image from 'next/image';
import { Flex, SectionLayouts, Text, Title, SubTitle } from '../Layout';

export const About = () => {
  return (
    <SectionLayouts id="about">
      <Title>ABOUT ME</Title>
      <Flex className="w-full flex-col md:flex-row mt-10">
        <div className="relative w-full min-h-[300px]">
          <Image
            src="/imgs/piano2.JPG"
            objectFit="cover"
            layout="fill"
            alt="profile-img"
          />
        </div>
        <Flex className="pl-10  flex-col items-start">
          <SubTitle>Hello World! My name is Rina.</SubTitle>
          <Text>
            I am a Web Developer based in Sydney and recently graduated from
            General Assembly where I learned about both front and back end
            development.
          </Text>
        </Flex>
      </Flex>
    </SectionLayouts>
  );
};
