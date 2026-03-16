import { Button, Label, Textarea } from "flowbite-react";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ContactInput from "./contactInput";
import type { RefInput } from "../types/custom";

const InputSection = () => {
  const inputRefs = useRef<RefInput>({});

  const [error, setError] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({ name: false, email: false, message: false });

  const validateEmail = () => {
    const emailInput = inputRefs.current["Email"];
    if (!emailInput) return false;
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isNull = (input: HTMLInputElement | HTMLTextAreaElement | null) => {
    if (!input) return true;
    return input.value === undefined || input.value === "" ? true : false;
  };

  const checkError = (check: boolean, inputRef: string) => {
    let executed;
    if (check) {
      setError((prev) => ({ ...prev, [inputRef]: true }));
      executed = true;
    } else {
      setError((prev) => ({ ...prev, [inputRef]: false }));
    }
    return executed;
  };

  const onSubmit = () => {
    const nameError = checkError(isNull(inputRefs.current["Name"]), "name");
    const emailError = checkError(!validateEmail(), "email");
    const messageError = checkError(
      isNull(inputRefs.current["Message"]),
      "message",
    );
    if (nameError || emailError || messageError) {
      toast.error("Fill Out All Fields", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch(`${window.location.origin}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputRefs.current["Name"]!.value,
          email: inputRefs.current["Email"]!.value,
          message: inputRefs.current["Message"]!.value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setError(() => ({ name: false, email: false, message: false }));
        toast.success("Message Sent", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        throw new Error("Failed to Send Message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to Send Message", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ContactInput
        title={"Name"}
        error={error.name}
        icon={UserIcon}
        inputRefs={inputRefs}
        onChange={() => setError((prev) => ({ ...prev, name: false }))}
      />
      <ContactInput
        title={"Email"}
        error={error.email}
        icon={EnvelopeIcon}
        inputRefs={inputRefs}
        onChange={() => {
          if (validateEmail()) {
            setError((prev) => ({ ...prev, email: false }));
          }
        }}
      />

      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="comment">Your Message *</Label>
        </div>
        <Textarea
          ref={(el) => {
            inputRefs.current["Message"] = el;
          }}
          id="message"
          onChange={() => setError((prev) => ({ ...prev, message: false }))}
          className={error.message ? "error-textarea" : "dark-textarea"}
          required
          rows={4}
          color={error.message ? "failure" : ""}
        />
      </div>

      <Button
        className="mt-2 max-w-[150px] self-end cursor-pointer bg-dark-black hover:bg-light-black"
        onClick={onSubmit}
      >
        Send
      </Button>
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
    </>
  );
};
export default InputSection;
