import React, {useContext} from "react";
import {Fade} from "react-reveal";
import ResearchCard from "../../components/blogCard/BlogCard"; // reuse BlogCard for layout
import {researchPapers} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./ResearchPapers.scss";

export default function ResearchPapers() {
  const {isDark} = useContext(StyleContext);

  if (!researchPapers.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="research-papers">
        <div className="blog-header">
          <h1 className="blog-header-text">{researchPapers.title}</h1>
          <p className={isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"}>
            {researchPapers.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {researchPapers.papers.map((paper, i) => (
              <ResearchCard
                key={i}
                isDark={isDark}
                blog={{
                  url: paper.url,
                  title: `${paper.title} ${paper.authors ? ` — ${paper.authors}` : ""}`,
                  description: paper.description
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
