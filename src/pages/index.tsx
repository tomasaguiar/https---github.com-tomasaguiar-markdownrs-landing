import React from "react";
import { ShowcaseCard, ShowcaseCardProps } from "../components/ShowcaseCard";
import { Gauge, UsersThree, TextHOne } from "phosphor-react";
import { NewsBanner } from "../components/NewsBanner";
import { Helmet } from "react-helmet";
import { AppEmbed } from "../components/AppEmbed";

const ShowcaseCardItems = [
  {
    icon: <Gauge size={24} />,
    title: "Open Source and Fast",
    description: "Buckle up, it's Rust fast!",
  },
  {
    icon: <UsersThree size={24} />,
    title: "Collaborative Work",
    description:
      "The first markdown editor that supports collaborative work, with an ease.",
  },
  {
    icon: <TextHOne size={24} />,
    title: "Markdown, but simpler",
    description:
      "Finding new ways to make markdown easier to use, with a simple and intuitive interface.",
  },
] as ShowcaseCardProps[];

export function Home() {
  const [appLoaded, setAppLoaded] = React.useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>markdown-rs</title>
        <meta
          name="description"
          content="Experience the future of the markdown editor."
        />
      </Helmet>
      <div className="grid mx-10 mt-28 place-items-center">
        <div className="absolute top-0 w-full bg-[#11132D] h-[350px] rounded-b-full blur-3xl fade-in-heading animation-delay-3 z-0" />
        <NewsBanner
          title="Welcome open source contributors!"
          description="We have added a new feature to the app."
          link="https://github.com/tomasaguiar/markdown-rs"
        />
        <div className="grid mt-8 place-items-center">
          <h1 className="text-6xl font-extrabold text-white animation-delay-1 fade-in-heading">
            the markdown editor of the future
          </h1>
          <p className="mt-4 text-gray-400 animation-delay-2 fade-in">
            Experience the future of collaborative markdown editing with the
            blazing speed of Rust and Tauri.
          </p>
        </div>
      </div>
      <div className="my-28 lg:mx-[150px] mx-10">
        <AppEmbed appLoaded={appLoaded} />
      </div>
      <div className="flex flex-col items-center justify-center mx-10">
        <p className="text-4xl font-extrabold text-white ">
          Way productive, way simple...
        </p>
        <p className="my-4 text-gray-400">
          Experience the future of collaborative markdown editing with the
          blazing speed of Rust and Tauri.
        </p>
        <div className="flex flex-col justify-center mt-20 md:flex-row md:space-x-12 mb-36 ">
          {ShowcaseCardItems.map((item) => (
            <ShowcaseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
