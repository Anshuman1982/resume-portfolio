import {
  AcademicCapIcon,
  /**ArrowDownTrayIcon, */
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import myPhoto from '../images/profile.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Anshuman_Portfolio',
  description: '',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Anshuman Banjara`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">B.Tech CSE (AIML) student</strong> who enjoys building practical{' '}
        <strong className="text-stone-100">machine learning and data-driven applications</strong> that solve real
        problems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Recently I've worked on projects like a{' '}
        <strong className="text-stone-100">Customer Churn Predictor with GenAI suggestions</strong>,
        <strong className="text-stone-100"> House Price Predictor</strong>,{' '}
        <strong className="text-stone-100">Student Score Predictor</strong>, and a{' '}
        <strong className="text-stone-100">Resume Matcher app</strong>. I'm actively looking for internships in ML,
        data, and software development roles.
      </p>
    </>
  ),

  actions: [
    /**  
    * add pdf of resume in public/assests than uncomment this to get downloaadedble resume on website. 
    * 
    * {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },*/

    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */

export const aboutData: About = {
  profileImageSrc: myPhoto,
  description:
    "I'm a B.Tech CSE (AIML) student from India who likes building practical machine learning and data-driven projects rather than just solving theoretical examples. " +
    "So far I've worked on projects like a Customer Churn Predictor with GenAI suggestions, House Price Predictor, Student Score Predictor, and a Resume Matcher app. " +
    "I focus on writing clean code, documenting my work properly, and pushing everything to GitHub so it's easy for others to review. " +
    "I'm actively looking for internships in ML, data, and software development, and I use this site to track my progress, showcase projects, and make it easier for recruiters to see what I can actually do.",

  aboutItems: [
    {label: 'Location', text: 'Jodhpur ,Rajasthan', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Machine Learning, reading , New tech ', Icon: SparklesIcon},
    {label: 'Study', text: 'B.Tech CSE (AIML)', Icon: AcademicCapIcon},
    {
      label: 'Employment',
      text: 'Machine Learning trainee (project-based training & self projects)',
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */

export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Python', level: 8},
      {name: 'C', level: 7},
      {name: 'Java', level: 5},
    ],
  },
  {
    name: 'Machine Learning & Data',
    skills: [
      {name: 'Scikit-learn', level: 7},
      {name: 'Pandas', level: 8},
      {name: 'NumPy', level: 7},
      {name: 'Matplotlib', level: 6},
    ],
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      {name: 'Streamlit', level: 8},
      {name: 'Git & GitHub', level: 7},
      {name: 'Jupyter Notebook', level: 8},
      {name: 'VS Code', level: 8},
    ],
  },
  {
    name: 'Web Basics',
    skills: [
      {name: 'HTML', level: 6},
      {name: 'CSS', level: 5},
      {name: 'JavaScript (Basics)', level: 4},
    ],
  },
  {
    name: 'Currently Learning',
    skills: [
      {name: 'React', level: 3},
      {name: 'Next.js', level: 2},
    ],
  },
];

/**
 * Portfolio section
 */

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'House Price Predictor',
    description:
      'A regression-based ML model that predicts house prices using features like area, rooms, and location. Includes clean EDA, training, and deployment.',
    url: 'https://github.com/Anshuman1982/House-Price-Predictor',
    image: porfolioImage2,
  },
  {
    title: 'Student Score Predictor',
    description:
      'Predicts student exam scores from study hours using a simple but well-executed ML pipeline. Good beginner-level ML project with clean documentation.',
    url: 'https://github.com/Anshuman1982/Student-performance-Predictor',
    image: porfolioImage3,
  },
  {
    title: 'Customer Churn Predictor + GenAI Suggestions',
    description:
      'Predicts customer churn and generates actionable retention strategies using a machine learning model. Built with scikit-learn and a GenAI layer.',
    url: 'https://github.com/Anshuman1982/customer-churn-predictor-genai',
    image: porfolioImage1,
  },
  {
    title: 'Resume Matcher App ',
    description:
      'Compares candidate resumes with job descriptions and calculates match percentage along with skill insights. Built using NLP and Streamlit.',
    url: 'https://github.com/Anshuman1982/Resume-Matcher',
    image: porfolioImage4,
  },
];

/**
 * Resume section --
 */

export const education: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'Jodhpur, Rajasthan',
    title: 'B.Tech in Computer Science (AIML)',
    content: (
      <p>
        Studying Artificial Intelligence and Machine Learning with a focus on practical implementation through projects.
        Worked on regression models, classification models, data preprocessing, and ML deployment basics.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2025 - July 2025',
    location: 'Regex Software (Remote/Training)',
    title: 'Machine Learning Trainee',
    content: (
      <p>
        Completed hands-on AIML training focused on building real machine learning pipelines. Worked on data
        preprocessing, model training, and evaluation, documented through my summer-regex GitHub repository. Built and
        deployed Nex Bot with API integration and AWS hosting, gaining experience with cloud deployment. Strengthened
        practical skills in Python, Pandas, NumPy, scikit-learn, basic deep learning, Jupyter Notebook, and Git/GitHub
        workflows.
      </p>
    ),
  },
  {
    date: '2024 - Present',
    location: 'Jodhpur, Rajasthan',
    title: 'Independent Machine Learning Projects',
    content: (
      <p>
        Developed end-to-end ML applications including a Resume Matcher App, Customer Churn Predictor with a GenAI
        suggestion layer, House Price Predictor, and Student Score Predictor. Focused on clean data pipelines, model
        experimentation, evaluation, and deployment-ready project structures. All work is documented and maintained on
        GitHub.
      </p>
    ),
  },
];

/** Testimonial section (need to update in future)*/
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Coming soon',
      text: 'I am currently focused on building real-world experience through projects, internships, and collaborations. I will add testimonials from mentors, teammates, and managers here as I work with more people in the industry.',
    },
  ],
};
/*
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'The best way to reach me is by email. I am open to internship opportunities in machine learning, data, and software development, as well as collaboration on interesting projects.',
  items: [
    {
      type: ContactType.Email,
      text: 'anshumanbanjara83@gmail.com',
      href: 'mailto:anshumanbanjara83@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Jodhpur, Rajasthan, India',
      href: 'https://www.google.com/maps/place/Jodhpur,+Rajasthan,+India',
    },
    {
      type: ContactType.Github,
      text: 'Anshuman1982',
      href: 'https://github.com/Anshuman1982',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Anshuman1982'},
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/anshuman-banjara-9a7640290/',
  },
];
