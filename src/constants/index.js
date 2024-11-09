import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const achievements = [
    {
      title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
    },
    {
      title: "State level Table-Tennis Winner (2021 and 2022).",
    },
    {
      title: "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023).",
    },
    {
      title: "Branch Head of Information Technology Department (2021 - 2022).",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students (2021).",
    },
    {
      title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship for securing 90+ % (2015 - 2023).",
    },
    {
      title: "Played Nationals in Throwball for U-14 category. (2015).",
    },
  ]
  
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
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bash",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFDJLaUHfkk5JOqF2RTfK4m3RgHi3kM7Txw&s",
    },
    {
      name: "git",
      icon: git,
    },    {
      name: "Linux",
      icon: "https://miro.medium.com/v2/resize:fit:1400/0*Qqqd7UsfFDPL7WXh.jpeg",
    }
  ];

  const list = [
    {
      id: "other",
      title: "All Projects",
    },
  ];
  export const otherProject = [
    {
      name: "Diabetes Prediction Using Chat Bot",
      description:
        "Developed a smart chatbot that can analyze user input based on many health parameters to forecast the probability that a user has diabetes using HTML, CSS, JS, Flask ,Python.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://github.com/Jayu1214/Diabetes-Prediction-Using-Chatbot",
      source_code_link: "https://github.com/Jayu1214/Diabetes-Prediction-Using-Chatbot",
    },
    {
      name: "Cafe Order Management System",
      description:
        "Developed an effective system to handle cafe orders, guaranteeing efficient operations from order placement to order fulfillment. The project's dependable MySQL-powered backend and sturdy Java front end allow for effective inventory control and customer order processing.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
      source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    }
  ];
  
  const experiences = [
    {
      title: "Software Intern",
      company_name: "NAS.IO",
      icon: "https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/623/000/original/NAs_logo.jpeg?1662714760",
      iconBg: "#383E56",
      date: "3 months",
      link: "",
      points: [
        "Conducted in-depth analysis of security threats, utilizing digital forensics techniques to identify potential vulnerabilities and breaches.",
        "Gained hands-on experience in identifying and mitigating real-world cyber threats, including malware, phishing attacks, and unauthorized access.",
        "Worked with various cybersecurity tools and platforms to enhance network and data security, ensuring compliance with security protocols.",
        "Developed skills in investigating and responding to security incidents, collaborating with teams to strengthen overall system security.",
      ],
    },
    {
      title: "Software Intern",
      company_name: "IBM (Edunet)",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzgOCr3t7Awavv-eWbSnpbSJ35mM7G99iQA&s",
      iconBg: "#383E56",
      date: "1 month",
      link: "",
      points: [
        "Acquired in-depth knowledge of IBM Cloud Platform, gaining proficiency in deploying and managing AI-driven applications on cloud infrastructure.",
        "Developed hands-on expertise in designing and implementing AI solutions, with a focus on real-world applications in cloud computing.",
        "Utilized IBM’s advanced AI tools and frameworks to solve practical problems, improving efficiency and innovation in cloud-based environments.",
        "Enhanced skills in integrating AI capabilities within cloud systems, contributing to seamless, scalable, and secure deployment of AI applications."
      ],
    }
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Computer Science Engineering",
      marks:
        "CGPA : 7.43 / 10",
      name: "Symbiosis Institute Of Technology , Pune",
      year: "(2022 - 2026)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 74 %",
      name: "Kendriya Vidyalaya ONGC Mehesana",
      year: "2022",
      image: school,
    },
    {
      degree:
        "10th Grade",
      branch: "SSC",
      marks:
        "Percentage : 75 %",
      name: "Kendriya Vidyalaya ONGC Mehesana",
      year: "2020",
      image: school,
    },
  ];
  
  export { list, technologies, experiences, educations, achievements };
