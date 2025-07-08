import { Card } from "flowbite-react";
import GithubLogo from "/github_logo.png";
import LinkedinLogo from "/LinkedIn_logo.png";

const Header = () => {
  return (
    <section className="flex flex-col w-full relative">
      <div className="bg-dark-black w-full h-50 absolute z-[-1]"></div>
      <div className="flex items-center justify-center mt-4">
        <Card className="max-w-6xl mx-2 bg-dark-black border-light-black border-2">
          <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 w-full">
            <figure className="bg-red-300 w-50 hidden sm:block sm:max-w-100 sm:flex-1">
              <Card></Card>
            </figure>
            <Card className="bg-light-black border-none w-full flex-1 space-y-0">
              <div className="flex flex-row">
                <figure className="bg-red-150 w-25 sm:hidden mr-2">
                  <Card></Card>
                </figure>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-off-white m-0 leading-none">
                    Lauren Lavelle
                  </h1>
                  <h2 className="text-xl sm:text-xl text-off-white mt-1 leading-none">
                    Software Engineer
                  </h2>
                </div>
              </div>
              <p className="text-off-white">
                Crafting elegant, efficient code to solve complex problems.
                Passionate about building scalable solutions that drive
                innovation.
              </p>
              <div className="flex">
                <IconLink
                  href={"https://github.com/l-lavelle"}
                  img={GithubLogo}
                />
                <IconLink
                  href={"https://www.linkedin.com/in/lauren-lavelle/"}
                  img={LinkedinLogo}
                />
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Header;

const IconLink = ({ href, img }: { href: string; img: string }) => (
  <div className="bg-off-white border-2 border-off-white p-1 rounded-sm mr-2">
    <a href={href} target="_blank">
      <img src={img} width={30} />
    </a>
  </div>
);
