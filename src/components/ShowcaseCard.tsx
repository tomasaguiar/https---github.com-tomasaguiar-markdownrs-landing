export interface ShowcaseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  state?: React.ReactNode;
}

export function ShowcaseCard(props: ShowcaseCardProps) {
  return (
    <div
      key={props.title}
      className="z-10 bg-gradient-to-t from-[#0C0E1D] to-[#010313] w-full lg:w-[400px] h-[250px] rounded-md md:mb-0 mb-8 animation-delay-5 fade-in border-[#1c1e2e] border-[1px]"
    >
      <div className="mx-6 mt-6 group">
        <div className="flex flex-row items-center justify-between">
          <div className="w-full h-full text-[#787b9f] group-hover:text-[#c6c8db] transition-all duration-500">
            {props.icon}
          </div>
          <div className="w-full h-full">{props.state}</div>
        </div>
        <div>
          <h1 className="mt-3 font-bold text-white text-md">{props.title}</h1>
        </div>
        <div className="mt-2">
          <p className="text-gray-400">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
