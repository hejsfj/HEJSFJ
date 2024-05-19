import Project from "../islands/Project.tsx";
import ArrowRight from "../components/icons/ArrowRight.tsx";
import WhatsAppIcon from "../components/icons/WhatsAppIcon.tsx";
import SunIcon from "../components/icons/SunIcon.tsx";
import CameraIcon from "../components/icons/CameraIcon.tsx";
import MobileIcon from "../components/icons/MobileIcon.tsx";
import PlayIcon from "../components/icons/PlayIcon.tsx";
import Header from "../components/Header.tsx";

//define an array of projects here based on the Project.tsx component above

const projects = [
  {
    title: "Fred",
    anchor: "fred",
    link: "https://apps.apple.com/de/app/fred-achieve-your-goals/id6478763884?l=en-GB",
    description:
      "Fred is your dedicated app to achieve your goals with actionable steps.",
    backgroundImage: "/img/fred.jpg",
    icon: "sun",
    highlights: [
      {
        title: "iOS App.",
        description: "Developed in SWIFTUI & SWIFT based on Supabase",
      },
      {
        title: "AI powered best practice goals.",
        description: "Fred's goal gallery with best practice goals is powered by ChatGPT",
      },
    ],
    buttonText: "Download Now",
  },
  {
    title: "Sunny Days Ahead",
    anchor: "sun",
    link: "https://instagram.com/hejsfj",
    description:
        "Ever wondered, whats the best and sunniest location for your next vacation? With this app you'll explore the sunniest places around the world.",
    backgroundImage: "/img/sunny-days-ahead.jpg",
    icon: "sun",
    highlights: [
      {
        title: "iOS App.",
        description: "Developed in SWIFT for the sun-lovers of tomorrow.",
      },
      {
        title: "Coming soon.",
        description: "Follow the journey on Instagram.",
      },
    ],
    buttonText: "Follow Along",
  },
  {
    title: "Mateo",
    anchor: "mateo",
    link: "https://hellomateo.de",
    description:
      "Mateo is an all-in-one messaging suite for small and medium sized businesses in Germany. We have created one of the first WhatsApp Business API solutions in Germany.",
    backgroundImage: "/img/mateo.jpg",
    icon: "whatsapp",
    highlights: [
      {
        title: "WhatsApp for SMBs.",
        description:
          "One of the first all-in-one messaging suites for SMBs in Germany.",
      },
      {
        title: "Product Market Fit.",
        description: "Scaled the company to 140+ clients.",
      },
      {
        title: "Interstellar Team.",
        description: "Build an interdisciplinary team of 10.",
      },
    ],
    buttonText: "Visit the Company",
  },
  {
    title: "HEYANNA",
    anchor: "heyanna",
    link: "https://www.producthunt.com/products/heyanna",
    description:
      "The first mobile app my co-founder Timo and I developed in early 2019. We established the first people focused co-living solution.",
    backgroundImage: "/img/heyanna.jpg",
    icon: "mobile",
    highlights: [
      {
        title: "iOS & Android App.",
        description: "Launched an iOS & Android App",
      },
      {
        title: "Customer Centricity.",
        description:
          "Reached 200+ weekly active users and 5 star app store raiting.",
      },
      {
        title: "First VC funding.",
        description: "Got funding from a pre-seed VC.",
      },
    ],
    buttonText: "View on ProductHunt",
  },
  {
    title: "AOSFJ",
    anchor: "aosfj",
    link: "http://unsplash.com/hejsfj",
    description:
      "Moments and Adventures I captured with my camera.",
    backgroundImage: "/img/aosfj.jpg",
    icon: "camera",
    highlights: [
      {
        title: "Licence free photos.",
        description:
          "Explore my adventures and download those photos for whatever you make.",
      },
    ],
    buttonText: "Visit Unsplash",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <div
        className="w-full h-screen flex flex-col bg-black text-white justify-end bg-center bg-cover"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)), url(./img/sebastian-frederik-jacobsen.jpg)`,
          height: "100vh",
        }}
      >
        <Header />

        <div className="w-full mx-auto flex items-center justify-between max-w-7xl p-6 lg:px-8 pb-10 sm:pb-20">


<div>
                <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Sebastian Frederik Jacobsen
                </p>
                <p className="mt-2 sm:mt-3 text-lg sm:text-xl leading-2 sm:leading-8 text-white">
                  Hej, I am glad to meet you here. I'm a product owner and optimist living in Berlin. I believe in a
                  better tomorrow by creating digital products and experience with a lasting impact.
                </p>




          <div className="flex sm:hidden mx-auto mt-8 sm:mt-20 text-base leading-7 text-white lg:mx-0 lg:max-w-none">
            <div className="relative">
              <a href="#fred">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-md border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <PlayIcon size={16} />
                  Explore what I did so far
                </button>
              </a>
            </div>
          </div>

          <div className="hidden sm:flex mt-2 sm:mt-6 text-xl leading-8 text-white font-bold">
            Some things I did so far
          </div>
          <div className="hidden sm:flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-4 mt-2">
            {projects.map((project) => (
              <a href={`#${project.anchor}`}>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-md border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {project.icon === "whatsapp"
                    ? <WhatsAppIcon size={16} />
                    : project.icon === "sun"
                    ? <SunIcon size={16} />
                    : project.icon === "camera"
                    ? <CameraIcon size={16} />
                    : project.icon === "mobile"
                    ? <MobileIcon size={16} />
                    : () => {
                    }}

                  {project.title}
                </button>
              </a>
            ))}
          </div>
</div>
          <div></div>
        </div>
      </div>

      <div>
        {projects.map((project) => (
          <Project
            title={project.title}
            link={project.link}
            description={project.description}
            backgroundImage={project.backgroundImage}
            highlights={project.highlights}
            anchor={project.anchor}
            buttonText={project.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
