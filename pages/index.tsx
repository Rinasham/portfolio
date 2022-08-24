import type { NextPage } from 'next';

import { Top, About, Projects, Contact } from '../components/Element/sections';
import { Layout } from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Top />
        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
