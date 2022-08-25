import { ProjectsCard, SectionLayouts, Title } from '../Layout';
import { projects } from '../../../data';
import Image from 'next/image';

export const Projects = () => {
  return (
    <SectionLayouts id="projects" className="">
      <Title>PROJECTS</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => {
          return (
            <div key={project.title}>
              <div className="relative w-full min-h-[300px]">
                <Image
                  src={`${project.img}`}
                  layout="fill"
                  objectFit="cover"
                  // width={300}
                  // height={200}
                  alt="project-image"
                />
              </div>
              <ProjectsCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                url={project.url}
                code={project.code}
                color={project.color}
              />
            </div>
          );
        })}
      </div>
    </SectionLayouts>
  );
};
