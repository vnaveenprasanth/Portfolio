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
      name: "Car Rent",
      description:"Portfolio showcasing my personal experience with technologies and experience I have and also showcases my personal projects and it's respective details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };