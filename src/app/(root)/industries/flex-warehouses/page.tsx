import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flex Warehouse Properties Acquisitions",
  description: "Seeking to acquire distressed flex warehouse properties combining office and warehouse space, ideal for distribution, light manufacturing, and mixed-use operations.",
};

export default function FlexWarehousesPage() {
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
              Flex Warehouses
            </h1>
            <p className="text-xl leading-[160%] text-dark-blue-70">
              Acquiring distressed flex warehouse properties that combine office and warehouse space, offering versatility for distribution operations, light manufacturing, and business services. <Link href="/real-estate" className="text-blue-marine hover:text-blue-sky underline">Learn more about our commercial real estate approach</Link>.
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
                  We seek distressed flex warehouse properties in high-growth markets, particularly facilities facing foreclosure,
                  deferred maintenance, occupancy challenges, or owner transitions requiring quick exits.
                </p>
                <p>
                  Target properties include 20,000-100,000 SF flex buildings with office/warehouse mix, suitable for e-commerce fulfillment,
                  third-party logistics, light assembly, and professional services requiring warehouse support.
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
                  <span>20,000-100,000 SF flex space with office component</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Clear height 18-24 feet with dock and grade doors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Located near major highways and distribution corridors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Distressed situations including foreclosure or motivated sellers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Value-add opportunities through occupancy or improvements</span>
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
            Why Flex Warehouses?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">01</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Versatile Tenant Base
              </h3>
              <p className="text-base leading-[160%]">
                Flex space appeals to diverse tenants including distributors, manufacturers, contractors, and service businesses requiring both office and warehouse.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">02</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                E-Commerce Growth
              </h3>
              <p className="text-base leading-[160%]">
                Demand for last-mile delivery and fulfillment centers drives strong tenant demand for flex warehouse space near population centers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">03</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Value-Add Potential
              </h3>
              <p className="text-base leading-[160%]">
                Distressed flex properties offer opportunities for value creation through improved management, renovations, and strategic leasing.
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
                  <p className="text-lg leading-[160%]">20,000-100,000 SF with office/warehouse mix</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Purchase Price</h4>
                  <p className="text-lg leading-[160%]">$2M - $10M property value</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Geographic Focus</h4>
                  <p className="text-lg leading-[160%]">Florida and Texas markets, near major distribution corridors</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Property Condition</h4>
                  <p className="text-lg leading-[160%]">Distressed situations with clear value-add opportunities</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Acquisition Type</h4>
                  <p className="text-lg leading-[160%]">Foreclosures, estate sales, motivated sellers, bankruptcy situations</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Return Profile</h4>
                  <p className="text-lg leading-[160%]">Stabilized cash flow plus appreciation through repositioning</p>
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
                Have a distressed flex warehouse property? Let&apos;s discuss acquisition and repositioning opportunities.
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
