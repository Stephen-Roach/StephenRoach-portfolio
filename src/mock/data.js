import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Stephen-w-dogs.jpeg',
  paragraphOne:
    'I am passionate about the web and all things technology. Creative software engineer with the ability to pick up new languages and technologies as needed. I primarily enjoy working in a team, sharing ideas, learning and problem-solving.',
  paragraphTwo:
    'Prior to learning software development, I worked as an Inside Sales Consultant for Cummins Inc, where I evaluated technical project specifications and construction drawings to prepare a highly engineered bid package.',
  paragraphThree:
    'Outside of work I enjoy spending time with my Siberian Husky and Golden Retriever. We love all things outdoors, primarily hiking, and traveling all around the world to learn about different cultures. I am currently on a mission to visit all of our National Parks.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'allbirds-clone.png',
    title: 'Allbirds Clone',
    info: 'Allbirds clone with complete shopping cart functionality utilizing Redux.',
    info2:
      'Technologies Used: HTML, CSS, JavaScript, React.js & Redux. Deployed using Google Firebase.',
    url: 'https://allbirds-clone-35d9a.web.app/',
    repo: 'https://github.com/Stephen-Roach/Better-allbirds', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Jobbyist.png',
    title: 'Jobbyist',
    info:
      'Jobbyist is a job posting app geared towards individuals who would like to be compensated for doing the things they love and for employers who are looking for others with unique hobbyist skills. ',
    info2:
      'Technologies Used: Node.js, Express.js, Passport.js, Postgres, Google OAuth, EJS & deployed using Heroku.',
    url: 'https://mighty-inlet-78570.herokuapp.com/',
    repo: 'https://github.com/Stephen-Roach/dreamTeamProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TuneChamp.png',
    title: 'TuneChamp',
    info:
      'TuneChamp is a music quiz application using the Spotify API. Guess the song out of four options getting only a small clip of the music. Compare your scores with others who have taken the TuneChamp quiz and see if you are the Tune Champion.',
    info2:
      'Technologies Used: JavaScript, React, React Context API and Postgres for the Database. We utilized the Spotify API for the music as well as the user authentication.',
    url: 'https://tunechamp-client.herokuapp.com/',
    repo: 'https://github.com/RpowelliV/TuneChamp-Client', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stephenroach21@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Stephen_Daven',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/stephen-d-roach',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Stephen-Roach',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
