import ArrowRight from "../components/icons/ArrowRight.tsx";
import PlayIcon from "../components/icons/PlayIcon.tsx";

interface ProjectProps {
  title: string;
  anchor: string;
  link: string;
  description: string;
  backgroundImage: string;
  highlights: Array<{ title: string; description: string }>;
  buttonText: string;
}

//add fontawesome icons to this component here

export default function Project(props: ProjectProps) {
  return (
    <div
      id={props.anchor}
      className="w-full h-screen flex flex-col bg-black text-white justify-end bg-center bg-cover"
      style={{
        backgroundImage:
          `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url(${props.backgroundImage})`,
        height: "100vh",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="">
            <div className="mx-auto">
              <div className="mx-auto max-w-3xl lg:mx-0">
                <p className="mt-2 text-5xl sm:text-6xl font-bold tracking-tight text-white">
                  {props.title}
                </p>
                <p className="mt-3 text-xl leading-8 text-white">
                  {props.description}
                </p>
              </div>
              <div className="mx-auto mt-4 text-base leading-7 text-white lg:mx-0 lg:max-w-none">
                <div className="relative">
                  <div className="flex flex-col items-start">
                    {props.highlights
                      ? props.highlights.map((highlight) => (
                        <div className="flex flex-col sm:flex-row ">
                          <div className="flex flex-row items-center">
                            <ArrowRight size={16} color="white" />
                            <div className="inline font-semibold text-white ml-1">
                              {highlight.title}
                            </div>
                          </div>
                          <div className="inline sm:ml-2 ml-5">
                            {highlight.description}
                          </div>
                        </div>
                      ))
                      : () => {
                      }}
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-8 sm:mt-20 text-base leading-7 text-white lg:mx-0 lg:max-w-none">
                <div className="relative">
                  <a href={props.link}>
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-md border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <PlayIcon size={16} />
                      {props.buttonText}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
