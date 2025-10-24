
import React from "react";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Greeting from "./components/greeting/Greeting"; // Ensure the correct path

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aishwarya Sriramula",
  title: "Hi, I'm Aishwarya",
  subTitle: emoji(
    "To leverage my strong analytical and problem-solving skills developed through civil engineering, along with growing expertise in software development, to build scalable, technology-driven solutions that address real-world challenges."
  ),
  resumeLink: "", // add resume link here if available
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sriramula-aishwarya-503190339/", 
  gmail: "aishusriramula695@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills & Tools",
  subTitle: "Civil engineering background with growing software development skills",
  skills: [
    emoji("⚡ Strong analytical thinking and problem-solving applied to engineering and software"),
    emoji("⚡ Project management, site surveying and structural analysis"),
    emoji("⚡ Experience with AutoCAD, STAAD.Pro, MATLAB and engineering workflows")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C/C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "AutoCAD", fontAwesomeClassname: "fas fa-drafting-compass" },
    { skillName: "STAAD.Pro", fontAwesomeClassname: "fas fa-building" },
    { skillName: "MATLAB", fontAwesomeClassname: "fas fa-calculator" },
    { skillName: "MS Project", fontAwesomeClassname: "fas fa-tasks" },
    { skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SR University, Telangana, India",
      // logo: require("./assets/images/sr_university.jpeg"),
      subHeader: "Bachelor of Technology in Civil Engineering | CGPA: 8.5",
      duration: "2023 - 2026"
    },
    {
      schoolName: "VMR Polytechnic College",
      // logo: require("./assets/images/vmr_polytechnic.jpg"),
      subHeader: "Diploma in Civil Engineering | CGPA: 7.4",
      duration: "2020 - 2023"
    },
    {
      schoolName: "St. Joseph High School",
      // logo: require("./assets/images/st_joseph.jpg"),
      subHeader: "SSC | GPA: 10",
      duration: "2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "Selected academic and design projects",
  projects: [
    {
      // image: require("./assets/images/traffic_reducing.jpg"),
      projectName: "Traffic Reducing System",
      projectDesc:
        "A hydraulically operated footpath that lowers to road level to create an extra lane during emergencies (ambulances, fire trucks). Design uses Pascal's Law and fluid-mechanical actuation for quick deployment; intended for integration during new road construction.",
      footerLink: [
        {
          name: "Project Description",
          url: ""
        }
      ]
    },
    {
      // image: require("./assets/images/skybus.jpg"),
      projectName: "SKYBUS Technology",
      projectDesc:
        "Design of an elevated, automated mass-transport system (Skybus) providing driverless operations, electric propulsion, elevated tracks and smart energy management to reduce urban congestion and construction costs.",
      footerLink: [
        {
          name: "Project Description",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Research Papers Section
const researchPapers = {
  title: "Research Papers",
  subtitle: "Selected research work and publications",
  papers: [
    {
      title: "Development of Advanced Construction Materials",
      description:
        "Research focused on developing sustainable and high-performance construction materials using alternative binders and supplementary cementitious materials.",
      url: "",
      authors: "Aishwarya Sriramula"
    }
  ],
  display: true // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "",
  display: false // hide until a resume link is provided
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi — I'm open to collaborations.",
  email_address: "aishusriramula695@gmail.com",
  location: "Warangal, Telangana, India"
};

// Twitter Section

const twitterDetails = {
  userName: "aishwarya_sriramula", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  bigProjects,
  researchPapers,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  techStack,
  twitterDetails
};

const Main = () => {
  return (
    <div>
      {/* Other sections */}
      <Greeting />
    </div>
  );
};

export default Main;

