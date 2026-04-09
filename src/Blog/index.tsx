import BlogMoblieSection from "./moblieSection";
import CustomSearchBar from "./searchBar";
import { GlobalContext } from "../globalContext";
import { useContext } from "react";
import DesktopCard from "./desktopCard";
import "./blog.css";

// TODO: connect home blog section to this page
const Blog = () => {
  const { query, tag } = useContext(GlobalContext);

  const blogs = [
    {
      id: 1,
      title: "sdf",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      date: "03-12-26",
      badges: [
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial1",
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
          badgeTitle: "trial1",
          badgeImage: "/LinkedIn_logo.png",
        },
      ],
    },
    {
      id: 2,
      title: "222",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      date: "03-12-26",
      badges: [
        {
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
        {
          badgeTitle: "trial1",
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
          badgeTitle: "mouse",
          badgeImage: "/LinkedIn_logo.png",
        },
      ],
    },
    {
      id: 3,
      title: "333",
      description:
        "trial Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      image: "/LinkedIn_logo.png",
      imageAlt: "example",
      date: "03-12-26",
      badges: [
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

  const tagCategories = new Set<string>(["All"]);
  blogs.map(({ badges }) =>
    badges.map(({ badgeTitle }) => tagCategories.add(badgeTitle)),
  );

  const filteredData = blogs.filter(
    ({ description, title }) =>
      description.includes(query) || title.includes(query),
  );

  const filteredCat = filteredData.filter(({ badges }) =>
    tag === "All" ? true : badges.some(({ badgeTitle }) => badgeTitle === tag),
  );

  return (
    <section className="mx-auto pt-4 flex-1 bg-dark-black">
      <div className="bg-primary rounded-md mx-3 p-4 mb-5">
        <div>
          <h2 className="font-semibold text-2xl mb-2">Five Minute Fuel</h2>
          <p>
            Quick and simple bits of information for learning new tech things
            Quick and simple bits of information for learning new tech things
            Quick and simple bits of information for learning new tech things
          </p>
          <CustomSearchBar categories={[...tagCategories]} />
        </div>
        <div className="md:hidden">
          <BlogMoblieSection data={filteredCat} />
        </div>
      </div>
      <DesktopCard data={filteredCat} />
    </section>
  );
};

export default Blog;
