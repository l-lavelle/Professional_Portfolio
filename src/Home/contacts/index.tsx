import LinkedinLogo from "/LinkedIn_logo.png";
import HeaderLink from "../components/headerLink";
import InputSection from "../../contact/inputSection";

const HomeContact = () => {
  return (
    <section className="w-full bg-dark-black py-8 flex justify-center items-center">
      <div className="bg-primary rounded-lg px-3 py-5 w-full md:max-w-3xl xl:max-w-4xl mx-3 md:mx-0">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-5">
          <div className="sm:w-1/2 flex flex-col ">
            <img
              src={LinkedinLogo}
              className="hidden sm:block sm:max-w-[300px] md:max-w-[350px] mx-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col space-y-3 px-5 sm:px-0 sm:mx-2">
            <HeaderLink
              extraClasses={"text-light-black justify-self-center"}
              link={"/Contact"}
              title={"Get In Touch"}
            />
            <InputSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
