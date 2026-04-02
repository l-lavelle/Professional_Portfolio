import MoblieSection from "./moblieCard";
import CustomSearchBar from "./searchBar";
import { GlobalContext } from "../globalContext";
import { useContext } from "react";
import DesktopCard from "./desktopCard";
import "./blog.css";
import CardFlip from "./text";

// Search Bar dark mode

const Blog = () => {
  const { query, tag } = useContext(GlobalContext);

  const data = [
    {
      id: 1,
      title: "sdf",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      img: "/LinkedIn_logo.png",
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
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      img: "/LinkedIn_logo.png",
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
      text: "trial Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from 45 BC, makingit over 2000 years old. Richard McClintock, a Latin professor atHampden-Sydney College in Virginia, looked up one of the more obscureLatin words, consectetur, from a Lorem Ipsum passage",
      img: "/LinkedIn_logo.png",
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
  data.map(({ badges }) =>
    badges.map(({ badgeTitle }) => tagCategories.add(badgeTitle)),
  );

  const filteredData = data.filter(({ text, title }) => {
    return text.includes(query) || title.includes(query);
  });
  const filteredCat = filteredData.filter(({ badges }) => {
    if (tag === "All") {
      return true;
    } else {
      return badges.some(({ badgeTitle }) => badgeTitle === tag);
    }
  });

  return (
    <section className="mx-auto pt-4 flex-1 bg-dark-black">
      {/* <CardFlip /> */}
      {/* <div className="bg-light-black rounded-md mx-3 p-3 mb-5 shadow-[3px_3px_4px_4px_var(--color-dark-black)]">
        <div>
          <h2 className="text-2xl text-off-white">Five Minute Fuel</h2>

          <p className="text-off-white">
            Quick and simple bits of information for learning new tech things
            Quick and simple bits of information for learning new tech things
            Quick and simple bits of information for learning new tech things
          </p>
          <CustomSearchBar categories={[...tagCategories]} />
        </div>
        <MoblieSection data={filteredCat} />
      </div>
      <DesktopCard data={filteredCat} /> */}
    </section>
  );
};

export default Blog;
