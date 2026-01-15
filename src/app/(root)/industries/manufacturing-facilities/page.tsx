import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Facilities Acquisitions",
  description: "Seeking to acquire distressed manufacturing facilities with specialized infrastructure including power, HVAC, cranes, and production capabilities in strategic industrial markets.",
};

export default function ManufacturingFacilitiesPage() {
  return (
    <>
      <section className="w-full bg-blue-marine-05 py-24">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="mb-8">
            <Link href="/industries" className="text-blue-marine hover:text-blue-sky transition-colors text-sm uppercase tracking-wider">
              ← Back to Industries
            </Link>
          </div>
          <div className="max-w-[900px]">
            <h1 className="font-playfair text-[76px] leading-[110%] text-dark-blue mb-8">
              Manufacturing Facilities
            </h1>
            <p className="text-xl leading-[160%] text-dark-blue-70">
              Acquiring distressed manufacturing facilities with specialized infrastructure including heavy power, industrial HVAC, crane systems, and production-ready configurations in strategic industrial markets.
            </p>
          </div>
        </div>
      </section>

      <div className="h-24"></div>

      <section className="w-full">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-source-serif text-[48px] leading-[110%] text-blue-marine mb-8">
                What We&apos;re Looking For
              </h2>
              <div className="space-y-4 text-lg leading-[160%]">
                <p>
                  We seek distressed manufacturing facilities in strategic industrial markets, particularly properties facing financial distress,
                  plant closures, company bankruptcies, or significant capital improvement needs that current owners cannot fund.
                </p>
                <p>
                  Target properties include 30,000-150,000 SF manufacturing facilities with heavy power service (400+ amps), crane infrastructure,
                  specialized ventilation, and configurations suitable for production, assembly, fabrication, and processing operations.
                </p>
              </div>
            </div>

            <div className="bg-blue-sky-10 p-12">
              <h3 className="text-[32px] leading-[135%] font-source-serif text-dark-blue mb-6">
                Target Characteristics
              </h3>
              <ul className="space-y-4 text-lg leading-[160%]">
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>30,000-150,000 SF with 20+ foot clear heights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Heavy electrical service (400+ amps) with 3-phase power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Crane systems, compressed air, or specialized infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Distressed situations including plant closures or bankruptcies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Loading docks and heavy truck access capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Purchase price $2M-$10M range</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24"></div>

      <section className="w-full bg-white">
        <div className="max-w-[1140px] mx-auto px-[3.33%] py-24">
          <h2 className="font-source-serif text-[48px] leading-[110%] text-blue-marine mb-12">
            Why Manufacturing Facilities?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">01</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Reshoring Manufacturing
              </h3>
              <p className="text-base leading-[160%]">
                Companies bringing production back to North America create strong demand for turnkey manufacturing facilities with existing infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">02</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Specialized Infrastructure
              </h3>
              <p className="text-base leading-[160%]">
                Heavy power, cranes, and production systems are expensive to install, making existing facilities with these features highly valuable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">03</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Limited Competition
              </h3>
              <p className="text-base leading-[160%]">
                Manufacturing properties require specialized knowledge and repositioning expertise, reducing buyer competition for distressed assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24"></div>

      <section className="w-full">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="bg-blue-marine-05 p-16">
            <h2 className="font-source-serif text-[40px] leading-[110%] text-dark-blue mb-8">
              Investment Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Property Size</h4>
                  <p className="text-lg leading-[160%]">30,000-150,000 SF with manufacturing specifications</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Purchase Price</h4>
                  <p className="text-lg leading-[160%]">$2M - $10M property value</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Geographic Focus</h4>
                  <p className="text-lg leading-[160%]">Florida and Texas markets with strong industrial bases</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Property Condition</h4>
                  <p className="text-lg leading-[160%]">Distressed properties with existing manufacturing infrastructure</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Acquisition Type</h4>
                  <p className="text-lg leading-[160%]">Plant closures, company bankruptcies, foreclosures, estate sales</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Return Profile</h4>
                  <p className="text-lg leading-[160%]">Value creation through repositioning and long-term industrial tenants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24"></div>

      <section className="w-full bg-dark-blue py-24">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[600px]">
              <p className="text-[28px] leading-[140%] text-white font-source-serif">
                Have a distressed manufacturing facility? Let&apos;s discuss acquisition and repositioning opportunities.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+13522634219"
                className="inline-block bg-blue-sky text-white px-8 py-4 text-lg font-semibold hover:bg-blue-sky/90 transition-colors"
              >
                Call Us
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white text-dark-blue px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
