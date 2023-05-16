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
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: 'Content Creator',
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
      'Short seasonal contract roles in the Nelson area viticulture sector, carrying out various physical labour duties',
      'Jobs included removing nets, chopping out dead grape trees, stacking boxes onto pallets at assembly line speed, operating the depalletizer machine, planting new plants.',
      'High level of physical fitness required, as well as great communication skills and special attention to health and safety practises when dealing with bottling machinery.',
    ],
  },
  {
    title: 'Advisor',
    company_name: 'Ministry of Health',
    icon: moh,
    iconBg: '#383E56',
    date: 'Nov 2022 - Dec 2023',
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
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
