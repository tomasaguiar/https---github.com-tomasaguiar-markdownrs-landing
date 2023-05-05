interface AppEmbedProps {
  setAppLoaded?: React.Dispatch<React.SetStateAction<boolean>>;
  appLoaded: boolean;
}

export function AppEmbed({ appLoaded, setAppLoaded }: AppEmbedProps) {
  return (
    <div className="static flex items-center justify-center">
      <div className="absolute z-0 bg-[#13152b] rounded-full lg:w-[950px] lg:h-[550px] 2xl:w-[1350px] 2xl:h-[1000px] w-72 h-72 blur-3xl fade-in-heading animation-delay-5" />
      {appLoaded ? (
        <div className="z-10 w-full h-[720px] bg-red-500 fade-in-app-embed animation-delay-800" />
      ) : (
        <div className="z-10 w-full h-full lg:w-[80%] lg:h-[80%] fade-in-app-embed animation-delay-1200">
          <img
            src="../../src/assets/app-showcase.png"
            className="object-cover w-full h-full"
            alt="A Screenshot of markdown-rs app."
          />
        </div>
      )}
    </div>
  );
}
