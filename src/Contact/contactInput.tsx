import { Label, TextInput } from "flowbite-react";
import { type FC, type RefObject } from "react";
import type { RefInput } from "../types/custom";

const ContactInput = ({
  title,
  error,
  icon,
  inputRefs,
  onChange,
}: {
  title: string;
  error: boolean;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  inputRefs: RefObject<RefInput>;
  onChange: () => void;
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
      onChange={() => onChange()}
    />
  </div>
);

export default ContactInput;
