import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Greadings | Building Tools for Creators and Life-Learners', 
  lang: 'en', 
  description: 'Greadings is the parent company of The Daily Dose, a newsletter service providing 3 minute "micro-documentaries" daily.', 
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Greadings,',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
// export const aboutData = {
//   img: 'profile.jpg',
//   paragraphOne: 'Hello, My Name is Drew Page.',
//   paragraphTwo: '',
//   paragraphThree: '',
//   resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
// };

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'the-daily-dose.png',
    title: 'The Daily Dose',
    info: 'Learn Something New Every Day in Under 3 Minutes. Your Daily Dose of History, Tech, Medicine and More Delivered Directly to Your Inbox.',
    info2: '',
    url: 'https://dailydosenow.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'enlighten-me-daily.png',
    title: 'Enlighten Me Daily',
    info: 'Daily quotes for motivation, inspiration, leadership, love, and more.',
    info2: '',
    url: 'https://enlightenmedaily.com',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/thedailydose18',
    },
  ],
};

