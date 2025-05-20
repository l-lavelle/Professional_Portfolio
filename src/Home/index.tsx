import Header from "./header";
import SkillsSection from "./skills";
import HomePortfolio from "./portfolio";
import HomeBlog from "./blog";
import HomeContact from "./contact";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <SkillsSection />
      <HomePortfolio />
      <HomeBlog />
      <HomeContact />
    </section>
  );
};

export default Home;
