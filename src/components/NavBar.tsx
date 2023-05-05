import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { FinnTheHuman, Users, Book, Desktop } from "phosphor-react";
import { Discord, Github } from "@icons-pack/react-simple-icons";
import { NavDropdown, NavDropdownLink, NavDropdownDivider } from "./Dropdown";
import { getWindow } from "../utils";
import { Logo } from "./NavLogo";

interface LinkProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
  divider?: React.ReactNode;
}

interface NavBarProps {
  active?: string;
}

function NavLink(props: { name: LinkProps["name"]; href: LinkProps["href"] }) {
  return (
    <a
      className="text-gray-400 transition-colors duration-200 hover:text-white"
      key={props.href}
      href={props.href}
    >
      {props.name}
    </a>
  );
}

export function NavBar(Props: NavBarProps) {
  const [isAtTop, setIsAtTop] = useState(true);
  const window = getWindow();

  function onScroll() {
    if ((getWindow()?.pageYOffset || 0) < 20) setIsAtTop(true);
    else if (isAtTop) setIsAtTop(false);
  }

  useEffect(() => {
    if (!window) return;
    setTimeout(onScroll, 0);
    getWindow()?.addEventListener("scroll", onScroll);
    return () => getWindow()?.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const links = [
    { name: "Roadmap", href: "/roadmap", icon: <FinnTheHuman weight="fill" /> },
    // { name: "FAQ", href: "/faq" },
    { name: "Team", href: "/team", icon: <Users weight="fill" /> },
    // { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs", icon: <Book weight="fill" /> },
    { name: "Careers", href: "/careers", icon: <Desktop weight="fill" /> },
  ] as LinkProps[];

  return (
    <nav
      className={clsx(
        "fixed flex w-full h-16 z-[55] transition" +
          (isAtTop
            ? "bg-transparent"
            : "bg-gray-700 bg-opacity-80 backdrop-blur border-b-[1px] border-[#9f9f9f33]")
      )}
    >
      <div className="flex items-center justify-between w-full mx-10 lg:mx-10">
        <div className="flex flex-row items-center space-x-2 w-36">
          {/* <FinnTheHuman className="w-5 h-5 text-white" weight="fill" /> */}
          <div className="w-5 h-5">
            <Logo />
          </div>
          <a href="/" className="font-bold text-white">
            markdown-rs
          </a>
        </div>
        <div className="hidden m-auto lg:block ">
          <div className="flex items-center space-x-10">
            {links.map((link) => {
              return (
                <NavLink name={link.name} href={link.href} key={link.href} />
              );
            })}
          </div>
        </div>
        <div className="justify-end hidden sm:flex w-36">
          <a
            className="w-5 h-5 text-white"
            href="https://github.com/tomasaguiar/markdown-rs"
          >
            <Github />
          </a>
        </div>
        <div className="flex sm:hidden">
          <NavDropdown>
            <NavDropdownLink
              name="Repository"
              icon={<Github className="w-4 h-4" />}
              href="https://github.com/tomasaguiar/markdown-rs"
            />
            <NavDropdownLink
              name="Join Discord"
              icon={<Discord className="w-4 h-4" />}
              href="https://discord.gg/x7HK42De"
            />
            <NavDropdownDivider />
            {links.map((link) => {
              return (
                <>
                  <NavDropdownLink
                    name={link.name}
                    icon={link.icon}
                    href={link.href}
                    key={link.href}
                  />
                </>
              );
            })}
          </NavDropdown>
        </div>
      </div>
    </nav>
  );
}
