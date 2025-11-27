import {
  creator,
  web,
  classroomio,
  spacery,
  mariana,
  nura,
  gambit,
  exerienceFour,
  stuntMedia,
  naijaStars,
  navix,
  classroomIO
} from '/public/assets';

export const navLinks = [
  {
    id: '#about',
    title: 'Summary',
    isExternal: false
  },
  {
    id: '#work',
    title: 'Experience',
    isExternal: false
  },
  {
    id: '#projects',
    title: 'Projects',
    isExternal: false
  },
  {
    id: 'https://docs.google.com/document/d/1r39NBPCASTJ80zoVjpoRO3eMOk4B1Tr7k2kxUrnRltw/edit?usp=sharing',
    title: 'Resume',
    isExternal: true
  },
  {
    id: 'mailto:tvnji01@gmail.com',
    title: 'Contact',
    isExternal: true
  }
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web
  },
  {
    title: 'UI Designer',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML'
  },
  {
    name: 'CSS'
  },
  {
    name: 'JavaScript'
  },
  {
    name: 'TypeScript'
  },
  {
    name: 'React JS'
  },
  {
    name: 'React Native'
  },
  {
    name: 'Redux Toolkit'
  },
  {
    name: 'Sveltekit Js'
  },
  {
    name: 'Node Js'
  },
  {
    name: 'Express Js'
  },
  {
    name: 'Python'
  },
  {
    name: 'supabase'
  },
  {
    name: 'neon db'
  },
  {
    name: 'firebase'
  },
  {
    name: 'Bootstrap'
  },
  {
    name: 'Tailwind CSS'
  },
  {
    name: 'sass'
  },
  {
    name: 'git'
  },
  {
    name: 'figma'
  }
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Luxen Labs',
    link: '#',
    iconBg: '#383E56',
    points: [
      'Built Nura Landing page using Reactjs + TailwindCss and Framer Motion.',
      'Built Gambit’s Landing page and web app using reactjs, tailwindcss + framer motion and Nextjs, Zutstand and React Query respectively.',
      'Built Fairlaunch’s Web app using Reactjs, TailwindCss and Axios.',
      'Delivered multiple feature enhancements and platform adjustments based on user feedback and peer code review.'
    ]
  },
  {
    title: 'Frontend Developer (Sveltekit Js & Node Js)',
    company_name: 'ClassroomIO',
    icon: classroomio,
    link: 'https://github.com/classroomio/classroomio',
    iconBg: '#383E56',
    points: [
      'Added multi-language support (10+ languages including Danish, Polish)',
      'Built automatic server-side language detection for seamless user experience.',
      'Implemented translation management workflow (via a script written in nodejs).',
      'Contributed to the comprehensive setup guides and documentation.',
      'Integrated GPT-4 for automated exercise generation',
      'Built AI-powered lesson note generation',
      'Built course analytics dashboard with completion tracking.',
      'Reduced bug regression rate by 50% through code reviews and continuous refactoring.',
      'Enhanced frontend responsiveness and reduced load time by improving usability across devices',
      'Launched a Chrome browser extension to turn any web page into an interactive quiz, powered by Supabase and gamification features.',
      'Contributed to Naija Stars (naijastars.dev), an open-source discovery platform.',
      'Engineered automated GitHub API scraping pipeline that collects, transforms, and stores metadata for 250+ Nigerian open-source repositories with rate-limiting and contributor tracking.',
      'Developed RESTful API with pagination, multi-field sorting, full-text search, server-side caching (60s TTL), and Redis-based rate limiting (100 req/15min) for production scalability.',
      'Deployed to Deno Deploy with CDN optimization, implemented singleton database pattern for connection pooling, and integrated Upstash Redis for distributed rate limiting in production',
      'Engineered automated GitHub API scraping pipeline that collects, transforms, and stores metadata for 250+ Nigerian open-source repositories with rate-limiting and contributor tracking.',
      'Created reusable component library with 15+ Svelte UI components, implemented debounced search with URL state management, and built responsive data tables with real-time filtering',
      'Delivered multiple feature enhancements and platform adjustments based on user feedback, contributing to a 30% improvement in customer satisfaction scores on Classroomio.',
      'Optimized frontend rendering and backend API performance, resulting in a 45% reduction in page load times and a significantly improved user experience across all device types.',
      'Assisted with refactoring the codebase to improve maintainability and scalability (moved from svetekit v4 to v5 and tailwind v3 to v4).'
    ]
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
      'Implemented performance optimizations across the frontend and backend, resulting in a 35% reduction in API response times and a 50% decrease in client-side rendering bottlenecks.'
    ]
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
      'Assisted with the implementation of features, both on the frontend and backend, enhancing the overall functionality and user experience of the platform.'
    ]
  }
];

