import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Light Industrial Properties Acquisitions",
  description: "Seeking to acquire distressed light industrial properties suitable for assembly, fabrication, research, and light manufacturing operations in growth markets.",
};

export default function LightIndustrialPage() {
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
              Light Industrial Properties
            </h1>
            <p className="text-xl leading-[160%] text-dark-blue-70">
              Acquiring distressed light industrial facilities suitable for assembly, fabrication, research and development, food production, and specialized manufacturing operations requiring modern infrastructure.
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
                  We seek distressed light industrial properties in growth markets, particularly facilities facing financial distress,
                  code compliance issues, deferred maintenance, or owner situations requiring rapid disposition.
                </p>
                <p>
                  Target properties include 15,000-75,000 SF light industrial buildings with adequate power, ventilation, loading capacity,
                  and flexibility to accommodate assembly, fabrication, food processing, laboratory, and specialty manufacturing uses.
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
                  <span>15,000-75,000 SF with 16-24 foot clear heights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Adequate electrical service (200+ amps minimum)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Loading docks or grade-level doors with truck access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Distressed situations or motivated sellers requiring quick exits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Potential for building improvements and tenant repositioning</span>
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
            Why Light Industrial?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">01</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Diverse Tenant Demand
              </h3>
              <p className="text-base leading-[160%]">
                Light industrial space serves manufacturers, food processors, research operations, and specialty fabricators creating broad tenant demand.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">02</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Reshoring Trend
              </h3>
              <p className="text-base leading-[160%]">
                Companies bringing production back to the U.S. drive increased demand for domestic light manufacturing facilities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">03</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Long-Term Tenancies
              </h3>
              <p className="text-base leading-[160%]">
                Manufacturing tenants typically sign longer leases and invest in tenant improvements, creating stable cash flows.
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
                  <p className="text-lg leading-[160%]">15,000-75,000 SF with light industrial specifications</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Purchase Price</h4>
                  <p className="text-lg leading-[160%]">$2M - $10M property value</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Geographic Focus</h4>
                  <p className="text-lg leading-[160%]">Florida and Texas markets with strong manufacturing sectors</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Property Condition</h4>
                  <p className="text-lg leading-[160%]">Distressed properties with clear improvement and repositioning paths</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Acquisition Type</h4>
                  <p className="text-lg leading-[160%]">Foreclosures, code violations, deferred maintenance, estate sales</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Return Profile</h4>
                  <p className="text-lg leading-[160%]">Cash flow through tenant upgrades and operational improvements</p>
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
                Have a distressed light industrial property? Let&apos;s discuss acquisition and repositioning opportunities.
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
