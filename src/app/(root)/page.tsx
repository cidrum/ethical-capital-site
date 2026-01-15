import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full">
        <div className="w-full">
          <div className="max-w-[1120px] mx-auto px-[3.33%]">
            <div className="pt-24 pb-12">
              <h1 className="font-playfair text-[96px] leading-[105%] text-dark-blue">
                Ethics drive prosperous acquisition entrepreneurs.
              </h1>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              src="/images/Untitled-design.png"
              alt="Two coworkers building up an acquired business."
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 pb-16">
              <div className="max-w-[1120px] mx-auto px-[3.33%]">
                <div className="max-w-2xl">
                  <p className="text-lg leading-[160%] text-white">
                    As a serial entrepreneur with a strategic mindset, I actively seek multiple small business acquisition opportunities
                    and distressed commercial real estate properties. With extensive expertise in healthcare services and a strong network,
                    I aim to unlock the full potential of acquired ventures, ensuring prosperity for businesses and stakeholders alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Overview Section */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[76px] leading-[110%] text-blue-marine font-source-serif">
                A serial entrepreneur building a portfolio of businesses and properties.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-[160%]">
                I&apos;m building a portfolio of profitable small businesses across healthcare services, wholesale distribution,
                and liquidation services. Each acquisition represents an opportunity to apply proven operational expertise
                and drive sustainable growth.
              </p>
              <p className="text-lg leading-[160%]">
                Beyond operating businesses, I specialize in acquiring distressed commercial real estate, particularly flex warehouses,
                where strategic repositioning creates significant value.
              </p>
              <p className="text-lg leading-[160%]">
                With over 15 years of experience founding and leading businesses to $10M+ revenue, including Surgical Resources Group
                and Advocates for World Health, I bring proven expertise to every acquisition. MBA from Northwestern University Kellogg
                School of Management (with distinction).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Find Out More Section */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-blue-marine"></div>
                <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                  our company
                </div>
              </div>
              <h2 className="uppercase text-blue-marine tracking-[2px] font-inter text-lg font-medium">
                find out more
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/about"
                className="group p-12 bg-white hover:bg-blue-marine-05 transition-colors duration-300 block"
              >
                <div className="mb-8">
                  <h3 className="text-[60px] leading-[105%] font-source-serif">About Us</h3>
                </div>
                <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                  learn More →
                </div>
              </Link>
              <Link
                href="/industries"
                className="group p-12 bg-blue-marine-10 hover:bg-blue-marine-20 transition-colors duration-300 block"
              >
                <div className="mb-8">
                  <h3 className="text-[60px] leading-[105%] font-source-serif">Industries</h3>
                </div>
                <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                  learn More →
                </div>
              </Link>
              <Link
                href="/operator"
                className="group p-12 bg-blue-marine-10 hover:bg-blue-marine-20 transition-colors duration-300 block"
              >
                <div className="mb-8">
                  <h3 className="text-[60px] leading-[105%] font-source-serif">Operator</h3>
                </div>
                <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                  learn More →
                </div>
              </Link>
              <Link
                href="/contact"
                className="group p-12 bg-white hover:bg-blue-marine-05 transition-colors duration-300 block"
              >
                <div className="mb-8">
                  <h3 className="text-[60px] leading-[105%] font-source-serif">Contact</h3>
                </div>
                <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                  learn More →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Offices Section */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-blue-marine"></div>
                <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                  contact us
                </div>
              </div>
              <h2 className="uppercase text-blue-marine tracking-[2px] font-inter text-lg font-medium">
                our offices
              </h2>
            </div>
            <div className="bg-blue-sky-10 p-12">
              <div className="mb-8">
                <h3 className="text-[60px] leading-[105%] text-blue-marine font-source-serif mb-6">
                  Tampa
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://goo.gl/maps/vbeLVmMwXZugYRyR9"
                    target="_blank"
                    className="text-lg leading-[160%] hover:text-blue-marine transition-colors block"
                  >
                    610 E. Zack St, Suite 110-3072<br />
                    Tampa, FL 33602<br />
                    ATTN: Kania Law Offices PLLC
                  </a>
                  <a href="tel:+13522634219" className="text-lg leading-[160%] hover:text-blue-marine transition-colors block">
                    T(352) 263-4219
                  </a>
                </div>
              </div>
              <a
                href="mailto:rmkmgtholdings@gmail.com"
                className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium hover:text-dark-blue transition-colors"
              >
                email us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* CTA Section */}
      <section className="w-full bg-blue-marine py-24">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-2xl leading-[150%] text-white">
                Driven by ambition and resourcefulness, bringing expertise and a strong financial foundation to fuel growth and success.
              </p>
            </div>
            <a
              href="tel:+13522634219"
              className="bg-white text-blue-marine px-12 py-4 font-inter font-medium hover:bg-blue-marine-05 transition-colors whitespace-nowrap"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
