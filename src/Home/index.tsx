import Header from "./header";
import HomePortfolio from "./portfolio/index";
import HomeBlog from "./blog/index";
import HomeContact from "./contacts/index";
import SkillsSection from "./skills";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <HomePortfolio />
      <SkillsSection />
      <HomeBlog />
      <HomeContact />
    </section>
  );
};

export default Home;
