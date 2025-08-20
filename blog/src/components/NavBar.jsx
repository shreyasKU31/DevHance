import Link from "next/link";

export default function NavBar() {
  return (
    <header className="glass-pro sticky top-4 z-40 mx-auto mb-12 flex w-[95%] max-w-6xl items-center justify-between rounded-2xl px-8 py-4 shadow-soft backdrop-blur-md border-2 border-gray-200">
      <nav className="flex items-center gap-6 ">
        <Link
          href="https://devhance.in"
          className="text-secondary font-lexend text-sm hover:text-primary transition-colors"
        >
          Main Site
        </Link>
        <Link
          href="https://devhance.com/showcase"
          className="text-secondary font-lexend text-sm hover:text-primary transition-colors"
        >
          Showcase
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <img
          src="/DHLogo.webp"
          alt="devhance logo"
          className="w-8 h-8 invert"
        />
        <span className="font-syne text-2xl font-bold text-primary">
          DevHance
        </span>
      </div>
      <div>
        <a
          href="#"
          className="signup-button rounded-full bg-gradient-aura px-6 py-2 font-lexend text-white shadow-soft transition-transform hover:-translate-y-1"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
