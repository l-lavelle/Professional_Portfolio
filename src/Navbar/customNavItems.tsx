import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";

const CustomNavItems = ({
  linkClass,
  onClick,
}: {
  linkClass: string;
  onClick?: Dispatch<SetStateAction<boolean>> | undefined;
}) => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const navigation = [
    { name: "About", href: "/About" },
    { name: "Portfolio", href: "/Portfolio" },
    { name: "Blog", href: "/Blog" },
    { name: "Contact", href: "/Contact" },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <>
      {navigation.map(({ name, href }) => (
        <Link
          key={name}
          to={href}
          aria-current={name === active ? "page" : undefined}
          className={classNames(
            href === active
              ? "bg-light-black text-white"
              : "text-off-white hover:bg-light-black",
            linkClass
          )}
          onClick={() => {
            if (onClick) onClick(true);
          }}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

export default CustomNavItems;
