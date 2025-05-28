"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const navItems = [
    { id: 1, title: "หน้าหลัก", path: "/" },
    { id: 2, title: "เกี่ยวกับเรา", path: "/about" },
    { id: 3, title: "บริการ", path: "/services" },
    { id: 4, title: "ผลงาน", path: "/portfolio" },
    { id: 5, title: "บล็อก", path: "/blog" },
    { id: 6, title: "ติดต่อเรา", path: "/contact" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-40 flex w-full items-center bg-white transition ${
        sticky
          ? "shadow-sticky backdrop-blur-sm bg-white/80"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link
              href="/"
              className="block w-full py-5"
            >
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo-white.svg"
                alt="Logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                {navbarOpen ? (
                  <FaTimes className="h-6 w-6 text-black" />
                ) : (
                  <FaBars className="h-6 w-6 text-black" />
                )}
              </button>
              <nav
                className={`absolute right-4 top-[60px] w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all lg:static lg:flex lg:w-full lg:max-w-full lg:items-center lg:justify-end lg:bg-transparent lg:p-0 lg:shadow-none ${
                  navbarOpen ? "block" : "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  {navItems.map((item) => (
                    <li key={item.id} className="group relative">
                      <Link
                        href={item.path}
                        className="flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-6 lg:py-6"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
              <Link
                href="/signin"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
