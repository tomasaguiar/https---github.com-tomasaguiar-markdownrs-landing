import { Discord, Github } from "@icons-pack/react-simple-icons";
import { FinnTheHuman } from "phosphor-react";

function FooterLink(props: {
  children: string | JSX.Element;
  link: string;
  blank?: boolean;
}) {
  return (
    <a
      href={props.link}
      target={props.blank ? "_blank" : ""}
      className="text-sm text-gray-500 transition-colors duration-200 hover:text-white"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full h-full lg:h-[350px] bg-[#000212] border-t-[1px] border-[#dcdcdc10]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex flex-row justify-between h-full mt-10 ml-10 lg:flex-col 2xl:ml-80 lg:mt-0">
          <div className="lg:mt-10">
            <div className="flex flex-row items-center w-[300px]">
              <FinnTheHuman className="w-5 h-5 mr-2 text-white" weight="fill" />
              <h1 className="text-lg font-bold text-white">markdown-rs</h1>
            </div>
            <p className="mt-1 text-sm text-gray-400">
              &copy; Copyright 2022 Markdown-rs Technology Inc.
            </p>
          </div>
          <div className="flex items-center mb-10 mr-10 space-x-6 text-gray-400 lg:mr-0">
            <a href="https://discord.gg/x7HK42De">
              <Discord className="w-5 h-5 transition-colors hover:text-white" />
            </a>
            <a href="https://github.com/tomasaguiar/markdown-rs">
              <Github className="w-5 h-5 transition-colors hover:text-white" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-around w-full my-10 ml-10 mr-10 space-y-8 lg:space-y-0 lg:ml-0 lg:flex-row 2xl:mr-80">
          <div>
            <h3 className="mb-4 text-gray-300">Product</h3>
            <div className="flex flex-col col-span-1 space-y-4">
              <FooterLink link="" blank={false} children="Features" />
              <FooterLink link="" blank={false} children="Integrations" />
              <FooterLink link="/roadmap" blank={false} children="Changelog" />
              <FooterLink link="" blank={false} children="Docs" />
              {/* <FooterLink link="" blank={false} children="Download" /> */}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-gray-300">Company</h3>
            <div className="flex flex-col col-span-1 space-y-4">
              <FooterLink link="" blank={false} children="About us" />
              <FooterLink link="" blank={false} children="Blog" />
              <FooterLink link="" blank={false} children="Careers" />
              {/* <FooterLink link="" blank={false} children="Customers" /> */}
              {/* <FooterLink link="" blank={false} children="Brand" /> */}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-gray-300">Resources</h3>
            <div className="flex flex-col col-span-1 space-y-4">
              <FooterLink
                link="https://discord.gg/x7HK42De"
                blank={false}
                children="Community"
              />
              <FooterLink
                link="
                mailto:aguiarhcode@gmail.com
              "
                blank={false}
                children="Contact"
              />
              {/* <FooterLink link="" blank={false} children="DPA" /> */}
              {/* <FooterLink link="" blank={false} children="Terms of service" /> */}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-gray-300">Developers</h3>
            <div className="flex flex-col col-span-1 space-y-4">
              <FooterLink link="" blank={false} children="API" />
              <FooterLink link="" blank={false} children="Status" />
              <FooterLink
                link="https://github.com/tomasaguiar/markdown-rs"
                blank={false}
                children="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
