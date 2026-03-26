import LinkedinLogo from "/LinkedIn_logo.png";
import "./skills.css";
import { TagTabs, SkillsBadges } from "./components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import type { BadgeCategories } from "../../types/custom";

const tagTabs = [
  {
    title: "All",
    image: "/LinkedIn_logo.png",
  },
  {
    title: "Frontend",
    image: "/LinkedIn_logo.png",
  },
  {
    title: "Backend",
    image: "/LinkedIn_logo.png",
  },
  {
    title: "trial",
    image: "/LinkedIn_logo.png",
  },
];

const skillsBadges = [
  {
    badgeTitle: "tailwind",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },

  {
    badgeTitle: "bootstrap",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },

  {
    badgeTitle: "python",
    badgeImage: LinkedinLogo,
    tag: "Backend",
  },

  {
    badgeTitle: "node",
    badgeImage: LinkedinLogo,
    tag: "Backend",
  },
  {
    badgeTitle: "typescript",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },
  {
    badgeTitle: "css",
    badgeImage: LinkedinLogo,
    tag: "Frontend",
  },
];

const filteredSkills = (
  data: BadgeCategories[],
  currentTag: string,
): BadgeCategories[] => {
  if (currentTag === "All") {
    return data;
  } else {
    return data.filter(({ tag }) => tag === currentTag);
  }
};

const SkillsSection = () => {
  const [tag, setTag] = useState<string>("All");

  return (
    <section className="w-full py-6 bg-primary-light">
      <div className="flex flex-col my-8 mx-auto space-y-1">
        <div className="bg-primary flex justify-center items-center px-6 py-3">
          <div className="w-full max-w-6xl">
            <h3 className="text-2xl font-medium text-center md:text-left mb-4">
              Areas of Expertise
            </h3>
            <div className="flex justify-center md:justify-start">
              <TagTabs tagTabs={tagTabs} tag={tag} setTag={setTag} />
            </div>
          </div>
        </div>
        <div className="px-3">
          {/* TODO: turn autoplay on */}
          {/* TODO: Coloring for different types of skills */}
          {/* TODO: connect to porfolio page with tag selected?? */}
          <Swiper
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 8 },
            }}
            spaceBetween={30}
            loop={true}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay]}
            className="skillsSwiper"
          >
            {filteredSkills(skillsBadges, tag).map(
              ({ badgeImage, badgeTitle }) => (
                <SwiperSlide>
                  <SkillsBadges
                    badgeImage={badgeImage}
                    badgeTitle={badgeTitle}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
