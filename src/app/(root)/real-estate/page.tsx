import Image from "next/image";
import Link from "next/link";

export default function RealEstatePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="max-w-4xl">
            <h1 className="font-playfair text-[76px] leading-[110%] text-dark-blue mb-8">
              Distressed Commercial Real Estate Acquisitions
            </h1>
            <p className="text-2xl leading-[150%] text-dark-blue-70">
              Specializing in flex warehouses and underperforming commercial properties
              with significant value-add potential.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Overview Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[60px] leading-[105%] text-blue-marine font-source-serif mb-6">
                Strategic Real Estate Investment
              </h2>
              <p className="text-lg leading-[160%] mb-6">
                I actively acquire distressed commercial real estate properties that offer
                substantial upside through strategic repositioning, operational improvements,
                and market timing.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-[160%]">
                My focus is on properties that are temporarily underperforming due to
                management issues, deferred maintenance, or market dislocation—not fundamental
                flaws. These situations present opportunities to create significant value
                through hands-on operational expertise.
              </p>
              <p className="text-lg leading-[160%]">
                With a proven track record in business operations and deep understanding of
                commercial property management, I bring both capital and capabilities to
                transform distressed assets into profitable investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Flex Warehouse Focus */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-blue-marine"></div>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                primary focus
              </div>
            </div>
            <h2 className="text-[60px] leading-[105%] text-blue-marine font-source-serif">
              Flex Warehouses
            </h2>
          </div>

          <div className="bg-blue-sky-10 p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-[36px] leading-[110%] font-source-serif text-blue-marine mb-4">
                  Versatility
                </h3>
                <p className="text-lg leading-[160%]">
                  Flex warehouses combine office, warehouse, and manufacturing space,
                  offering multiple revenue streams and tenant diversification.
                </p>
              </div>
              <div>
                <h3 className="text-[36px] leading-[110%] font-source-serif text-blue-marine mb-4">
                  Strong Demand
                </h3>
                <p className="text-lg leading-[160%]">
                  E-commerce growth and logistics needs drive consistent demand for
                  flexible industrial space in strategic locations.
                </p>
              </div>
              <div>
                <h3 className="text-[36px] leading-[110%] font-source-serif text-blue-marine mb-4">
                  Value-Add
                </h3>
                <p className="text-lg leading-[160%]">
                  Distressed flex properties often require operational improvements
                  rather than major capital expenditures, maximizing ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Investment Criteria */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <h2 className="text-[60px] leading-[105%] text-blue-marine font-source-serif mb-6">
              Investment Criteria
            </h2>
            <p className="text-xl leading-[160%] text-dark-blue-70 max-w-3xl">
              I seek properties with clear value-creation opportunities where operational
              expertise can drive substantial returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-marine pl-8 py-6">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-dark-blue mb-4">
                Property Types
              </h3>
              <ul className="space-y-3 text-lg leading-[160%]">
                <li>• Flex warehouses (10,000 - 50,000 sq ft)</li>
                <li>• Light industrial buildings</li>
                <li>• Office/warehouse combinations</li>
                <li>• Distribution centers</li>
                <li>• Manufacturing facilities with office space</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-marine pl-8 py-6">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-dark-blue mb-4">
                Geographic Focus
              </h3>
              <ul className="space-y-3 text-lg leading-[160%]">
                <li>• Florida (primary market)</li>
                <li>• Texas (secondary market)</li>
                <li>• Growing secondary markets</li>
                <li>• Near major transportation corridors</li>
                <li>• Strong local economies</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-marine pl-8 py-6">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-dark-blue mb-4">
                Distress Indicators
              </h3>
              <ul className="space-y-3 text-lg leading-[160%]">
                <li>• Below-market occupancy rates</li>
                <li>• Deferred maintenance (addressable)</li>
                <li>• Poor property management</li>
                <li>• Motivated sellers</li>
                <li>• Underutilized space potential</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-marine pl-8 py-6">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-dark-blue mb-4">
                Value Creation
              </h3>
              <ul className="space-y-3 text-lg leading-[160%]">
                <li>• Lease-up vacant space</li>
                <li>• Improve property management</li>
                <li>• Upgrade tenant mix</li>
                <li>• Strategic renovations</li>
                <li>• Operational efficiencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Competitive Advantages */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-blue-marine"></div>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                what sets us apart
              </div>
            </div>
            <h2 className="text-[60px] leading-[105%] text-blue-marine font-source-serif">
              Competitive Advantages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10">
              <div className="text-[72px] font-inter font-light text-blue-marine mb-4">01</div>
              <h3 className="text-[28px] leading-[135%] font-source-serif text-dark-blue mb-4">
                Operational Expertise
              </h3>
              <p className="text-lg leading-[160%]">
                15+ years of hands-on business operations experience provides practical
                insight into property management and tenant needs.
              </p>
            </div>

            <div className="bg-white p-10">
              <div className="text-[72px] font-inter font-light text-blue-marine mb-4">02</div>
              <h3 className="text-[28px] leading-[135%] font-source-serif text-dark-blue mb-4">
                Quick Decisions
              </h3>
              <p className="text-lg leading-[160%]">
                Self-funded structure enables rapid decision-making and certainty of
                close—critical for distressed opportunities.
              </p>
            </div>

            <div className="bg-white p-10">
              <div className="text-[72px] font-inter font-light text-blue-marine mb-4">03</div>
              <h3 className="text-[28px] leading-[135%] font-source-serif text-dark-blue mb-4">
                Active Management
              </h3>
              <p className="text-lg leading-[160%]">
                Direct involvement in property operations drives improvements that
                passive investors cannot achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* CTA Section */}
      <section className="w-full bg-blue-marine py-24">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="text-center">
            <h2 className="text-[60px] leading-[105%] text-white font-source-serif mb-8">
              Have a Distressed Property to Sell?
            </h2>
            <p className="text-xl leading-[160%] text-white-70 mb-8 max-w-3xl mx-auto">
              If you own or represent a flex warehouse or commercial property facing challenges,
              let&apos;s discuss how my operational expertise and capital can provide a solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-12 py-4 bg-white text-blue-marine font-inter font-medium hover:bg-blue-marine-05 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+13522634219"
                className="px-12 py-4 border-2 border-white text-white font-inter font-medium hover:bg-white-10 transition-colors"
              >
                Call: (352) 263-4219
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
