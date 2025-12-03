/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import express from '/Express.png';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'transparent', color: '#fff', border: '1px solid black' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full border-2 rounded-full">
        <img
          src={experience?.icon ? experience?.icon : express}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-black text-sm md:text-[20px] mb-2 font-bold">{experience.title}</h3>
      <a
        href={experience.link ? experience.link : '#'}
        className="text-black text-xs md:text-[16px] font-semibold underline"
      >
        {experience.company_name}
      </a>
    </div>

    <ul className="mt-3 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-black text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="border-b-2 px-5 pb-20 md:px-20">
      <motion.div variants={textVariant()} className="text-left">
        <p className={` balkind text-black text-5xl font-bold tracking-widest`}>Experience</p>
      </motion.div>

      <div className="flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
