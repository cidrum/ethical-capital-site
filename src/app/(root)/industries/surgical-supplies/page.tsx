import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Surgical Supplies & Consumables Acquisitions",
  description: "Seeking to acquire surgical supplies and consumables distribution businesses serving healthcare facilities with recurring revenue streams.",
};

export default function SurgicalSuppliesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-blue-marine-05 py-24">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="mb-8">
            <Link href="/industries" className="text-blue-marine hover:text-blue-sky transition-colors text-sm uppercase tracking-wider">
              ← Back to Industries
            </Link>
          </div>
          <div className="max-w-[900px]">
            <h1 className="font-playfair text-[76px] leading-[110%] text-dark-blue mb-8">
              Surgical Supplies & Consumables Acquisitions
            </h1>
            <p className="text-xl leading-[160%] text-dark-blue-70">
              Acquiring distributors of surgical instruments, disposable supplies, and consumable products serving operating rooms and surgical centers.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24"></div>

      {/* Overview Section */}
      <section className="w-full">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-source-serif text-[48px] leading-[110%] text-blue-marine mb-8">
                What We&apos;re Looking For
              </h2>
              <div className="space-y-4 text-lg leading-[160%]">
                <p>
                  We seek established distributors of surgical supplies, instruments, and consumables with strong manufacturer relationships
                  and recurring orders from healthcare facilities.
                </p>
                <p>
                  Target businesses include distributors of sterile surgical instruments, disposable gloves and gowns, sutures, wound care products,
                  and other essential operating room supplies with high reorder rates.
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
                  <span>High-volume recurring orders from hospitals and surgical centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Authorized distributor relationships with major manufacturers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Strong inventory management and logistics systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Compliance with FDA regulations and quality standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Established customer service and account management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>EBITDA between $750K - $1.5M</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24"></div>

      {/* Why This Sector */}
      <section className="w-full bg-white">
        <div className="max-w-[1140px] mx-auto px-[3.33%] py-24">
          <h2 className="font-source-serif text-[48px] leading-[110%] text-blue-marine mb-12">
            Why Surgical Supplies Distribution?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">01</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Consumable Model
              </h3>
              <p className="text-base leading-[160%]">
                Surgical supplies are consumable products requiring constant replenishment, creating predictable recurring revenue.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">02</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Essential Products
              </h3>
              <p className="text-base leading-[160%]">
                Surgical procedures require specific sterile supplies regardless of economic conditions, ensuring stable demand.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">03</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Sticky Customers
              </h3>
              <p className="text-base leading-[160%]">
                Healthcare facilities maintain long-term relationships with trusted suppliers due to quality and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24"></div>

      {/* Investment Criteria */}
      <section className="w-full">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="bg-blue-marine-05 p-16">
            <h2 className="font-source-serif text-[40px] leading-[110%] text-dark-blue mb-8">
              Investment Criteria
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Revenue Range</h4>
                  <p className="text-lg leading-[160%]">$2M - $10M in annual revenue</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">EBITDA</h4>
                  <p className="text-lg leading-[160%]">$750K - $1.5M</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Geographic Focus</h4>
                  <p className="text-lg leading-[160%]">Florida and Texas preferred, open to other markets</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Business Age</h4>
                  <p className="text-lg leading-[160%]">Established businesses with 5+ years of operating history</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Customer Retention</h4>
                  <p className="text-lg leading-[160%]">High customer retention rates with multi-year relationships</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Growth Opportunity</h4>
                  <p className="text-lg leading-[160%]">Potential for product line expansion and new facility targeting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24"></div>

      {/* CTA Section */}
      <section className="w-full bg-dark-blue py-24">
        <div className="max-w-[1140px] mx-auto px-[3.33%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[600px]">
              <p className="text-[28px] leading-[140%] text-white font-source-serif">
                Ready to discuss your surgical supplies distribution business? Let&apos;s connect to explore opportunities.
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