const testimonials = [
  {
    testimonial: 'He came through when I needed him the most & he also delivered accurately',
    name: 'Babatunde Tosin',
    designation: 'CEO',
    company: 'Spaceville',
    image: 'https://randomuser.me/api/portraits/lego/7.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tunji does.",
    name: 'Raphael',
    designation: '',
    company: '',
    image: 'https://randomuser.me/api/portraits/lego/5.jpg'
  }
];

const projects = [
  {
    name: 'Nura Labs',
    tags: [
      {
        name: 'Reactjs',
        color: 'green-text-gradient'
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'Framer motion',
        color: 'blue-text-gradient'
      }
    ],
    image: nura,
    live_link: 'https://tunny-nura.netlify.app/'
  },
  {
    name: 'Gambit',
    tags: [
      {
        name: 'Reactjs',
        color: 'green-text-gradient'
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'Framer motion',
        color: 'blue-text-gradient'
      }
    ],
    image: gambit,
    live_link: 'https://tunny-gambit.netlify.app/'
  },
  {
    name: 'Spacery',
    tags: [
      {
        name: 'Reactjs',
        color: 'green-text-gradient'
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'Framer motion',
        color: 'blue-text-gradient'
      },
      {
        name: 'GSAP',
        color: 'blue-text-gradient'
      }
    ],
    image: spacery,
    live_link: 'https://spacery-v3.netlify.app/'
  },
  {
    name: 'Mariana',
    tags: [
      {
        name: 'Reactjs',
        color: 'green-text-gradient'
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'Framer motion',
        color: 'blue-text-gradient'
      }
    ],
    image: mariana,
    live_link: 'https://www.marianasecret.com/'
  },
  {
    name: 'Naija Stars',
    description: 'A website showing the top open source repositories in Nigeria.',
    tags: [
      {
        name: 'Svelte',
        color: 'green-text-gradient'
      },
      {
        name: 'Deno',
        color: 'blue-text-gradient'
      },
      {
        name: 'Hono',
        color: 'blue-text-gradient'
      }
    ],
    image: naijaStars,
    source_code_link: 'https://github.com/classroomio/naija-stars',
    live_link: 'https://naijastars.dev/'
  },
  {
    name: 'ClassroomIO',
    description: 'A simple landing page from classroomio',
    tags: [
      {
        name: 'Svelte',
        color: 'green-text-gradient'
      },
      {
        name: 'Tailwindcss',
        color: 'blue-text-gradient'
      }
    ],
    image: classroomIO,
    source_code_link: 'https://github.com/classroomio/classroomio',
    live_link: 'https://classroomio.com/'
  },
  {
    name: 'Shopmora',
    description: 'A Landing page for a small scale fashion business.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient'
      },
      {
        name: 'Gsap',
        color: 'green-text-gradient'
      },

      {
        name: 'Framer Motion',
        color: 'green-text-gradient'
      }
    ],
    image: exerienceFour,
    source_code_link: 'https://github.com/tunjiadeyemi/Shopmora',
    live_link: 'https://shopmora-co.netlify.app/'
  },
  {
    name: 'StuntMedia',
    description: 'A Landing page for a DMV Videographer.',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient'
      },
      {
        name: 'Gsap',
        color: 'green-text-gradient'
      },
      {
        name: 'Framer Motion',
        color: 'green-text-gradient'
      }
    ],
    image: stuntMedia,
    source_code_link: '#',
    live_link: 'https://stuntmedia.netlify.app/'
  }
];

export { services, technologies, experiences, testimonials, projects };
