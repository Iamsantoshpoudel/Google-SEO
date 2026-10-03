import Magnetic from "./Magnetic";
import Scramble from "./Scramble";
import ThemeToggle from "./ThemeToggle";
import { LINKS, nav } from "@/lib/data";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-[env(safe-area-inset-top)] z-[80]">
      <nav aria-label="Main" className="flex items-center gap-[26px] px-[clamp(18px,4vw,48px)] py-[18px]">
        <a href="/#top" className="mr-auto font-display text-[1.15rem] font-extrabold tracking-[-.02em] no-underline">
          Santosh Poudel
        </a>
        {nav.map((l) => (
          <Scramble
            key={l.href} as="a" on="hover" href={l.href}
            className="relative text-[.92rem] no-underline after:absolute after:-bottom-[3px] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-[350ms] hover:after:origin-left hover:after:scale-x-100 max-md:hidden"
          >
            {l.label}
          </Scramble>
        ))}
        <ThemeToggle />
        <Magnetic
          href={LINKS.portfolio} target="_blank" rel="me noopener"
          className="clip-notch-sm border-[1.5px] border-hot bg-[rgba(255,61,94,.08)] px-[18px] py-2 text-[.92rem] font-semibold text-hot no-underline transition-[background,color] hover:bg-hot hover:text-white"
        >
          Main Portfolio
        </Magnetic>
      </nav>
    </header>
  );
}
