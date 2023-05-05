import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsThreeVertical } from "phosphor-react";

interface NavDropdownLinkProps {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export function NavDropdownLink(props: NavDropdownLinkProps) {
  return (
    <a
      key={props.name}
      href={props.href}
      className="w-full h-7 hover:bg-[#272A41] items-center flex rounded-md transition-colors duration-300"
    >
      <div className="flex flex-row items-center px-2 py-1">
        <div className="w-4 h-4 mr-2 text-gray-200">{props.icon}</div>
        <span className="text-[13px] text-gray-200">{props.name}</span>
      </div>
    </a>
  );
}

export const NavDropdownDivider = () => (
  <div className="w-full h-px bg-[#9f9f9f33]" />
);

interface NavDropdownProps {
  children: React.ReactNode;
}

export const NavDropdown = (props: NavDropdownProps) => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="relative">
          <button
            className="flex group justify-center items-center w-8 h-8 dark:hover:bg-[#ffffff10] hover:bg-[#ffffff51] hover:border-[1px] dark:border-[#ffffff21] border-[#ffffff58] rounded-md focus:outline-none ring-none"
            aria-label="Open options"
          >
            <DotsThreeVertical className="w-6 h-6 text-white" weight="bold" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className="absolute right-0 mt-2 z-50 w-48 h-62 bg-[#010313] border-[1px] border-[#2b2b30] rounded-xl backdrop-blur-xl !bg-opacity-70"
          aria-label="Dropdown menu"
        >
          <div className="mx-3 my-4 space-y-2">{props.children}</div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};
