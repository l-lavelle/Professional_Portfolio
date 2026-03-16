import HeaderLink from "../components/headerLink";
import BlogCard from "./blogCard";
import "./blog.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import CustomBadges from "../../components/customBadges";

const HomeBlog = () => {
  const blogs = [
    {
      title: "Noteworthy technology",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      badgeArray: [
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
      ],
    },
    {
      title: "Noteworthy technology",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      badgeArray: [
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
      ],
    },
  ];

  return (
    <section className="relative min-w-full">
      <div className="absolute inset-0 bg-light-black z-[-1] min-w-full bottom-[0px]" />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full xl:w-6xl">
          <div className="mx-3 xl:mx-auto mt-6 mb-10">
            <HeaderLink
              extraClasses={
                "text-off-white justify-self-center sm:justify-self-start mb-2"
              }
              link={"/Blog"}
              title={"Featured Blog"}
            />
            <div className="cube-swiper-wrapper">
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="cube-swiper"
              >
                {blogs.map(({ title, badgeArray }, index) => (
                  <SwiperSlide key={`${title}-${index}`}>
                    <div className="cubed-slide-wrapper">
                      <img
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        className="cube-img"
                      />

                      <div className="badge-wrapper flex flex-col p-0 space-y-2">
                        <div className="moblie-badge-title">
                          <h5>{title}</h5>
                        </div>
                        <div className="moblie-badges">
                          <CustomBadges badgeArray={badgeArray.slice(0, 3)} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="blog-cards-wrapper flex">
              {blogs.map(
                (
                  { title, description, image, imageAlt, badgeArray },
                  index
                ) => (
                  <BlogCard
                    key={`${title} ${index}`}
                    title={title}
                    description={description}
                    badgeArray={badgeArray}
                    image={image}
                    imageAlt={imageAlt}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
