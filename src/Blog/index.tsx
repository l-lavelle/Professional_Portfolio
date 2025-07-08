import MoblieSection from "./moblieCard";
import CustomSearchBar from "./searchBar";
import { QueryContext } from "./context";
import { useContext } from "react";
import DesktopCard from "./desktopCard";

// How to fix the search bar
// pull margins to top
// large screen - scroll on the left side for the blog pages
// allow codeblocks - is it possible?
const Blog = () => {
  const { query } = useContext(QueryContext);
  const tagCategories = ["trial", "trial1", "asdfjaksdlfj"];
  const data = [
    {
      id: 1,
      title: "sdf",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      img: "/LinkedIn_logo.png",
      badgeArray: [
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
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      img: "/LinkedIn_logo.png",
      badgeArray: [
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
          badgeTitle: "trial",
          badgeImage: "/LinkedIn_logo.png",
        },
      ],
    },
    {
      id: 3,
      title: "333",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      img: "/LinkedIn_logo.png",
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
  const filteredData = data.filter((item) => {
    return item.text.includes(query) || item.title.includes(query);
  });
  console.log("query", query);
  console.log(filteredData);
  return (
    <section className="mx-auto">
      <div className="bg-light-black rounded-md mx-3 p-3 mb-5 shadow-[3px_3px_4px_4px_var(--color-dark-black)]">
        <div>
          <BlogTitle />
          <CustomSearchBar categories={tagCategories} />
        </div>
        <MoblieSection data={filteredData} />
      </div>
      <DesktopCard data={filteredData} />
    </section>
  );
};

export default Blog;

const BlogTitle = () => (
  <>
    <h2 className="text-2xl text-off-white">Five Minute Fuel</h2>
    <p className="text-off-white">
      Quick and simple bits of information for learning new tech things Quick
      and simple bits of information for learning new tech things Quick and
      simple bits of information for learning new tech things
    </p>
  </>
);
