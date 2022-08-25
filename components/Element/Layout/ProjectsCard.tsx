import cn from 'classnames';
import { Flex } from './Layouts';
import { SubTitle, Text } from './Texts';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import Link from 'next/link';

type Props = {
  color: string;
  title: string;
  description: string;
  technologies: string;
  url?: string;
  code?: string[];
};

export const ProjectsCard: React.FC<Props> = ({ color, title, ...props }) => {
  return (
    <Flex
      className={cn(
        `py-5 px-3 tracking-wide flex-col items-center gap-1  bg-${color}`,
      )}
    >
      <SubTitle>{title}</SubTitle>
      <p className="text-xl font-extrabold tracking-widest font-text">
        {props.description}
      </p>

      <p className="text-xl font-extrabold tracking-widest font-text">
        {props.technologies}
      </p>
      <Flex className="gap-5">
        <IconContext.Provider
          value={{ color: '#ccc', size: '50px' }}
          key={props.url}
        >
          <Link href={`${props.url}`}>
            <MdComputer className="hover:cursor-pointer" />
          </Link>
        </IconContext.Provider>
        {props.code &&
          props.code.map((url) => {
            return (
              <IconContext.Provider
                value={{ color: '#ccc', size: '50px' }}
                key={url}
              >
                <Link href={`${url}`}>
                  <FaGithub className="hover:cursor-pointer" />
                </Link>
              </IconContext.Provider>
            );
          })}
      </Flex>
    </Flex>
  );
};
