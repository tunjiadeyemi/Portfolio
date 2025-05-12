import {
  creator,
  web,
  classroomio,
  experienceOne,
  exerienceFour,
  stuntMedia,
  marianaa,
  kidan,
  naijaStars,
  navix,
  classroomIO
} from '/public/assets';

export const navLinks = [
  {
    id: '#about',
    title: 'Summary',
  },
  {
    id: '#work',
    title: 'Experience',
  },
  {
    id: '#projects',
    title: 'Projects',
  },
  {
    id: 'https://docs.google.com/document/d/1r39NBPCASTJ80zoVjpoRO3eMOk4B1Tr7k2kxUrnRltw/edit?usp=sharing',
    title: 'Resume',
  },
  {
    id: '#contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'UI Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'React JS',
  },
  {
    name: 'React Native',
  },
  {
    name: 'Redux Toolkit',
  },
  {
    name: 'Sveltekit Js',
  },
  {
    name: 'Node Js',
  },
  {
    name: 'Express Js',
  },
  {
    name: 'Python',
  },
  {
    name: 'supabase',
  },
  {
    name: 'neon db',
  },
  {
    name: 'firebase',
  },
  {
    name: 'Bootstrap',
  },
  {
    name: 'Tailwind CSS',
  },
  {
    name: 'sass',
  },
  {
    name: 'git',
  },
  {
    name: 'figma',
  },
];

const experiences = [
  {
    title: 'Open Source Fullstack Developer (Sveltekit Js & Node Js)',
    company_name: 'ClassroomIO',
    icon: classroomio,
    link: 'https://github.com/classroomio/classroomio',
    iconBg: '#383E56',
    points: [
      'Designed and implemented a scalable multi-language system, increasing international adoption by 40%.',
      'Built an OpenAI-integrated content generation feature, reducing content creation time by 70% for course creators.',
      'Reduced bug regression rate by 50% through code reviews and continuous refactoring.',
      'Enhanced frontend responsiveness and reduced load time by 45%, improving usability across devices.',
      'Launched a Chrome browser extension to turn any web page into an interactive quiz, powered by Supabase and gamification features.',
      'Built and deployed Naija Stars (naijastars.dev), an open-source discovery platform.',
      'Created a Deno pipeline that auto-tracks Nigerian GitHub repositories with scheduled updates to Neon DB.',
      'Delivered multiple feature enhancements and platform adjustments based on user feedback, contributing to a 30% improvement in customer satisfaction scores on Classroomio.',
      'Optimized frontend rendering and backend API performance, resulting in a 45% reduction in page load times and a significantly improved user experience across all device types.'
    ],
  },
  {
    title: 'Frontend Developer (React Js & Telegram Api)',
    company_name: 'NavixEcosystem',
    icon: navix,
    link: 'https://www.navixecosystem.com/',
    iconBg: '#383E56',
    points: [
      'Rebuilt UI for Telegram-based blockchain game using React and Tailwind CSS, resulting in a 30% increase in user engagement and positive feedback from beta testers.',
      'Optimized frontend performance by restructuring codebase, resulting in 40% faster page loads and 25% smaller bundle size.',
      'Developed AI-driven game logic (minimax with randomization), extending average session length by 15+ minutes.',
      'Wrote integration tests with 95% code coverage, reducing production bugs by 60%.',
      'Improved platform uptime from 87% to 99.5% through proactive debugging and infrastructure collaboration.',
      'Led collaborative debugging sessions with the engineering team, prioritizing and resolving critical issues that improved system reliability from 87% to 99.5% uptime.',
      'Implemented performance optimizations across the frontend and backend, resulting in a 35% reduction in API response times and a 50% decrease in client-side rendering bottlenecks.',
    ],
  },
  {
    title: 'Frontend Developer (React Js)',
    company_name: 'Mixed Fraction',
    icon: '',
    link: 'https://github.com/MixedFraction-devs',
    iconBg: '#383E56',
    points: [
      'Developer user interfaces using Chakra UI and other component libraries, ensuring sleek and responsive designs that enhance user experience.',
      'Actively participated in code reviews, debugging and pair programming sessions providing constructive feedback. This process contributed to the continuous improvement of the codebase and the overall development workflow.',
      'Engaged in knowledge-sharing initiatives within the team, facilitating skill development and fostering a collaborative environment conducive to efficient problem-solving and project success.',
      'Assisted with the implementation of features, both on the frontend and backend, enhancing the overall functionality and user experience of the platform.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'He came through when I needed him the most & he also delivered accurately',
    name: 'Babatunde Tosin',
    designation: 'CEO',
    company: 'Spaceville',
    image: 'https://randomuser.me/api/portraits/lego/7.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tunji does.",
    name: 'Raphael',
    designation: '',
    company: '',
    image: 'https://randomuser.me/api/portraits/lego/5.jpg',
  },
];

const projects = [
  {
    name: 'Naija Stars',
    description: 'A website showing the top open source repositories in Nigeria.',
    tags: [
      {
        name: 'Svelte',
        color: 'green-text-gradient',
      },
      {
        name: 'Deno',
        color: 'blue-text-gradient',
      },
      {
        name: 'Hono',
        color: 'blue-text-gradient',
      },
    ],
    image: naijaStars,
    source_code_link: 'https://github.com/classroomio/naija-stars',
    live_link: 'https://naijastars.dev/',
  },
  {
    name: 'ClassroomIO',
    description: 'A simple landing page from classroomio',
    tags: [
      {
        name: 'Svelte',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient',
      }, 
    ],
    image: classroomIO,
    source_code_link: 'https://github.com/classroomio/classroomio',
    live_link: 'https://classroomio.com/',
  },
  {
    name: 'Shopmora',
    description: 'A Landing page for a small scale fashion business.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Gsap',
        color: 'green-text-gradient',
      },

      {
        name: 'Framer Motion',
        color: 'green-text-gradient',
      },
    ],
    image: exerienceFour,
    source_code_link: 'https://github.com/tunny17/Shopmora',
    live_link: 'https://shopmora-co.netlify.app/',
  },
  {
    name: 'Mariana',
    description: 'A Landing page for a small scale fashion business.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'green-text-gradient',
      },
    ],
    image: marianaa,
    source_code_link: '#',
    live_link: 'https://mariana-test.netlify.app/',
  },
    {
    name: 'Kidan',
    description: 'An E-commerce website for a client',
    tags: [
      {
        name: 'ReactJs',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient',
      },
    ],
    image: kidan,
    source_code_link: '#',
    live_link: 'https://kidanstore.vercel.app/',
  },
  {
    name: 'StuntMedia',
    description: 'A Landing page for a DMV Videographer.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Gsap',
        color: 'green-text-gradient',
      },
      {
        name: 'Framer Motion',
        color: 'green-text-gradient',
      },
    ],
    image: stuntMedia,
    source_code_link: '#',
    live_link: 'https://stuntmedia.netlify.app/',
  },
  {
    name: 'Art Hotel',
    description: 'Web-based platform that allows users to book',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'gsap',
        color: 'green-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'swiperjs',
        color: 'pink-text-gradient',
      },
    ],
    image: experienceOne,
    source_code_link: 'https://github.com/tunny17/arthotel',
    live_link: 'https://arthotel.netlify.app/',
  },
 
];

export { services, technologies, experiences, testimonials, projects };
