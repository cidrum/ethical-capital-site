import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-10 left-0 right-0 px-4 py-4 bg-background/40 backdrop-blur-lg border border-white rounded-2xl shadow-xl z-50 w-full max-w-[440px] md:max-w-6xl mx-auto">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Web-version.svg"
              alt="Ethical Capital Logo"
              width={128}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Nav for larger screens */}
        <nav className="hidden md:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className="hover:text-foreground/80 text-sm uppercase">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm uppercase">
              <Link href="/industries">Industries</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm uppercase">
              <Link href="/operator">Operator</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm uppercase">
              <Link href="/real-estate">Real Estate</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm uppercase">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="tel:+13522634219"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-foreground/10 transition-colors"
          >
            <span className="text-sm">Call Now</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
