import HeaderLink from "../components/headerLink";
import BlogCard from "./blogCard";
import "./blog.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const HomeBlog = () => {
  const blogs = [
    {
      title: "Noteworthy technology",
      description:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      date: "03-12-26",
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
      date: "03-12-26",
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
    <section className="bg-light-black w-full">
      <div className="flex flex-col justify-center items-center py-4 ">
        <div className="w-full xl:w-6xl">
          <div className="mx-3 xl:mx-auto mt-6 mb-4 sm:mb-10">
            <HeaderLink
              extraClasses={
                "text-off-white justify-self-center sm:justify-self-start mb-4"
              }
              link={"/Blog"}
              title={"Featured Blog"}
            />
            <div className="blog-swiper-wrapper">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                spaceBetween={20}
                className="blogSwiper"
              >
                {blogs.map(
                  (
                    { title, description, image, imageAlt, badgeArray, date },
                    index,
                  ) => (
                    <SwiperSlide>
                      <BlogCard
                        key={`${title} ${index}`}
                        title={title}
                        description={description}
                        badgeArray={badgeArray}
                        image={image}
                        imageAlt={imageAlt}
                        date={date}
                      />
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </div>

            <div className="blog-cards-wrapper flex">
              {blogs.map(
                (
                  { title, description, image, imageAlt, badgeArray, date },
                  index,
                ) => (
                  <BlogCard
                    key={`${title} ${index}`}
                    title={title}
                    description={description}
                    badgeArray={badgeArray}
                    image={image}
                    imageAlt={imageAlt}
                    date={date}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
