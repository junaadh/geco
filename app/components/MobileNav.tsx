"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobNav = () => {
  const [active, setActive] = useState(false);
  const [loggedin, setLoggedIn] = useState(false);
  const pathname = usePathname();
  const NavItems = [
    { name: "Home", route: "/" },
    { name: "Shop", route: "/shop" },
    { name: "Events", route: "/events" },
    { name: "Cart", route: "/cart" },
  ];
  const RouteItems = loggedin
    ? [{ name: "Logout", route: "/logout" }]
    : [
        { name: "SignUp", route: "/signup" },
        { name: "Login", route: "/login" },
      ];
  const init = () => {
    if (localStorage.loggedin) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    init();
    window.addEventListener("resize", () => setActive(!resizeHandler));
    window.addEventListener("storage", (event) => {
      if (event.key == "loggedin") {
        init();
      }
    });

    return () => {
      window.removeEventListener("resize", () => setActive(!resizeHandler));
    };
  }),
    [];

  return (
    <main
      className={`flex flex-col w-screen min-h-max pb-8 z-10 justify-start sm:justify-center items-center ${
        !active ? "bg-white" : "bg-slate-100"
      }`}
    >
      <div className="flex w-full px-5 pt-5">
        <h1 className="font-title text-4xl">GECO</h1>
        <span className="w-full flex flex-grow"></span>
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          X
        </button>
      </div>
      {active && (
        <div className="sm:inline-flex flex">
          <span className="hidden sm:w-2/5 h-auto"></span>
          <ul className="flex flex-col">
            {NavItems.map((item, i) => {
              const active = pathname === item.route;
              return (
                <li key={item.name + i} className="flex w-24 m-5">
                  <Link
                    href={item.route}
                    className={`font-title text-center py-2 w-full rounded-full transition duration-300 border border-transparent ${
                      active ? "bg-white shadow" : "hover:border-gray-300"
                    }`}
                    onClick={() => setActive(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col sm:justify-center">
            {RouteItems.map((item, i) => (
              <li key={item.name + i} className="flex text-center m-4">
                <Link
                  href={item.route}
                  className="font-title rounded-full bg-white py-2 w-24 border hover:border-transparent hover:shadow-lg transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default MobNav;

const resizeHandler = (): boolean => {
  if (window.innerWidth >= 1024) {
    return true;
  } else {
    return false;
  }
};
