import LinkedinLogo from "/LinkedIn_logo.png";
import InputSection from "./inputSection";
import IconLink from "../components/iconLink";

const Contact = () => {
  return (
    <div className="flex-1 bg-dark-black">
      <section className="py-8 flex justify-center items-center">
        <div className="bg-primary-light rounded-lg px-3 py-5 w-full md:max-w-3xl xl:max-w-4xl mx-3 md:mx-0">
          <div className="pl-4 pb-3">
            <h1 className="font-semibold text-2xl mb-2">Get In Touch</h1>
            <p>
              Nice Message: It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch justify-center sm:space-x-5">
            <div className="sm:w-1/2 hidden sm:block pl-5">
              <img src={LinkedinLogo} className="min-w-full sm:h-[290px]" />
              <div className="flex space-x-2 mt-3">
                <IconLink
                  href={"https://github.com/l-lavelle"}
                  img={LinkedinLogo}
                />
                <IconLink
                  href={"https://www.linkedin.com/in/lauren-lavelle/"}
                  img={LinkedinLogo}
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col space-y-3 px-5 sm:px-0 sm:mx-2">
                <InputSection />
              </div>
            </div>
            <div className="flex sm:hidden pl-5 -mt-14 space-x-2">
              <IconLink
                href={"https://github.com/l-lavelle"}
                img={LinkedinLogo}
              />
              <IconLink
                href={"https://www.linkedin.com/in/lauren-lavelle/"}
                img={LinkedinLogo}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
