import { CaretRight } from "phosphor-react";

interface NewsProps {
  title: string;
  description: string;
  link: string;
}

export function NewsBanner(props: NewsProps) {
  return (
    <a
      href={props.link}
      className="w-[330px] h-[30px] rounded-xl z-10 bg-gradient-to-b from-[#272A41] to-[#33354A] hover:bg-[#33354A] border-2 border-[#33354A] transition-colors cursor-pointer fade-in animation-delay-4"
    >
      <div className="flex flex-row items-center justify-between h-full mx-3">
        <h1 className="text-xs text-[#EEEFFC]">{props.title}</h1>
        <CaretRight className="w-4 h-4 text-[#EEEFFC]" weight="bold" />
      </div>
    </a>
  );
}
