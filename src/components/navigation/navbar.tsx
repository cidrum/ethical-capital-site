import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full bg-white border-b border-blue-marine-10 sticky top-0 z-50">
      <div className="max-w-[1728px] mx-auto px-[3.33%]">
        <nav className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Web-version.svg"
              alt="Ethical Capital Logo"
              width={128}
              height={60}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/about"
              className="text-sm uppercase tracking-wider text-dark-blue hover:text-blue-marine transition-colors font-inter font-medium"
            >
              About Us
            </Link>
            <Link
              href="/industries"
              className="text-sm uppercase tracking-wider text-dark-blue hover:text-blue-marine transition-colors font-inter font-medium"
            >
              Industries
            </Link>
            <Link
              href="/operator"
              className="text-sm uppercase tracking-wider text-dark-blue hover:text-blue-marine transition-colors font-inter font-medium"
            >
              Operator
            </Link>
            <Link
              href="/real-estate"
              className="text-sm uppercase tracking-wider text-dark-blue hover:text-blue-marine transition-colors font-inter font-medium"
            >
              Real Estate
            </Link>
            <Link
              href="/contact"
              className="text-sm uppercase tracking-wider text-dark-blue hover:text-blue-marine transition-colors font-inter font-medium"
            >
              Contact
            </Link>
          </div>

          <Link
            href="tel:+13522634219"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-blue-marine text-white hover:bg-dark-blue transition-colors font-inter font-medium text-sm"
          >
            Call Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
