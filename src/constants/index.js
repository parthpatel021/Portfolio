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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cpp,
    jnv,
    svnit,
    gayatri,
    ecart,
    keeper,
    resto,
    bettelfield,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Student",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    }
    


    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];

  const educations = [
    {
      title: "Bachelor of Technology",
      institute_name: "SVNIT, Surat",
      icon: svnit,
      iconBg: "#383E56",
      date: "November 2020 - May 2024",
      points: [
        "B.Tech in Electrical Engineering",
        "CGPA: 7.13"
      ],
    },
    {
      title: "Class - XII ",
      institute_name: "Shree Gayatri Vidhyalaya, Ahmedabad",
      icon: gayatri,
      iconBg: "#E6DEDD",
      date: "April 2020",
      points: [
        "Gujarat Secondary and Higher Secondary Education Board(GSEB)",
        "Grade: 52.3%",
      ],
    },
    {
      title: "Class - X",
      institute_name: "JNV, Rajkot",
      icon: jnv,
      iconBg: "#383E56",
      date: "April 2018",
      points: [
        "Central Board of Secondary Education(CBSE)",
        "Grade: 84.5%",
      ],
    },
  ]
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
      name: "E - Cart",
      description:
        "Web-based platform that allows users to search, purchase, and manage products from various providers, providing a convenient solution for user needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: ecart,
      source_code_link: "https://github.com/parthpatel021/E-Cart",
      live_link: "https://gorgeous-crow-gown.cyclic.app/",
    },
    {
      name: "Battlefield - Soldier Page",
      description:
        "An all-encompassing web application meticulously crafted to furnish players with an intricate analysis of their in-game performance.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: bettelfield,
      source_code_link: "https://github.com/parthpatel021/Battlefield",
      live_link: "https://battlefield-n6ps.onrender.com/",
    },
    // {
    //   name: "Zevi",
    //   description:
    //     "An all-encompassing web application meticulously crafted to furnish players with an intricate analysis of their in-game performance.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: bettelfield,
    //   source_code_link: "https://github.com/parthpatel021/Zevi",
    //   live_link: "https://zevi-etnx.onrender.com/",
    // },
    {
      name: "Resto.",
      description:
        "Web-application that allows users to search, order, and manage Dishes from restaurants, providing a convenient and efficient solution for food needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: resto,
      source_code_link: "https://github.com/parthpatel021/Resto",
      live_link: "https://resto-parthpatel021.onrender.com/",
    },
    // {
    //   name: "Keeper",
    //   description:
    //     "A comprehensive note storing platform that allows users to keep their ideas, and Store ideas and notes in a structured way in the form of React components.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "material-UI",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: keeper,
    //   source_code_link: "https://github.com/parthpatel021/Keeper",
    // },
  ];
  
  export { services, technologies, educations, experiences, testimonials, projects };