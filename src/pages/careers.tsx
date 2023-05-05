import { Helmet } from "react-helmet";
import { ButtonSm } from "./roadmap";
import { Github } from "@icons-pack/react-simple-icons";

export function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers - Markdown-rs</title>
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
              Join the Future of Markdown
            </h1>
            <p className="max-w-2xl mt-4 mb-6 text-center text-gray-400 animation-delay-2 fade-in">
              At the moment, all support from open source contributors is
              welcome, note that our documentation is still in progress, aswell
              as the concept of the project.
            </p>
            <ButtonSm
              title="Github"
              link="https://github.com/tomasaguiar/markdown-rs"
              children={<Github className="w-4 h-4 text-[#EEEFFC] mr-2" />}
            />
            {/* <p className="mt-4 text-gray-400 animation-delay-2 fade-in">
              We are looking for people who are passionate about markdown.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
