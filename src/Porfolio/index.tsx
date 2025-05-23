import { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import CustomBadges from "../Home/customBadges";
import LinkedinLogo from "/LinkedIn_logo.png";

type PortfolioIndex = {
  first: number;
  middle: number;
  last: number;
};

const Portfolio = () => {
  // TODO: If click from home page middle show be the one clicked on
  // TODO: on hover scroll through webpage - get bigger

  const portfolioOptions = [
    { img: "img1", title: "title1" },
    { img: "img2", title: "title2" },
    { img: "img3", title: "title3" },
    { img: "img4", title: "title4" },
    { img: "img5", title: "title5" },
  ];

  const [portIndex, setPortIndex] = useState<PortfolioIndex>({
    first: 0,
    middle: 1,
    last: 2,
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
    const arrayLength = portfolioOptions.length - 1;
    const addOne = index + 1;
    const subtractOne = index - 1;

    setPortIndex({
      first: subtractOne < 0 ? arrayLength : subtractOne,
      middle: index,
      last: addOne > arrayLength ? 0 : addOne,
    });
  };

  const skillsArray = [
    {
      badgeTitle: "cy",
      badgeImage: LinkedinLogo,
    },
    {
      badgeTitle: "cy",
      badgeImage: LinkedinLogo,
    },
    {
      badgeTitle: "cy",
      badgeImage: LinkedinLogo,
    },
    {
      badgeTitle: "cy",
      badgeImage: LinkedinLogo,
    },
  ];
  return (
    <section className="relative max-w-full -mt-7">
      <div className="absolute inset-0 bg-primary z-[-1] min-w-full top-0 bottom-[175px]" />
      <div className="max-w-6xl my-8 px-3 mx-auto">
        <div className="flex md:space-x-5 pt-8">
          <div
            className="relative w-1/8 hidden md:block h-[350px] bg-dark-black rounded-sm"
            onClick={() => rotatePortfolios("back")}
          >
            <p className="text-off-white">
              {portfolioOptions[portIndex.first].title}
            </p>
          </div>
          <div className="relative w-full md:w-6/8 h-[350px] bg-dark-black rounded-sm">
            <div className="slider-container">
              <ArrowLeftCircleIcon
                className="md:hidden arrow left-arrow w-15 h-15"
                onClick={() => rotatePortfolios("back")}
              />
              <p className="text-off-white">
                {portfolioOptions[portIndex.middle].title}
              </p>
              <ArrowRightCircleIcon
                className="md:hidden arrow right-arrow w-15 h-15"
                onClick={() => rotatePortfolios("forward")}
              />
            </div>
          </div>
          <div
            className="w-1/8 hidden md:block h-[350px] bg-dark-black rounded-sm"
            onClick={() => rotatePortfolios("forward")}
          >
            <p className="text-off-white">
              {portfolioOptions[portIndex.last].title}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          {portfolioOptions.map((item, index) => (
            <div
              className={`w-[10px] h-[10px] m-2 cursor-pointer rounded-full ${
                portIndex.middle === index ? "bg-dark-black" : "bg-gray-400"
              }`}
              data-index={index}
              onClick={() => paginationIndex(index)}
            />
          ))}
        </div>
        <div className="my-6 bg-light-black rounded-sm p-3">
          <h3 className="text-off-white text-2xl pb-2">Project Name</h3>
          <div className="border-t border-gray-300 my-1"></div>
          <h3 className="text-off-white text-lg">Summary :</h3>
          <p className="text-off-white">
            Lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting,
          </p>

          {/* bullet points */}
          <h3 className="text-off-white text-lg mt-3">Key Features : </h3>
          <ul className="list-disc list-inside ml-3">
            <li className="text-off-white">Coffee</li>
            <li className="text-off-white">Tea</li>
            <li className="text-off-white">Milk</li>
          </ul>

          <h3 className="text-off-white text-lg mt-3 mb-1">
            Tools & Technologies :
          </h3>
          <CustomBadges badgeArray={skillsArray} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
