"use client";
import { useEffect } from "react";

import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdOutlineNotificationsActive, MdDarkMode } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import { TbSettingsCog } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";

import style from "./sidebar.module.css";

export default function Sidebar() {
  useEffect(() => {
    const theme =
      localStorage.getItem("theme") ?? localStorage.setItem("theme", "light");
    if (theme === "light") {
      document.documentElement.className = "light";
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme === "dark") {
      document.documentElement.className = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });

  const changeTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.className = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.className = "light";
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <aside className="fixed top-0 z-10 h-screen border-r border-gray-600 shadow-2xl">
      <div className="flex flex-col items-center w-16 py-8 space-y-8">
        <Link href="/">
          <img
            className="w-12 h-12 rounded-full"
            src="https://t4.ftcdn.net/jpg/04/50/97/71/360_F_450977120_iNKwznk27ghqhL58rvuh3w1xj1mPVHdy.jpg"
            alt=""
          />
        </Link>

        <Link href="/" className={style.Link + " " + style.LinkActive}>
          <AiOutlineHome size={35} />
        </Link>

        <Link href="/category" className={style.Link}>
          <BiCategory size={35} />
        </Link>

        <Link href="/" className={style.Link}>
          <HiOutlineUsers size={35} />
        </Link>

        <Link href="/" className={style.Link}>
          <SlBasket size={35} />
        </Link>

        <Link href="/" className={style.Link}>
          <LiaFileInvoiceSolid size={35} />
        </Link>

        <Link href="/" className={style.Link}>
          <MdOutlineNotificationsActive size={35} />
        </Link>

        <Link href="/" className={style.Link}>
          <TbSettingsCog size={35} />
        </Link>

        <Link href="/" className={style.Link}>
          <TbSettingsCog size={35} />
        </Link>

        <button className={style.Link} onClick={changeTheme} role="switch" id="switch-theme">
          <MdDarkMode size={35} />
        </button>
      </div>
    </aside>
  );
}
