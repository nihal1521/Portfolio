import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { splashScreen } from "../portfolio"; // Remove this import statement
// import Achievement from "./achievement/Achievement";

// Ensure you import the correct components
import Education from "./education/Education";
import Greeting from "./greeting/Greeting";
import "./Main.scss";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import SplashScreen from "./splashScreen/SplashScreen";
import StartupProject from "./StartupProjects/StartupProject";
import ResearchPapers from "./researchPapers/ResearchPapers";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <Projects />
            <StartupProject />
            <ResearchPapers />
            <Twitter />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
