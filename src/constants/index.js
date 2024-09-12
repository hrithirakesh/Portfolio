import project1 from "../assets/projects/p1.jpg";
import project2 from "../assets/projects/p2.jpg";
import project3 from "../assets/projects/p3.jpg";
import project4 from "../assets/projects/p4.jpg";

export const HERO_CONTENT = `I am a final-year Computer Science and Engineering student at SASTRA Deemed University with a strong passion for data structures and algorithms (DSA), problem-solving, and machine learning (ML). Over the course of my studies, I have developed a solid foundation in programming with C++ and proficiency in SQL for database management. I am skilled in solving complex problems and applying machine learning techniques to real-world scenarios. My goal is to leverage these skills in innovative projects that push the boundaries of technology and create meaningful impact.`;

export const ABOUT_TEXT = `I am a BTech CSE 2025 graduate in Computer Science Engineering, 
experienced in various coding languages, OOP, and Operating Systems, with 
internship experience.`;

export const EXPERIENCES = [
  {
    year: "08/2023 - 03/2024",
    role: "Intern",
    company: "R4apps",
    description: ` I was a web development intern, 
contributing to the design and development of real-time web applications 
already created by the company. Using technologies such as PHP and 
AngularJS, I implemented new changes in the frontend for better user 
experience.`,
    technologies: ["Javascript", "Angular.js", "PHP"],
  },
  {
    year: "05/2023- 06/2023",
    role: "Intern",
    company: "MilesCube",
    description: `I learnt Intermediate level skills in HTML,CSS. 
Created a user Interface for a mobile application using FLUTTER.`,
    technologies: ["HTML", "CSS", "FLUTTER"],
  },
  
];

export const PROJECTS = [
  {
    title: " Traffic Congestion and Forecast Detection",
    image: project1,
    description:
      " Detecting the traffic congestion using online images using GNN. Forecasting of traffic was done using ARIMA,Histrorical Average,D2STGNN,DGCRN. Congestion was detected using the threshold frequency. Error rates obtained were nearly same as in the IEEE published papers",
    technologies: ["OpenCV", "YOLOV7", "ML Algorithms"],
  },
  {
    title: " Ocular Eye Detection",
    image: project2,
    description:
      " Artificial Neural Network and Convolutional Neural Network was used to detect the Ocular eye disease. Performed various EDA's to find the most dependent attribute. Accuracy obtained is 86%.",
    technologies: ["ANN", "CNN", ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Image Recognition",
    image: project4,
    description:
      "Data processing and image processing, which includes face recognition of famous cricketers using ML technique",
    technologies: ["OpenCY", "ML"],
  },
];

export const CONTACT = {
  address: "Bangalore,India",
  phoneNo: "7483432464",
  email: "hrithirakesh@gmail.com",
};
// constants.js
export const EDUCATION = [
  {
    year: "2021-2025",
    degree: "Bachelor of Science in Computer Science",
    institution: "Sastra Deemed to be University",
    description: "Grade : 8.0 ",
    
  },
  {
    year: "2019-2021",
    degree: "CBSE 12th",
    institution: "Sri Chaitanya Techno School",
    description: "Grade : 9.5 ",
    
  },
  {
    year: "2019",
    degree: "CBSE 10th",
    institution: "Sri Chaitanya Techno School",
    description: "Grade : 9.2 ",
    
  },
  // Add more education entries as needed
];
// constants.js
export const HOBBIES = [
  {
    name: "D'arts (Arts Team of SASTRA)",
    description: " Head of the arts team of SASTRA. Contributed as member of this team since 2021, I have been a part of making collbrative paintings and poster painting. We as a team have also made dyanmic models.",
    skills: ["Portraits", "Landscapes", "Watercolors","Acryclic"],
  },
  {
    name: "KURUKSASTRA Marrketing and Corparate Relations",
    description: "and Corprate Realations Led strategic marketing initiatives and cultivated strong corporate relationships. Effective communication, and negotiation skills to establish mutually beneficial partnerships.",
    skills: ["Collabration", "Team Bonding", "Speaking"],
  },
  // More hobbies
];
// constants.js
export const ACHIEVEMENTS = [
  {
    title: "Gold Medal In Olympiads",
    description: "Won first place in National and State level.",
    details: ["IMO,NSO,STSO,MTSO,NSTSE,NTSE"],
  },
  {
    title: "Honorable Mention in NASA ISDC  2017",
    description: "Won fouth place in NASA competittion.",
    details: [" Project on Asteroid Mining"],
  },
  {
    title: "Sports",
    description: "Medals in Running(100m) and ThrowBall.",
    details: ["U-14 and U-16"],
  },
  // More achievements
];
// constants.js
export const CODING_PROFILES = [
  {
    platform: "LeetCode",
    username: "hrithirak",
    url: "https://leetcode.com/u/hrithirak/",
  },
  // More coding profiles
];
