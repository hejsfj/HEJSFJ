import LinkedInIcon from "./icons/LinkedInIcon.tsx";
import InstagramIcon from "./icons/InstagramIcon.tsx";
import SpotifyIcon from "./icons/SpotifyIcon.tsx";
import GithubIcon from "./icons/GithubIcon.tsx";
import PinterestIcon from "./icons/PinterestIcon.tsx";
import EnvelopeOpenIcon from "./icons/EvenlopeOpenIcon.tsx";
import AddressCardIcon from "./icons/AddressCardIcon.tsx";
import TwitterIcon from "./icons/TwitterIcon.tsx";

// deno-lint-ignore no-empty-interface
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
            <AddressCardIcon size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
