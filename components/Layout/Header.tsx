import Link from 'next/link';
import React from 'react';
import { Flex } from '../Element/Layout';
import { Text } from '../Element/Layout';

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 ">
      <header className="py-7 px-6 flex justify-between bg-white">
        <div>Title</div>
        <Flex className="gap-6">
          <Link href="#about">
            <Text>
              <a className="hover:cursor-pointer">About</a>
            </Text>
          </Link>
          <Link href="#projects">
            <Text>
              <a className="hover:cursor-pointer">Projects</a>
            </Text>
          </Link>
          <Link href="#contact">
            <Text>
              <a className="hover:cursor-pointer">Contact</a>
            </Text>
          </Link>
        </Flex>
      </header>
      <div className="h-4 bg-lightpink bg-gradient-to-br">{''}</div>
    </div>
  );
};
