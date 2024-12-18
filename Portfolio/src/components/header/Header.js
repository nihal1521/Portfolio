import React, { useContext } from "react";
import Headroom from "react-headroom";
import StyleContext from "../../contexts/StyleContext";
import {
  blogSection,
  greeting,
  openSource,
  resumeSection,
  skillsSection
} from "../../portfolio";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewBlog = blogSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
// Remove this duplicate declaration
// const resumeSection = {
//   title: "Resume",
//   subtitle: "Feel free to download my resume",
//   resumeLink: "https://drive.google.com/file/d/1cS38JCHC_x1r8nlEsUJolHYrn51JF7Z_/view?usp=sharing",
//   display: true // Set false to hide this section, defaults to true
// };

// Ensure you import the correct `resumeSection` from `portfolio.js`
