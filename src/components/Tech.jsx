import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="pb-10">
      <h1 className="text-center balkind text-4xl font-bold tracking-widest">Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {technologies.map((technology, index) => (
          <div
            className="border-2 flex justify-center items-center h-10 px-3 cursor-pointer border-[#050816] hover:transition-all transition-all"
            key={index}
          >
            <p className="balkind text-[14px] transition-all h-fit uppercase text-black p-0 m-0">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
