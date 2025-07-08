import LinkedinLogo from "/LinkedIn_logo.png";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRef, useState, type FC, type RefObject } from "react";
import { ToastContainer, toast } from "react-toastify";
import HeaderLink from "./homeComponents/headerLink";

const HomeContact = () => {
  const inputRefs = useRef<{
    [key: string]: HTMLInputElement | HTMLTextAreaElement | null;
  }>({});
  const [error, setError] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({ name: false, email: false, message: false });

  const validateEmail = () => {
    const emailInput = inputRefs.current["Email"];
    if (!emailInput) return;
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isNull = (input: HTMLInputElement | HTMLTextAreaElement | null) => {
    if (!input) return;
    return input.value === "" ? true : false;
  };

  const checkError = (check: boolean | undefined, inputRef: string) => {
    let executed;
    if (check) {
      setError((prev) => ({ ...prev, [inputRef]: true }));
      executed = true;
    } else {
      setError((prev) => ({ ...prev, [inputRef]: false }));
    }
    return executed;
  };

  const submitMessage = () => {
    const nameCheck = checkError(isNull(inputRefs.current["Name"]), "name");
    const emailCheck = checkError(!validateEmail(), "email");
    const messageCheck = checkError(
      isNull(inputRefs.current["Message"]),
      "message"
    );
    if (nameCheck || emailCheck || messageCheck) {
      toast.error("Unable to Send Message", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      setError(() => ({ name: false, email: false, message: false }));
      toast.success("Message Sent", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <section className="w-full bg-dark-black py-8 flex justify-center items-center">
      <div className="bg-primary rounded-lg px-3 py-5 w-full md:max-w-3xl xl:max-w-4xl mx-3 md:mx-0 shadow-[2px_3px_4px_3px_var(--color-box-shadow-dark)]">
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
            <CustomInput
              title={"Name"}
              error={error.name}
              icon={UserIcon}
              inputRefs={inputRefs}
            />
            <CustomInput
              title={"Email"}
              error={error.email}
              icon={EnvelopeIcon}
              inputRefs={inputRefs}
            />

            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="comment">Your Message *</Label>
              </div>
              <Textarea
                ref={(el) => {
                  inputRefs.current["Message"] = el;
                }}
                id="comment"
                className={error.message ? "error-textarea" : "dark-textarea"}
                required
                rows={4}
                color={error.message ? "failure" : ""}
              />
            </div>

            <Button
              className="mt-2 max-w-[150px] self-end cursor-pointer bg-dark-black hover:bg-light-black"
              onClick={submitMessage}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default HomeContact;

const CustomInput = ({
  title,
  error,
  icon,
  inputRefs,
}: {
  title: string;
  error: boolean;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  inputRefs: RefObject<{
    [key: string]: HTMLInputElement | HTMLTextAreaElement | null;
  }>;
}) => (
  <div className="w-full">
    <div className="mb-2 block">
      <Label>{title} *</Label>
    </div>
    <TextInput
      ref={(el) => {
        inputRefs.current[`${title}`] = el;
      }}
      id={title}
      type={title}
      className={error ? "error-input" : "dark-input"}
      icon={icon}
      color={error ? "failure" : ""}
      required
    />
  </div>
);
