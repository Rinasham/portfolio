import cn from 'classnames';
import { Flex } from './Layouts';
import { Text } from './Texts';
import { IconContext, IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

type Props = {
  title: string;
  icon: IconType;
  url?: string;
};

export const ContactCard: React.FC<Props> = ({ title, icon, url }) => {
  let iconImg;
  if (title === 'GITHUB') {
    iconImg = <FaGithub className="hover:cursor-pointer" />;
  } else if (title === 'LINKEDIN') {
    iconImg = <FaLinkedin className="hover:cursor-pointer" />;
  } else if (title === 'EMAIL') {
    iconImg = <MdEmail className="hover:cursor-pointer" />;
  }

  return (
    <Flex
      className={cn(
        `py-5 px-3 tracking-wide flex-col items-center gap-3 w-[30%] shadow-md rounded`,
      )}
    >
      <Text>{title}</Text>
      <IconContext.Provider value={{ color: '#ccc', size: '50px' }}>
        {url ? <Link href={url}>{iconImg}</Link> : <div>{iconImg}</div>}
      </IconContext.Provider>
      <Link href={`${url}`}>
        <a className="break-all font-text text-sm hover:cursor-pointer text-darkred">
          {url}
        </a>
      </Link>
    </Flex>
  );
};
