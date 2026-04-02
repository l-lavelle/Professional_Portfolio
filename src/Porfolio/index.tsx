import { useContext, useState } from "react";
import LinkedinLogo from "/LinkedIn_logo.png";
import type { PortfolioIndex } from "../types/custom";
import MobliePortfolio from "./moblie";
import "./portfolio.css";
import {
  PortfolioIconLink,
  PortfolioList,
  PortfolioTechStack,
} from "./components";
import GithubLogo from "/github_logo.png";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { GlobalContext } from "../globalContext";

const Portfolio = () => {
  // TODO: If click from home page middle show be the one clicked on
  // TODO: Clean up and Submit
  const { portfolioId } = useContext(GlobalContext);
  const portfolioIndex = portfolioId - 1;
  const portfolioOptions = [
    {
      id: 1,
      img: "https://www.w3schools.com/css/img_5terre_wide.jpg",
      projectName: "Project-1",
      tagline: "tagline-1",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/css/paris.jpg",
      projectName: "Project-2",
      tagline: "tagline-2",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/css/lights600x400.jpg",
      projectName: "Project-3",
      tagline: "tagline-3",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      img: "https://www.w3schools.com/css/img_forest.jpg",
      projectName: "Project-4",
      tagline: "tagline-4",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      img: "https://www.w3schools.com/css/img_mountains.jpg",
      projectName: "Project-5",
      tagline: "tagline-5",
      projectLink: "https://github.com/l-lavelle",
      githubLink: "https://github.com/l-lavelle",
      keyFeatures: ["feature1", "feature2", "feature3"],
      contributions: ["contribution1", "contribution2", "contribution3"],
      techStack: [LinkedinLogo, LinkedinLogo, LinkedinLogo],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [portIndex, setPortIndex] = useState<PortfolioIndex>({
    first:
      portfolioIndex === 0 ? portfolioOptions.length - 1 : portfolioIndex - 1,
    middle: portfolioIndex,
    last:
      portfolioIndex === portfolioOptions.length - 1 ? 0 : portfolioIndex + 1,
  });

  const rotateForward = (field: keyof PortfolioIndex) =>
    portIndex[field] === portfolioOptions.length - 1 ? 0 : portIndex[field] + 1;

  const rotateBackward = (field: keyof PortfolioIndex) =>
    portIndex[field] === 0 ? portfolioOptions.length - 1 : portIndex[field] - 1;

  const rotatePortfolios = (direction: "forward" | "back") => {
    const isForward = direction === "forward" ? true : false;
    setPortIndex({
      first: isForward ? rotateForward("first") : rotateBackward("first"),
      middle: isForward ? rotateForward("middle") : rotateBackward("middle"),
      last: isForward ? rotateForward("last") : rotateBackward("last"),
    });
  };

  const paginationIndex = (index: number) => {
    if (animating) return;
    const arrayLength = portfolioOptions.length - 1;
    const addOne = index + 1;
    const subtractOne = index - 1;

    setAnimating(true);
    setCenterIndex(index);

    setTimeout(() => {
      setPortIndex({
        first: subtractOne < 0 ? arrayLength : subtractOne,
        middle: index,
        last: addOne > arrayLength ? 0 : addOne,
      });
      setAnimating(false);
    }, 500);
  };

  const [centerIndex, setCenterIndex] = useState(portIndex.middle);
  const [animating, setAnimating] = useState(false);

  const handleSideClick = (direction: "back" | "forward", newIndex: number) => {
    if (animating) return;
    setAnimating(true);
    setCenterIndex(newIndex);

    setTimeout(() => {
      rotatePortfolios(direction);
      setAnimating(false);
    }, 500);
  };

  const currentProject = portfolioOptions[portIndex.middle];
  return (
    <section className="max-w-full bg-dark-black">
      <MobliePortfolio portfolioOptions={portfolioOptions} />

      {/* Desktop Portfolio */}
      <div className="max-w-6xl mb-8 px-3 mx-auto hidden md:block">
        <div className="flex md:space-x-5 pt-8">
          <div
            className={`relative h-[350px] bg-light-black cursor-pointer rounded-md
              ${
                centerIndex === portIndex.first
                  ? "port-panel center"
                  : "port-panel side"
              }`}
            onClick={() => handleSideClick("back", portIndex.first)}
          >
            <img
              src={portfolioOptions[portIndex.first].img}
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
          <div
            className={`relative h-[350px] bg-light-black rounded-md port-panel ${
              centerIndex === portIndex.middle ? "center" : "side"
            }`}
          >
            <img
              src={currentProject.img}
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
          <div
            className={`relative h-[350px] bg-light-black rounded-md cursor-pointer
              ${
                centerIndex === portIndex.last
                  ? "port-panel center"
                  : "port-panel side"
              }`}
            onClick={() => handleSideClick("forward", portIndex.last)}
          >
            <img
              src={portfolioOptions[portIndex.last].img}
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-center mt-3">
          {portfolioOptions.map((item, index) => (
            <div
              key={item.id}
              className={`w-[10px] h-[10px] m-2 cursor-pointer rounded-full ${
                portIndex.middle === index
                  ? "bg-primary"
                  : "bg-primary opacity-50"
              }`}
              style={
                portIndex.middle === index
                  ? { boxShadow: "0 0 8px 3px var(--color-primary)" }
                  : {}
              }
              data-index={index}
              onClick={() => paginationIndex(index)}
            />
          ))}
        </div>
        <div className="my-6 bg-primary-light rounded-lg p-5">
          <div className="flex justify-between items-center bg-primary p-3 rounded-md mb-1">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">
                {currentProject.projectName}
              </h3>
            </div>
            <div className="flex space-x-2">
              <PortfolioIconLink
                link={currentProject.projectLink}
                imageNode={<GlobeAltIcon className="w-8 h-8" />}
              />
              <PortfolioIconLink
                link={currentProject.githubLink}
                imageNode={<img src={GithubLogo} className="w-8 h-8" />}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 p-3">
            <h3 className="text-md">{currentProject.tagline}</h3>
            <PortfolioList
              list={currentProject.keyFeatures}
              title="Key Features"
            />
            <PortfolioList
              list={currentProject.contributions}
              title="Contributions"
            />
            <PortfolioTechStack techStack={currentProject.techStack} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
