import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div
      class="bg-black bg-fixed bg-center bg-cover"
      style="background-image: url('/img/sfj.png'); height: 100vh"
    >
      <header class="absolute inset-x-0 top-0 z-50">
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Sebastian Frederik Jacobsen</span>
              <img
                class="h-6 w-auto"
                src="/logo.svg"
                alt=""
              >
              </img>
            </a>
          </div>

          <div class=" lg:flex lg:flex-1 lg:justify-end">
            <div class="flex justify-left items-center space-x-5">
              <a
                href="https://de.linkedin.com/in/hejsfj"
                class="text-white hover:text-white"
              >
                <span class="sr-only">LinkedIn</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/hejsfj"
                class="text-white hover:text-white"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/playlist/5ZsAoxySgvnssdL8TbEqw2?si=H8XJJPngSw2dDJu-TOhXBQ&utm_medium=share&utm_source=linktree"
                class="text-white hover:text-white"
              >
                <span class="sr-only">Spotify</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Spotify</title>
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
              <a
                href="https://github.com/hejsfj"
                class="text-white hover:text-white"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.pinterest.de/HEJSFJ/"
                class="text-white hover:text-white"
              >
                <span class="sr-only">Pinterest</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Pinterest</title>
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              <a
                href="https://techvibes.substack.com/embed"
                class="text-white hover:text-white"
              >
                <span class="sr-only">Substack</span>
                <svg
                  class="h-4 w-4"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Substack</title>
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
              <a
                href="/imprint"
                class="text-sm font-semibold leading-6 text-white"
              >
                Imprint<span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main class="h-full w-full overflow-scroll">
        <div class="flex flex-col justify-top md:justify-center h-full">
          <div class="flex flex-row justify-center">
            <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div class="w-full lg:shrink-0 ">
                  <h1 class="text-5xl text-white sm:text-5xl font-body uppercase tracking-wide font-bold">
                    Sebastian Frederik Jacobsen
                  </h1>
                  <div class="flex flex-row">
                    <p class="relative mt-3 text-2xl leading-8 text-white md:max-w-4xl font-body">
                      Hej, I am glad to meet you here. I'm a product manager at
                      CARIAD, maker, creator & optimist living in Berlin. I
                      believe in a better tomorrow by creating digital products
                      and experience with a lasting impact.
                    </p>
                  </div>
                  <div class="mt-10 w-full flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-5">
                    <a href="https://aosfj.com" target="_blank">
                      <div class="h-30 w-full md:h-72 md:w-60 border-solid border-white border rounded-md">
                        <div class="flex flex-col justify-between h-full p-6">
                          <div class="grow">
                            <div class="relative text-2xl leading-8 text-white sm:max-w-md lg:max-w-none font-body font-bold">
                              AOSFJ
                            </div>
                            <div class="relative text-regular text-white sm:max-w-md lg:max-w-none font-body font-normal">
                              Download some of my licence free photos
                            </div>
                          </div>
                          <div class="hidden md:flex flex-none relative text-regular text-white sm:max-w-md lg:max-w-none font-body font-normal text-right hover:underline">
                            Visit »
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://techvibes.substack.com/embed"
                      target="_blank"
                    >
                      <div class="h-30 w-full md:h-72 md:w-60  border-solid border-white border rounded-md">
                        <div class="flex flex-col justify-between  h-full p-6">
                          <div class="grow">
                            <div class="relative text-2xl leading-8 text-white sm:max-w-md lg:max-w-none font-body font-bold">
                              Tech Vibes
                            </div>
                            <div class="relative text-regular text-white sm:max-w-md lg:max-w-none font-body font-normal">
                              My monthly newsletter for all fellow tech bros &
                              tech gals.
                            </div>
                          </div>
                          <div class="hidden md:flex flex-none relative text-regular text-white sm:max-w-md lg:max-w-none font-body font-normal text-right hover:underline">
                            Subscribe »
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://cariad.technology" target="_blank">
                      <div class="h-30 w-full md:h-72 md:w-60 border-solid border-white border rounded-md">
                        <div class="flex flex-col justify-between  h-full p-6">
                          <div class="grow">
                            <div class="relative text-2xl leading-8 text-white sm:max-w-md lg:max-w-none font-body font-bold">
                              CARIAD
                            </div>
                            <div class="relative text-regular text-white sm:max-w-md lg:max-w-none font-body font-normal">
                              We transform automotive mobility.
                            </div>
                          </div>
                          <div class="hidden md:flex flex-none relative text-regular text-white sm:max-w-md lg:max-w-none font-body font-normal text-right hover:underline">
                            Visit »
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
