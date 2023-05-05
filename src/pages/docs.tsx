import { Github, Twitter } from "@icons-pack/react-simple-icons";
import { Helmet } from "react-helmet";
import { ButtonSm } from "./roadmap";

export function Docs() {
  return (
    <>
      <Helmet>
        <title>Docs - Markdown-rs</title>
        <meta
          name="description"
          content="Experience the future of the markdown editor."
        />
      </Helmet>
      <div className="w-full h-full">
        <div className="absolute top-0 w-full bg-[#11132D] h-[200px] rounded-b-full blur-3xl fade-in-heading animation-delay-3 z-0" />
        <div className="z-10 my-28">
          <div className="grid mt-8 place-items-center">
            <h1 className="text-4xl font-extrabold text-white animation-delay-1 fade-in-heading">
              Documentation
            </h1>
            <p className="mt-4 text-gray-400 animation-delay-2 fade-in">
              Hello Developer! Our Docs are currently under construction.
            </p>
          </div>
          <div className="flex flex-row justify-center mt-10 mb-16 space-x-6">
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
    </>
  );
}
