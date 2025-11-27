import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} balkind font-bold tracking-widest`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[16px] leading-[30px] text-center"
      >
        Experienced and results-driven Frontend Developer with over 4 years of experience building
        responsive, scalable, and high-performance web applications using modern frontend
        technologies such as Reactjs, Nextjs, SvelteKit, ReactNativ (All in TypeScript), Nodejs,
        Turbo, Vite, Shadcn, Carbon, Tailwind CSS, Sass, Less etc. Adept at translating UI/UX
        designs into clean, efficient code, optimizing performance, and delivering cross-browser,
        mobile-first experiences. Strong background in RESTful APIs, state management (Redux,
        Context API, Stores), and integrating AI and Web3 features. Proven success working in
        Agile/Scrum teams and contributing to open-source and startup environments.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap justify-evenly'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, 'about');
