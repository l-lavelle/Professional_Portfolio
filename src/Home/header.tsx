import { Card } from "flowbite-react";
import GithubLogo from "/github_logo.png";
import LinkedinLogo from "/LinkedIn_logo.png";
import IconLink from "../components/iconLink";

const Header = () => {
  return (
    <section className="bg-primary-light flex flex-col w-full pt-3 pb-10 md:pt-8 md:pb-15">
      <div className="flex items-center justify-center mt-4">
        <Card className="max-w-6xl mx-2 bg-primary shadow-[0_10px_20px_rgba(0,0,0,0.6)] border-none">
          <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 w-full">
            <figure className="bg-red-300 w-50 hidden sm:block sm:max-w-100 sm:flex-1">
              <Card></Card>
            </figure>
            <Card className="glassy-background border-none w-full flex-1 space-y-0">
              <div className="flex flex-row">
                <figure className="bg-red-150 w-25 sm:hidden mr-2">
                  <Card></Card>
                </figure>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-dark-black m-0 leading-none">
                    Lauren Lavelle
                  </h1>
                  <h2 className="text-xl sm:text-xl text-dark-black mt-1 leading-none">
                    Software Engineer
                  </h2>
                </div>
              </div>
              <p className="text-dark-black">
                Crafting elegant, efficient code to solve complex problems.
                Passionate about building scalable solutions that drive
                innovation. Crafting elegant, efficient code to solve complex
                problems. Passionate about building scalable solutions that
                drive innovation.
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
