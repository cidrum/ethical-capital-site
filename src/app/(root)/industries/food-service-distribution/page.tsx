import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Service Distribution Acquisitions",
  description: "Seeking to acquire food service distributors supplying restaurants, hotels, and institutional food service operations.",
};

export default function FoodServiceDistributionPage() {
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
              Food Service Distribution
            </h1>
            <p className="text-xl leading-[160%] text-dark-blue-70">
              Acquiring food service distributors supplying restaurants, hotels, schools, healthcare facilities, and institutional food service operations.
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
                  We seek established food service distributors with refrigerated warehousing, delivery fleet infrastructure,
                  and strong relationships with restaurants and institutional food service operations.
                </p>
                <p>
                  Target businesses include distributors of proteins, produce, dairy, dry goods, beverages, and food service
                  supplies serving restaurants, hotels, schools, hospitals, and corporate dining facilities.
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
                  <span>Refrigerated warehouse and cold storage capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Temperature-controlled delivery fleet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Recurring customer accounts with frequent deliveries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Food safety and quality management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Strong supplier relationships with food manufacturers</span>
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

      <div className="h-24"></div>

      <section className="w-full bg-white">
        <div className="max-w-[1140px] mx-auto px-[3.33%] py-24">
          <h2 className="font-source-serif text-[48px] leading-[110%] text-blue-marine mb-12">
            Why Food Service Distribution?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">01</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Daily Deliveries
              </h3>
              <p className="text-base leading-[160%]">
                Perishable products require frequent deliveries, creating high-touch customer relationships and recurring revenue.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">02</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Essential Service
              </h3>
              <p className="text-base leading-[160%]">
                Food service operations depend on reliable distributors to maintain their businesses, creating strong customer loyalty.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">03</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Regional Growth
              </h3>
              <p className="text-base leading-[160%]">
                Thriving restaurant and hospitality sectors in growth markets drive consistent demand for food distribution.
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
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Infrastructure</h4>
                  <p className="text-lg leading-[160%]">Temperature-controlled warehouse and delivery fleet assets</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Growth Opportunity</h4>
                  <p className="text-lg leading-[160%]">Potential for customer acquisition and product category expansion</p>
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
                Ready to discuss your food service distribution business? Let&apos;s explore partnership and acquisition opportunities.
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
