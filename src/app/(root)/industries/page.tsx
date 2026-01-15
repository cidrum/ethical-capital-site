import Image from "next/image";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="max-w-4xl mb-12">
            <h1 className="font-source-serif text-[64px] leading-[110%] text-dark-blue">
              Building a portfolio across healthcare services, distribution, liquidation, and commercial real estate.
            </h1>
          </div>
          <div className="w-full">
            <Image
              src="/images/hero-services-desk_1hero-services-desk.webp"
              alt="Industries we serve"
              width={2880}
              height={1620}
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
                We care about your legacy and your employees.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-[160%]">
                We believe acquisition entrepreneurs offer a more ethical approach to business buying compared to traditional private equity for several reasons.
              </p>
              <p className="text-lg leading-[160%]">
                Firstly, acquisition entrepreneurs typically invest their own capital, creating a stronger alignment of interests with stakeholders. They prioritize long-term value creation over short-term gains, fostering sustainable growth and stability. Additionally, acquisition entrepreneurs actively participate in the operations of the acquired business, promoting a culture that values employee well-being, fair treatment, and professional development. They often emphasize transparency, integrity, and social responsibility, contributing to a positive impact on the community and society as a whole.
              </p>
              <p className="text-lg leading-[160%]">
                Overall, acquisition entrepreneurs embody a more ethical and responsible approach to acquiring and managing small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Industries Section */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-blue-marine"></div>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                our interests
              </div>
            </div>
            <h2 className="uppercase text-blue-marine tracking-[2px] font-inter text-lg font-medium">
              targeted industries
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-6">
                Healthcare Services
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                Medical equipment distribution, surgical supplies, healthcare facilities support, and related healthcare service businesses. Industries with strong demand fundamentals and recurring revenue models.
              </p>
              <div className="space-y-3 mb-6">
                <h4 className="text-[24px] leading-[135%] font-source-serif text-blue-marine">
                  Sub-Industries:
                </h4>
                <ul className="space-y-2 text-lg leading-[160%]">
                  <li><Link href="/industries/medical-equipment-distribution" className="hover:text-blue-sky transition-colors">• Medical Equipment Distribution</Link></li>
                  <li><Link href="/industries/surgical-supplies" className="hover:text-blue-sky transition-colors">• Surgical Supplies & Consumables</Link></li>
                  <li><Link href="/industries/durable-medical-equipment" className="hover:text-blue-sky transition-colors">• Durable Medical Equipment (DME)</Link></li>
                  <li><Link href="/industries/home-health-services" className="hover:text-blue-sky transition-colors">• Home Health Services</Link></li>
                  <li><Link href="/industries/healthcare-staffing" className="hover:text-blue-sky transition-colors">• Healthcare Staffing & Recruiting</Link></li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-12">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-6">
                Wholesale Distribution
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                B2B distribution businesses with established customer relationships, reliable supply chains, and consistent cash flow. Focus on businesses serving essential industries with long-term stability.
              </p>
              <div className="space-y-3 mb-6">
                <h4 className="text-[24px] leading-[135%] font-source-serif text-blue-marine">
                  Sub-Industries:
                </h4>
                <ul className="space-y-2 text-lg leading-[160%]">
                  <li><Link href="/industries/industrial-supplies" className="hover:text-blue-sky transition-colors">• Industrial Supplies & Equipment</Link></li>
                  <li><Link href="/industries/building-materials" className="hover:text-blue-sky transition-colors">• Building Materials & Hardware</Link></li>
                  <li><Link href="/industries/food-service-distribution" className="hover:text-blue-sky transition-colors">• Food Service Distribution</Link></li>
                  <li><Link href="/industries/automotive-parts" className="hover:text-blue-sky transition-colors">• Automotive Parts & Accessories</Link></li>
                  <li><Link href="/industries/janitorial-supplies" className="hover:text-blue-sky transition-colors">• Janitorial & Sanitation Supplies</Link></li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-12">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-6">
                Liquidation Services
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                Asset liquidation, inventory management, and auction services for businesses undergoing transitions. Businesses that provide essential services to companies managing excess inventory or asset disposal.
              </p>
              <div className="space-y-3 mb-6">
                <h4 className="text-[24px] leading-[135%] font-source-serif text-blue-marine">
                  Sub-Industries:
                </h4>
                <ul className="space-y-2 text-lg leading-[160%]">
                  <li><Link href="/industries/business-asset-liquidation" className="hover:text-blue-sky transition-colors">• Business Asset Liquidation</Link></li>
                  <li><Link href="/industries/retail-store-closeout" className="hover:text-blue-sky transition-colors">• Retail Store Closeout Services</Link></li>
                  <li><Link href="/industries/equipment-auctions" className="hover:text-blue-sky transition-colors">• Equipment & Machinery Auctions</Link></li>
                  <li><Link href="/industries/inventory-clearance" className="hover:text-blue-sky transition-colors">• Inventory Clearance & Overstock</Link></li>
                  <li><Link href="/industries/estate-liquidation" className="hover:text-blue-sky transition-colors">• Estate & Business Liquidation</Link></li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-12">
              <h3 className="text-[60px] leading-[105%] font-source-serif text-dark-blue mb-6">
                Commercial Real Estate
              </h3>
              <p className="text-lg leading-[160%] mb-6">
                Distressed flex warehouses and commercial properties with significant value-add potential through operational improvements and strategic repositioning.
              </p>
              <div className="space-y-3 mb-6">
                <h4 className="text-[24px] leading-[135%] font-source-serif text-blue-marine">
                  Property Types:
                </h4>
                <ul className="space-y-2 text-lg leading-[160%]">
                  <li><Link href="/industries/flex-warehouses" className="hover:text-blue-sky transition-colors">• Flex Warehouses (10,000-50,000 sq ft)</Link></li>
                  <li><Link href="/industries/distribution-centers" className="hover:text-blue-sky transition-colors">• Distribution Centers</Link></li>
                  <li><Link href="/industries/light-industrial" className="hover:text-blue-sky transition-colors">• Light Industrial Properties</Link></li>
                  <li><Link href="/industries/office-warehouse-combo" className="hover:text-blue-sky transition-colors">• Office/Warehouse Combo</Link></li>
                  <li><Link href="/industries/manufacturing-facilities" className="hover:text-blue-sky transition-colors">• Manufacturing Facilities</Link></li>
                </ul>
              </div>
              <Link
                href="/real-estate"
                className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium hover:text-dark-blue transition-colors"
              >
                learn more about real estate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Investment Criteria */}
      <section className="w-full bg-blue-marine-05 py-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <h2 className="text-[60px] leading-[105%] text-blue-marine font-source-serif mb-6">
              What We Look For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Strong Fundamentals
              </h3>
              <p className="text-lg leading-[160%]">
                Businesses with proven business models, established customer bases, and consistent cash flow.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Growth Potential
              </h3>
              <p className="text-lg leading-[160%]">
                Opportunities to expand operations, enter new markets, or improve operational efficiency.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Cultural Fit
              </h3>
              <p className="text-lg leading-[160%]">
                Businesses with strong employee relationships and values aligned with long-term success.
              </p>
            </div>
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
