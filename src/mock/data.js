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
  img: 'profile.JPG',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'allbirds-clone.png',
    title: 'allbirds-clone',
    info: '',
    info2: '',
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
    img: 'Meme-Orator.png',
    title: 'Meme-Orator',
    info:
      'An image and gif generator where the user is able to search for images & gif’s, add text to them via a text box, position the box wherever appropriate and then save the image and gif to their machine. ',
    info2:
      'Technologies Used: HTML, CSS, JavaScript, and jQuery. We utilized 2 different API’s in order to display images as well as Gif’s.',
    url: 'https://meme-orator.surge.sh/',
    repo: 'https://github.com/Stephen-Roach/Meme-Orator/tree/Developer', // if no repo, the button will not show up
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
