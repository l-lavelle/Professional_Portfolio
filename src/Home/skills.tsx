import { TabItem, Tabs } from "flowbite-react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import LinkedinLogo from "/LinkedIn_logo.png";
import CustomBadges from "./customBadges";
import HeaderLink from "./homeComponents/headerLink";

const skillTabs = [
  {
    title: "Techincal",
    icon: CodeBracketIcon,
    skillsArray: [
      {
        badgeTitle: "trial",
        badgeImage: LinkedinLogo,
      },
    ],
  },
  {
    title: "sdf",
    icon: CodeBracketIcon,
    skillsArray: [
      {
        badgeTitle: "ssss",
        badgeImage: LinkedinLogo,
      },
    ],
  },
  {
    title: "fgh",
    icon: CodeBracketIcon,
    skillsArray: [
      {
        badgeTitle: "fffff",
        badgeImage: LinkedinLogo,
      },
    ],
  },
  {
    title: "ce",
    icon: CodeBracketIcon,
    skillsArray: [
      {
        badgeTitle: "cy",
        badgeImage: LinkedinLogo,
      },
    ],
  },
];

const SkillsSection = () => (
  <section className="relative min-w-full">
    <div className="absolute inset-0 bg-primary z-[-1] min-w-full -bottom-[150px] translate-y-[-150px]" />
    <div className="flex flex-col lg:flex-row max-w-6xl my-8 px-3 mx-auto space-y-1 lg:space-x-10">
      <div className="lg:w-1/2">
        <HeaderLink
          extraClasses={"text-black"}
          link={"/About"}
          title={"In a Nutshell"}
        />
        <p>
          Resume summary: Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className="mt-5 lg:mt-0 lg:w-1/2 lg:min-h-full">
        <Tabs aria-label="skills tabs">
          {skillTabs.map(({ title, icon, skillsArray }) => (
            <TabItem active title={title} icon={icon}>
              <div className="-mt-8 p-3 pt-6 pb-4 bg-light-black text-off-white rounded-sm lg:h-full">
                <CustomBadges badgeArray={skillsArray} />
              </div>
            </TabItem>
          ))}
        </Tabs>
      </div>
    </div>
  </section>
);

export default SkillsSection;
