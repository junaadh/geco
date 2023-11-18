"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobNav from "./MobileNav";
import { useEffect, useState } from "react";

export default function Header() {
  const [loggedin, setloggedin] = useState(false);
  const init = () => {
    if (localStorage.loggedin) {
      setloggedin(true);
    } else {
      setloggedin(false);
    }
  };
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Events", href: "/events" },
    { name: "Cart", href: "/cart" },
  ];
  const routeItems = loggedin
    ? [{ name: "Logout", href: "/logout" }]
    : [
        { name: "Sign Up", href: "/signup" },
        { name: "Login", href: "/login" },
      ];
  useEffect(() => {
    // init;
    setInterval(init, 100);
  }, []);

  return (
    <header>
      <div className="fixed top-0 z-30 flex lg:hidden bg-red-500 w-full">
        <MobNav />
      </div>
      <div className="fixed z-30 hidden lg:grid grid-cols-3 justify-items-center place-items-center h-24 w-full">
        <div />
        <nav>
          <ul className="grid grid-cols-4 relative gap-1 bg-gray-200/50 backdrop-blur p-1 rounded-full">
            {navItems.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li key={item.name + i} className="flex w-24">
                  <Link
                    href={item.href}
                    className={`font-title text-center py-2 w-full rounded-full transition duration-300 border border-transparent ${
                      active ? "bg-white shadow" : "hover:border-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="flex flex-row gap-4">
          {routeItems.map((item, i) => (
            <li key={item.name + i} className="flex text-center">
              <Link
                href={item.href}
                className="font-title rounded-full bg-white py-2 w-24 border hover:border-transparent hover:shadow-lg transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
