//@ts-ignore
import LinkedInIcon from "./icons/LinkedInIcon.tsx";
//@ts-ignore
import InstagramIcon from "./icons/InstagramIcon.tsx";
//@ts-ignore
import SpotifyIcon from "./icons/SpotifyIcon.tsx";
//@ts-ignore
import GithubIcon from "./icons/GithubIcon.tsx";
//@ts-ignore
import PinterestIcon from "./icons/PinterestIcon.tsx";
//@ts-ignore
import EnvelopeOpenIcon from "./icons/EvenlopeOpenIcon.tsx";
//@ts-ignore
import AdressCardIcon from "./icons/AdressCardIcon.tsx";
//@ts-ignore
import TwitterIcon from "./icons/TwitterIcon.tsx";

interface HeaderProps {
}

export default function Header(props: HeaderProps) {
  return (
    <header className="fixed top-0 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="https://hejsfj.com" className="-m-1.5 p-1.5">
          <span className="sr-only">Sebastian Frederik Jacobsen</span>
          <img
            className="h-6 w-auto"
            src="/logo.svg"
            alt=""
          >
          </img>
        </a>
        <div className="flex gap-x-3 lg:gap-x-6">
          <a
            href="https://de.linkedin.com/in/hejsfj"
            className="text-white hover:text-white"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon size={16} />
          </a>
          <a
            href="https://twitter.com/hejsfj"
            className="text-white hover:text-white"
          >
            <span className="sr-only">LinkedIn</span>
            <TwitterIcon size={16} />
          </a>
          <a
            href="https://instagram.com/hejsfj"
            className="text-white hover:text-white"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon size={16} />
          </a>
          <a
            href="https://open.spotify.com/playlist/5ZsAoxySgvnssdL8TbEqw2?si=H8XJJPngSw2dDJu-TOhXBQ&utm_medium=share&utm_source=linktree"
            className="text-white hover:text-white"
          >
            <span className="sr-only">Spotify</span>
            <SpotifyIcon size={16} />
          </a>
          <a
            href="https://github.com/hejsfj"
            className="text-white hover:text-white"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.pinterest.de/HEJSFJ/"
            className="text-white hover:text-white"
          >
            <span className="sr-only">Pinterest</span>
            <PinterestIcon size={16} />
          </a>
          <a
            href="https://techvibes.substack.com/embed"
            className="text-white hover:text-white"
          >
            <span className="sr-only">Substack</span>
            <EnvelopeOpenIcon size={16} />
          </a>
          <a
            href="/imprint"
            className="text-sm font-semibold leading-6 text-white"
          >
            <AdressCardIcon size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
