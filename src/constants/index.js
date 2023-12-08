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
  mongodb,
  git,
  figma,
  docker,
  python,
  bootstrap,
  sqlite,
  nextjs,
  adp,
  emblixsolutions,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  yuzomart,
  filmx,
  careerconnect,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },

  {
    name: "Sqlite",
    icon: sqlite,
  },
];

const experiences = [
  {
    title: "Member Technical",
    company_name: "ADP",
    icon: adp,
    iconBg: "#383E56",
    date: "February 2022 - April 2023",
    points: [
      "Led major rebranding project, updating and aligning all web assets to reflect the new brand identity, resulting in a 25% increase in website traffic, and a 15% growth in customer conversion rates",
      "Facilitated the execution of UI/UX design enhancements, resulting in an 11% boost in user engagement and a reduction in bounce rate.",
      "Collaborated with cross-functional teams, including designers and backend developers, to deliver seamless and cohesive web applications",
      "Implemented Pendo tags on all web pages, which enabled the execution of 10 A/B tests, leading to a 15% increase in conversion rates and data-driven enhancements in user interfaces",
      "Established unit tests, elevating code coverage from 70% to 80%, and reducing post-release issues by 15%.",
      "Tech Stack: HTML, CSS, JavaScript, React, MySQL, React Testing Library, Jest, Pendo.",
    ],
  },
  {
    title: "FRONTEND DEVELOPER INTERN",
    company_name: "Emblix Solutions",
    icon: emblixsolutions,
    iconBg: "#383E56",
    date: "September 2021 - January 2022",
    points: [
      "Built a responsive website for a leading healthcare brand, achieving a 30% increase in user engagement, using Bootstrap",
      "Engaged in code reviews, enhancing coding skills and gaining insights from more experienced team members",
      "Refactored HTML, CSS, & JavaScript to meet industry and company standards for SEO and Accessibility, leading to a 15% boost in user accessibility.",
      "Gained exposure to UI/UX design principles and best practices through participation in design reviews.",
      "Engaged in 4 professional development workshops, acquiring invaluable knowledge in frontend development techniques.",
      "Tech Stack: HTML, CSS, JavaScript, React, Bootstrap.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Filmx",
    description:
      "Filmx aims to provide an epic cinematic experience, offering users a platform to explore, discover, and engage with a vast collection of movies and TV shows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-indigo-500",
      },
      {
        name: "javascript",
        color: "text-amber-400",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "text-green-400",
      },
    ],
    image: filmx,
    source_code_link: "https://github.com/SridharDigital/Filmx",
    live_website_link: "https://filmx.vercel.app/",
  },
  {
    name: "YuzoMart",
    description:
      "YuzoMart is a dynamic e-commerce platform that caters to a diverse range of customer needs by offering an extensive array of products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-amber-400",
      },
      {
        name: "bootstrap",
        color: "text-violet-600",
      },
      {
        name: "restapi",
        color: "text-green-400",
      },
    ],
    image: yuzomart,
    source_code_link: "https://github.com/SridharDigital/YuzoMart",
    live_website_link: "https://yuzomart.vercel.app/",
  },
  {
    name: "Career Connect",
    description:
      "A job search platform showcasing the latest job openings in product-based companies that enables users to search for job openings, view estimated salary ranges for positions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-violet-600",
      },
      {
        name: "javascript",
        color: "text-amber-400",
      },
    ],
    image: careerconnect,
    source_code_link: "https://github.com/SridharDigital/Career-Connect",
    live_website_link: "https://careerconnects.vercel.app/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "bootstrap",
  //       color: "text-violet-600",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
