import { shopify, es } from "../assets/images";
import {
  swift,
  zota,
  refine,
  budget,
  wildtrack,
  codingsystem,
  javascript,
  react,
  vue,
  nodejs,
  express,
  mongodb,
  gcp,
  python,
  docker,
  kubernetes,
  sql,
  mysql,
  csharp,
  java,
  aws,
  html,
  css,
  tailwindcss,
  git,
  github,
  atlassian,
  json,
  xml,
  yaml,
  kafka,
  excel,
  stripe,
  email,
  linkedin,
  mui,
  nextjs,
  redux,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: gcp,
    name: "Google Cloud Platform",
    type: "Cloud Services",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerization",
  },
  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "Container Orchestration",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: csharp,
    name: "C#",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: aws,
    name: "Amazon Web Services",
    type: "Cloud Services",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: atlassian,
    name: "Atlassian",
    type: "Project Management",
  },
  {
    imageUrl: json,
    name: "JSON",
    type: "Data Interchange",
  },
  {
    imageUrl: xml,
    name: "XML",
    type: "Data Interchange",
  },
  {
    imageUrl: yaml,
    name: "YAML",
    type: "Data Interchange",
  },
  {
    imageUrl: kafka,
    name: "Apache Kafka",
    type: "Data Streaming",
  },
  {
    imageUrl: excel,
    name: "Excel",
    type: "Data Management",
  },
  {
    imageUrl: stripe,
    name: "Stripe",
    type: "Payment Gateway",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Nonlinear Systems",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jul 2022 - Nov 2022",
    points: [
      "Worked on Python Retail ERP integrations and automated data processing using Google Sheets.",
      "Deployed and managed cloud infrastructure on Google Cloud Platform.",
      "Developed full-stack applications with Vue.js and Node.js, including a WhatsApp automation bot using the WhatsApp Business API.",
      "Reviewed and revised Python scripts for data lakes and ERP systems, ensuring quality and efficiency before deployment.",
      "Configured an online Shopify store and managed related data manipulations using Excel sheets.",
      "Utilized version control systems GitHub and Bitbucket for collaborative development.",
      "Followed Agile methodologies, including Scrum and Kanban, to ensure efficient project management and delivery.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Empower Solutions",
    icon: es,
    iconBg: "#fbc3bc",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Developed advanced JavaScript WebRTC protocols for capturing and managing audio streams.",
      "Collaborated with team members to seamlessly integrate audio stream processing with Python AI models for speech-to-text transcription, ensuring smooth data flow and functionality.",
      "Gained hands-on experience with Docker containers and Kubernetes for efficient deployment and management of AI model services.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: email,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/lifecycles1",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/todorraichev",
  },
];

export const projects = [
  {
    iconUrl: codingsystem,
    theme: "btn-back-blue",
    iconBg: "linear-gradient(135deg, #0061ff -20%, #60efff 120%)",
    borderBottomColor: "#71a4f5",
    name: "Competitive Challenge Platform",
    description: "Engineered a comprehensive full-stack platform, leveraging Google Cloud Platform for scalable serverless cloud functions, aimed at empowering students to sharpen their coding skills and ace technical job interviews.",
    github_link: "https://github.com/lifecycles1/assessment-system",
    live_link: "https://code-assessment.to6ko.com",
  },
  {
    iconUrl: wildtrack,
    theme: "btn-back-green",
    iconBg: "linear-gradient(135deg, #adfda2 -20%, #11d3f3 120%)",
    borderBottomColor: "#a2f5cd",
    name: "WhatsApp Automation - Wildtrack",
    description:
      "Developed a robust full-stack solution utilizing Vue and Node.js, integrated with the WhatsApp Business API for automated wildlife tracking and location sharing. Leveraged Google Cloud Platform for scalability and Google Sheets as a database, while incorporating Maps JavaScript API for visualizing locations and Trello REST API for support message management. The project's focus is on wildlife tracking via WhatsApp, providing real-time location updates and weather information.",
    github_link: "https://github.com/lifecycles1/whatsapp-webhook",
    live_link: "https://the-awesome-track-site.netlify.app/login",
  },
  {
    iconUrl: budget,
    theme: "btn-back-red",
    iconBg: "linear-gradient(135deg, #ff4b1f -20%, #ff9068 120%)",
    borderBottomColor: "#ff8787",
    name: "Budget App",
    description:
      "Crafted a full-stack budgeting application using React and Node.js, seamlessly integrated with Google Sheets for efficient data management. Hosted on Google Cloud Platform and Render Cloud, ensuring reliability and scalability. The app provides users with intuitive budget tracking and management features, empowering them to take control of their finances effortlessly.",
    github_link: "https://github.com/lifecycles1/budget-app-min",
    live_link: "https://budget-app-min-client.onrender.com",
  },
  {
    iconUrl: refine,
    theme: "btn-back-violet",
    iconBg: "linear-gradient(135deg, #4456df -20%, #a7addb 120%)",
    borderBottomColor: "#7e88d6",
    name: "Real-Estate Application",
    description: "Developed a MERN stack real estate dashboard built using the Refine framework, hosted on Google Cloud Platform. This application provides property management and analytics features, offering users an intuitive interface to browse real estate data.",
    github_link: "https://github.com/lifecycles1/MERN-Dashboard-Refine",
    live_link: "https://refine-dashboardd.netlify.app/",
  },
  {
    iconUrl: zota,
    theme: "btn-back-black",
    iconBg: "linear-gradient(135deg, #0a1647 -20%, #e4e7e4 120%)",
    borderBottomColor: "#a0a3ad",
    name: "ZotaPay",
    description: "A payment gateway system integrated with the ZotaPay API, built with Golang and React.js, leveraging Apache Kafka for real-time data processing. The platform offers a user-friendly interface for payment management and tracking, providing a seamless experience for users.",
    github_link: "https://github.com/lifecycles1/zota-payment",
    live_link: "",
  },
  {
    iconUrl: swift,
    theme: "btn-back-orange",
    iconBg: "linear-gradient(135deg, #ff0f7b -20%, #f89b29 120%)",
    borderBottomColor: "#ff5263",
    name: "Swift API",
    description: "A RESTful API built with C# .NET 8 to process SWIFT messages, providing a secure and efficient solution for financial institutions.",
    github_link: "https://github.com/lifecycles1/SwiftAPI",
    live_link: "",
  },
];

export const DRAG_HINT_SHOW_DURATION = 10000; // Duration to show dragHint on home in milliseconds
export const DRAG_HINT_EXPIRY_DAYS = 30; // Number of days before showing the hint again
