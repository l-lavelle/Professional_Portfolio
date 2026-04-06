import { useEffect, useRef, useState, useContext } from "react";
import type { PortfolioOptions } from "../types/custom";
import GithubLogo from "/github_logo.png";
import {
  GlobeAltIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";
import {
  PortfolioIconLink,
  PortfolioList,
  PortfolioTechStack,
} from "./components";
import { GlobalContext } from "../globalContext";

const MobliePortfolio = ({
  portfolioOptions,
}: {
  portfolioOptions: PortfolioOptions[];
}) => {
  const { portfolioId } = useContext(GlobalContext);
  const portfolioIndex = portfolioId - 1;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    cardRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [portfolioIndex]);

  return (
    <div className="flex flex-col items-center space-y-6 my-6 mx-3 md:hidden">
      {portfolioOptions.map(
        (
          {
            img,
            projectName,
            githubLink,
            keyFeatures,
            contributions,
            techStack,
            projectLink,
            tagline,
          },
          index,
        ) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="w-full rounded-lg cursor-pointer max-w-[500px]"
              style={{
                maxHeight: isActive ? "900px" : "300px",
                transition: "max-height 0.6s ease-in-out",
              }}
              ref={portfolioIndex === index ? cardRef : null}
            >
              <div className="flex flex-col w-full">
                <div className="relative h-[300px] w-full flex-shrink-0">
                  <img
                    src={img}
                    className="h-full w-full object-cover rounded-lg"
                  />
                  <div
                    className={`absolute top-3 right-3 ${isActive ? "block" : "hidden"}`}
                  >
                    <div className="flex flex-row space-x-3">
                      <PortfolioIconLink
                        link={projectLink}
                        imageNode={<GlobeAltIcon className="w-8 h-8" />}
                      />
                      <PortfolioIconLink
                        link={githubLink}
                        imageNode={<img src={GithubLogo} className="w-8 h-8" />}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-semibold text-xl p-2.5 bg-primary-light rounded-md flex justify-between items-center">
                      {projectName}
                      <ChevronDoubleDownIcon
                        className="h-5 w-7 text-sm inline-block transition-transform duration-500"
                        style={{
                          transform: isActive
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </h3>
                  </div>
                </div>

                <div
                  className="overflow-hidden bg-primary p-2 rounded-md"
                  style={{
                    maxHeight: isActive ? "600px" : "0px",
                    opacity: isActive ? 1 : 0,
                    transition:
                      "max-height 0.6s ease-in-out, opacity 0.4s ease-in-out 0.15s",
                  }}
                >
                  <div className="glassy-background p-4 flex flex-col space-y-5">
                    <h3 className="text-md">{tagline}</h3>
                    <PortfolioList list={keyFeatures} title="Key Features" />
                    <PortfolioList list={contributions} title="Contributions" />
                    <PortfolioTechStack techStack={techStack} />
                  </div>
                </div>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default MobliePortfolio;
