import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { background } from '../../public/assets/index';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../constants';

// eslint-disable-next-line react/prop-types
const HorizontalScrollCarousel = ({ videos }) => {
  const targetRef = useRef(null);
  const playerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-75%']);

  useEffect(() => {
    // Call showPreview on the playerRef when the video changes
    if (playerRef.current) {
      playerRef.current.showPreview();
    }
  }, [videos]); // This will trigger the effect whenever the videos array changes

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[300vh] md:h-[300vh] sm:h-[200vh] text-black"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex z-[2] gap-7 md:gap-7 sm:gap-4">
          {projects.map((project, index) => (
            <div key={index} className="scroll-section balkind">
              <div className="info__about w-full">
                <div>
                  {project?.description && <p className="balkind">{project?.description}</p>}
                </div>
                <div className="w-full">
                  {project?.tags && (
                    <p className="flex items-center justify-end gap-2 w-full pr-28 flex-wrap">
                      {project?.tags.map((tag, idx) => (
                        <span key={idx} className="tag text-sm md:text-base">
                          {tag.name}
                          {', '}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
              <div className="info__body">
                <div className="info-icons">
                  <img src={background} alt="" className="background" />
                  <div className="room overflow-hidden">
                    <img src={project.image} alt="" className="object-contain w-full h-full" />
                  </div>
                </div>
                <div className="info-text leading-[6rem] md:leading-[4rem] sm:leading-[3rem] balkind flex items-center justify-center">
                  <span className="uppercase">{project.name}</span>
                </div>
                <Link to={project.live_link} relative="path">
                  <div className="hoverbtn-container font-bold absolute bottom-[17%] left-[57%] px-[5%] py-[1%] text-lg">
                    <button className="hoverbtn-btn">
                      <span className="btn-text uppercase balkind">see project</span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
