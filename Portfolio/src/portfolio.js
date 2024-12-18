/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import React from "react";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Greeting from "./components/greeting/Greeting"; // Ensure the correct path

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nihal Thangallapally",
  title: "Hi all, I'm Nihal",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cS38JCHC_x1r8nlEsUJolHYrn51JF7Z_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nihal1521",
  linkedin: "https://www.linkedin.com/in/nihal-thangallapally/",
  gmail: "nihalthangallapally1@outlook.com",
  gitlab: "https://gitlab.com/nihal1521",
  medium: "https://medium.com/@nihalthangallapally123",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQLite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SR University",
      logo: require("./assets/images/sr_university.jpeg"),
      subHeader: "Batchlor of Technology in Computer Science Engineering with Specialization in Artificial Intelligence and Machine Learning",
      duration: "November 2021 - May 2025",
    },
    {
      schoolName: "SR Junior College",
      logo: require("./assets/images/sr prime.jpg"),
      subHeader: "MPC",
      duration: "June 2019 - June 2021",
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/trafficSignDetectionLogo.webp"), // Update with the correct image path
      projectName: "AI Powered Traffic Sign Detection",
      projectDesc: "Traffic sign detection for autonomous vehicles using Raspberry Pi and OpenCV.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/nihal1521/Traffic-Sign-Recognization-Using-Raspberry-pi"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/expenseTrackerLogo.webp"), // Update with the correct image path
      projectName: "Expense Tracker",
      projectDesc: "A web application to track your expenses and manage your budget efficiently.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/nihal1521/Expense_Tracker" // Update with the correct URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@nihalthangallapally123/ai-powered-traffic-sign-recognization-using-raspberry-pi-de592bfbba1f",
      title: "AI Powered Traffic Sign Recognization using Raspberry Pi",
      description:
        "Traffic sign detection for autoomus vechicle using Raspberry Pi and OpenCV",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "https://drive.google.com/file/d/1cS38JCHC_x1r8nlEsUJolHYrn51JF7Z_/view?usp=sharing",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8074572255",
  email_address: "nihalthangallapally1@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "nihal_1521", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, resumeSection, skillsSection, socialMediaLinks,
  splashScreen, techStack, twitterDetails
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

