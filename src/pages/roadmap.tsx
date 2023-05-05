import { Helmet } from "react-helmet";
import { Github, Twitter } from "@icons-pack/react-simple-icons";

interface ButtonSmProps {
  title: string;
  link: string;
  children: string | React.ReactNode;
}

export function ButtonSm(props: ButtonSmProps) {
  return (
    <div className="w-[100px] h-[30px] rounded-xl bg-[#272A41] hover:bg-[#33354A] border-2 border-[#33354A] transition-colors cursor-pointer fade-in animation-delay-4">
      <a
        href={props.link}
        className="flex flex-row items-center justify-center h-full mx-1"
      >
        {props.children}
        <h1 className="text-xs text-[#EEEFFC]">{props.title}</h1>
      </a>
    </div>
  );
}

export function Roadmap() {
  return (
    <>
      <Helmet>
        <title>Roadmap - Markdown-rs</title>
        <meta
          name="description"
          content="Experience the future of the markdown editor."
        />
      </Helmet>
      <div className="w-full h-full">
        <div className="absolute top-0 w-full bg-[#11132D] h-[200px] rounded-b-full blur-3xl fade-in-heading animation-delay-3 z-0" />
        <div className="z-10 mt-28">
          <div className="grid mt-8 place-items-center">
            <h1 className="text-4xl font-extrabold text-white animation-delay-1 fade-in-heading">
              Roadmap & Changelog
            </h1>
            <p className="mt-4 text-gray-400 animation-delay-2 fade-in">
              Check out the latest updates and upcoming features.
            </p>
            <div className="mx-10 mt-16">
              <p className="max-w-xl text-center text-gray-400 animation-delay-4 fade-in">
                Due to markdown-rs being an embryonic prototype, most features
                are under heavy development and tend to be volatile. We advise
                you to check our Github or follow us on Twitter to stay up to
                date.
              </p>
            </div>
            <div className="flex flex-row mt-10 mb-16 space-x-6">
              <ButtonSm
                title="Github"
                link="https://github.com/tomasaguiar/markdown-rs"
                children={<Github className="w-4 h-4 text-[#EEEFFC] mr-2" />}
              />
              <ButtonSm
                title="Twitter"
                link=""
                children={<Twitter className="w-4 h-4 text-[#EEEFFC] mr-2" />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
