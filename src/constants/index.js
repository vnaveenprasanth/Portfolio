import {
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    git,
    senseforth ,
    portfolio,
    yelpcamp,
    cropper
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: web,
    }

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
      name: "TypeScript",
      icon: typescript,
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
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Project Intern (Full Time)",
      company_name: "Senseforth.ai",
      icon: senseforth,
      iconBg: "#383E56",
      date: "May 2022 - Dec 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:"Portfolio showcasing my personal experience with technologies and experience I have and also showcases my personal projects and it's respective details...",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://portfolio-beige-zeta-15.vercel.app/",
    },
    {
      name: "YelpCamp",
      description:"A project which follows MVC architecture with full fledged functionalities and usage of Bootstrap components and much more... ",
      tags: [
        {
          name: "HTML,CSS,JS",
          color: "blue-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
        {
          name: "NODEJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: yelpcamp,
      source_code_link: "https://naveenprasanthv-yelpcamp.onrender.com",
    },
    {
      name: "Cropper",
      description:"The project which uses an ML API to render appropriate crop yield predictions and stores history and has intuitive analytics charts....",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "NODEJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: cropper,
      source_code_link: "https://drive.google.com/file/d/1QGOslfVkPCg0cs5VtGC7O5iJLisB_e5M/view?usp=share_link",
    },
  ];
  
  export { services, technologies, experiences, projects };