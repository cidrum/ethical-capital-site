import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-dark-blue text-white">
      <div className="max-w-[1728px] mx-auto px-[3.33%]">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 py-16 border-b border-white-10">
          {/* Logo and Tagline */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/White-logo---no-background.png"
                alt="Ethical Capital Logo"
                width={160}
                height={75}
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-white-70 text-base leading-relaxed mb-6">
              Building a portfolio of successful businesses and valuable properties through
              strategic acquisitions and proven operational expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/kaniaryan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white-10 hover:bg-blue-marine transition-colors rounded"
              >
                <Image src="/images/twitter-white.svg" alt="Twitter" width={20} height={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-kania-82363031/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white-10 hover:bg-blue-marine transition-colors rounded"
              >
                <Image src="/images/linkedin-white.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-inter text-sm uppercase tracking-wider mb-4 font-medium">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white-70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-white-70 hover:text-white transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/operator" className="text-white-70 hover:text-white transition-colors text-sm">
                  Operator
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="text-white-70 hover:text-white transition-colors text-sm">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Acquisition Focus */}
          <div className="md:col-span-3">
            <h3 className="text-white font-inter text-sm uppercase tracking-wider mb-4 font-medium">
              Acquisition Focus
            </h3>
            <ul className="space-y-3">
              <li className="text-white-70 text-sm">
                Healthcare Services
              </li>
              <li className="text-white-70 text-sm">
                Wholesale Distribution
              </li>
              <li className="text-white-70 text-sm">
                Liquidation Services
              </li>
              <li className="text-white-70 text-sm">
                Distressed Commercial Real Estate
              </li>
              <li className="text-white-70 text-sm">
                Flex Warehouses
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-white font-inter text-sm uppercase tracking-wider mb-4 font-medium">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white-70 text-sm mb-1">Tampa Office</p>
                <a
                  href="https://goo.gl/maps/vbeLVmMwXZugYRyR9"
                  target="_blank"
                  className="text-white hover:text-blue-sky transition-colors text-sm"
                >
                  610 E. Zack St, Suite 110-3072<br />
                  Tampa, FL 33602
                </a>
              </div>
              <div>
                <a
                  href="tel:+13522634219"
                  className="text-white hover:text-blue-sky transition-colors text-sm block"
                >
                  (352) 263-4219
                </a>
              </div>
              <div>
                <a
                  href="mailto:rmkmgtholdings@gmail.com"
                  className="text-white hover:text-blue-sky transition-colors text-sm block"
                >
                  rmkmgtholdings@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white-70 text-sm">
            © {new Date().getFullYear()} Ethical Capital Group LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white-70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white-70 hover:text-white transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
