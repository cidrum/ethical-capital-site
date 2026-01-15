import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="max-w-4xl mb-12">
            <h1 className="font-source-serif text-[64px] leading-[110%] text-dark-blue">
              Ryan Kania is a serial entrepreneur with interests in healthcare, wholesale distribution, liquidation services, and distressed commercial real estate.
            </h1>
          </div>
          <div className="w-full">
            <Image
              src="/images/ryan-kania-small-business-owner.png"
              alt="Ryan Kania small business owner buyer"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
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
                An experienced and proven operator of small businesses.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-[160%]">
                Driven by his passion for the industry and a hunger for success, he possesses a discerning eye for profitable ventures. Connect with Ryan to explore potential collaborations and discover exciting opportunities in the ever-evolving business landscape.
              </p>
              <p className="text-lg leading-[160%]">
                Ryan Kania successfully founded and led Surgical Resources Group and Advocates for World Health <em>(both businesses achieved &gt;$10M revenue)</em>, demonstrating expertise in business development and a commitment to making a positive impact in healthcare and global advocacy. Ryan received his MBA from Northwestern University Kellogg School of Management (with distinction) and his Bachelor of Science degree in Economics and Finance from the University of South Florida where he was recognized as the Fall 2010 Outstanding Graduate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Numbers Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-[128px] leading-[100%] font-inter font-light text-blue-marine mb-6">
                15<span className="text-[96px]">+</span>
              </div>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                years of operating experience
              </div>
            </div>
            <div className="md:pl-16">
              <div className="text-[128px] leading-[100%] font-inter font-light text-blue-marine mb-6">
                $
              </div>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                Multiple acquisition targets<br />Healthcare • Distribution • Liquidation • Real Estate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Targeted Industries */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-blue-marine"></div>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                targeted industries
              </div>
            </div>
            <h2 className="uppercase text-blue-marine tracking-[2px] font-inter text-lg font-medium">
              healthcare services, distribution & real estate
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Link href="/industries" className="bg-white p-12 hover:bg-blue-marine-05 transition-colors block">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-4">
                Healthcare Services
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                Medical equipment, surgical supplies, and healthcare services businesses.
              </p>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                learn More →
              </div>
            </Link>

            <Link href="/industries" className="bg-white p-12 hover:bg-blue-marine-05 transition-colors block">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-4">
                Wholesale Distribution
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                B2B distribution companies with established customer bases and logistics.
              </p>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                learn More →
              </div>
            </Link>

            <Link href="/industries" className="bg-white p-12 hover:bg-blue-marine-05 transition-colors block">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-4">
                Liquidation Services
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                Asset liquidation and inventory management services for businesses.
              </p>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                learn More →
              </div>
            </Link>

            <Link href="/real-estate" className="bg-white p-12 hover:bg-blue-marine-05 transition-colors block">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-4">
                Flex Warehouses
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                Distressed commercial real estate with significant value-add potential.
              </p>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                learn More →
              </div>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-lg leading-[160%] italic">
              We achieve results with <span className="font-light">discretion.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* CTA Section */}
      <section className="w-full bg-blue-sky-10 py-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-2xl leading-[150%] text-dark-blue">
                Building a portfolio of successful businesses across multiple industries, driving growth and delivering exceptional value to stakeholders.
              </p>
            </div>
            <a
              href="tel:+13522634219"
              className="bg-blue-marine text-white px-12 py-4 font-inter font-medium hover:bg-dark-blue transition-colors whitespace-nowrap"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
