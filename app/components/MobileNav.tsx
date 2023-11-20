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
    const TOGGLE = document.querySelector("button");
    const INPUT = document.querySelector("input");
    window.addEventListener("resize", () => {
      setActive(!resizeHandler);
      TOGGLE?.setAttribute(
        "aria-pressed",
        TOGGLE?.matches("[aria-pressed=true]") ? "false" : "false",
      );
      TOGGLE?.classList.toggle("unset");
    });
    window.addEventListener("storage", (event) => {
      if (event.key == "loggedin") {
        init();
      }
    });

    const HANDLE_TOGGLE = () => {
      TOGGLE?.setAttribute(
        "aria-pressed",
        TOGGLE?.matches("[aria-pressed=true]") ? "false" : "true",
      );
    };

    TOGGLE?.addEventListener("click", HANDLE_TOGGLE);

    const APPLY_TRANSFORM_BOX = () => {
      TOGGLE?.classList.toggle("unset");
    };

    INPUT?.addEventListener("change", APPLY_TRANSFORM_BOX);

    return () => {
      window.removeEventListener("resize", () => {
        setActive(!resizeHandler);
        HANDLE_TOGGLE;
        APPLY_TRANSFORM_BOX;
      });
      TOGGLE?.removeEventListener("click", HANDLE_TOGGLE);
      INPUT?.removeEventListener("change", APPLY_TRANSFORM_BOX);
    };
  }),
    [];

  return (
    <main
      className={`flex flex-col w-screen min-h-max pb-8 z-10 justify-start backdrop-blur sm:justify-center items-center ${
        !active ? "bg-white" : "bg-slate-100"
      }`}
    >
      <div className="flex w-full px-5 pt-5 bg-transparent backdrop-blur border border-transparent">
        <h1 className="font-title text-4xl">GECO</h1>
        <span className="w-full flex flex-grow"></span>
        <div className="nav-button-main lg:hidden">
          <div className="controls">
            <label htmlFor="box" className="hidden"></label>
            <input type="checkbox" id="box" defaultChecked className="hidden" />
          </div>
          <button
            className="nav-button bg-white"
            onClick={() => setActive(!active)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect
                width="18"
                height="1.5"
                fill="red"
                ry="0.75"
                x="3"
                y="6.25"
              />
              <rect
                width="18"
                height="1.5"
                fill="red"
                ry="0.75"
                x="3"
                y="11.25"
              />
              <rect
                width="18"
                height="1.5"
                fill="red"
                ry="0.75"
                x="3"
                y="16.25"
              />
            </svg>
          </button>
        </div>
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
