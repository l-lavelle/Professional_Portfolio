import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CustomNavItems = ({ linkClass }: { linkClass: string }) => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const navigation = [
    { name: "About", href: "/About" },
    { name: "Portfolio", href: "/Portfolio" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("");
    }
  }, [location]);

  return (
    <>
      {navigation.map(({ name, href }) => (
        <Link
          key={name}
          to={href}
          aria-current={name === active ? "page" : undefined}
          className={classNames(
            name === active
              ? "bg-light-black text-white"
              : "text-dark-black hover:bg-primary",
            linkClass
          )}
          onClick={() => setActive(name)}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

export default CustomNavItems;
