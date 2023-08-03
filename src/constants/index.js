import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  sqlite,
  git,
  devacademy,
  rnz,
  grapes,
  moh,
  buddy,
  threejs,
  todo,
  blog,
  twitterClone,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Music Producer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Sqlite',
    icon: sqlite,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'Music Resource Assistant',
    company_name: 'Radio New Zealand',
    icon: rnz,
    iconBg: '#F03007',
    date: 'June 2020 - November 2021',
    points: [
      'Casual role helping to digitally archive RNZ’s substantial CD collection. ',
      'Meticulous data entry work ensuring music files were properly transferred across to the organisation’s servers.',
      'Other administration tasks such as compiling spreadsheets for APRA, as well as having to complete timesheets and manage my own time.',
    ],
  },
  {
    title: 'General labourer',
    company_name: 'Alandale Orchards & Seifried Estates',
    icon: grapes,
    iconBg: '#E6DEDD',
    date: 'Feb 2022 - Sep 2022',
    points: [
      'Short seasonal contract roles in the Nelson area viticulture sector, carrying out various physical labour duties.',
      'Jobs included removing nets, chopping out dead grape trees, stacking boxes onto pallets at assembly line speed, operating the depalletizer machine, planting new plants.',
      'High level of physical fitness required, as well as great communication skills and special attention to health and safety practises when dealing with bottling machinery.',
    ],
  },
  {
    title: 'Advisor',
    company_name: 'Ministry of Health',
    icon: moh,
    iconBg: '#383E56',
    date: 'Nov 2022 - Dec 2022',
    points: [
      'Temp role for the Official Information Act team where I case managed multiple requests from the public. Required exceptional time management skills and personal responsibility to ensure the sign off process was correctly adhered to and a response was issued within 20 working days.',
      "Proactive communication skills: I would need to find Subject Matter Experts, relevant managers, liaise with third party organisations such as Pharmac or other government departments, as well as the Minister's Office.",
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'High-responsibility role that involved precise attention to detail to ensure any sensitive information was redacted before my response was issued to the requestor.',
    ],
  },
  {
    title: 'Student',
    company_name: 'Dev Academy Aotearoa',
    icon: devacademy,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - May 2023',
    points: [
      '17 week program that took a small group of individuals from zero to full stack web development. We learned the key web programming languages HTML, CSS and Javascript, but also gained many important soft skills',
      'Worked in small and large groups, giving and receiving feedback, as well as embedding software development concepts like Agile and Scrum',
      'Git and Github pull requests and code reviews. Software quality measures such as accessibility with WAVE extension, performance and security as well as authentication via JSON web tokens',
      'Debugging techniques in the browser and on the server',
    ],
  },
]

const testimonials = [
  {
    testimonial: 'Lorem ipsum something',
    name: 'Dan Burridge',
    designation: 'Branch Manager',
    company: 'ACM',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Twitter clone',

    description: `I built this basic Twitter style application through a Youtube tutorial as a way of learning new frameworks from the "T3 Stack", including Next Auth, Next JS, Prisma, Tailwind and tRPC. It is deployed on Vercel and uses PlanetScale for the database.`,
    tags: [
      {
        name: 'Next JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'tRPC',
        color: 'green-text-gradient',
      },
      {
        name: 'Prisma',
        color: 'pink-text-gradient',
      },
    ],
    image: twitterClone,
    source_code_link: 'https://github.com/josh-w-mason/twitter-clone',
    deployedLink: 'https://twitter-clone-eta-rosy.vercel.app/',
  },
  {
    name: 'Buddy',
    description:
      'This project was our final group project we worked on at Dev Academy, the concept of which was to create something that would help international travellers connect with local Welligtonians who wanted to help introduce them to the local culture and make friends.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'material UI',
        color: 'pink-text-gradient',
      },
    ],
    image: buddy,
    source_code_link: 'https://github.com/josh-w-mason/buddy',
    deployedLink: '',
  },
  {
    name: 'Full stack to-do list',
    description:
      'This was a solo coding challenge towards the end of the course, whereby we had to make and deploy a basic CRUD app that implemented all of our learnings right through the full stack.',
    tags: [
      {
        name: 'redux',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: todo,
    source_code_link: 'https://github.com/josh-w-mason/full-stack-todo',
    deployedLink: '',
  },
  {
    name: 'Foundations Blog',
    description:
      'During the first phase of the course (Foundations) we worked on basic Javascript kata, DOM manipulation challenges and built a simple blog to house our human skills reflections.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'creative writing',
        color: 'pink-text-gradient',
      },
    ],
    image: blog,
    source_code_link: 'https://github.com/josh-w-mason/josh-w-mason.github.io',
    deployedLink: '',
  },
]

export { services, technologies, experiences, testimonials, projects }
