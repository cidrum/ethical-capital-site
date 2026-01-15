import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Durable Medical Equipment (DME) Acquisitions",
  description: "Seeking to acquire DME providers serving patients and healthcare facilities with wheelchairs, oxygen equipment, hospital beds, and home medical devices.",
};

export default function DMEPage() {
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
              Durable Medical Equipment (DME) Acquisitions
            </h1>
            <p className="text-xl leading-[160%] text-dark-blue-70">
              Acquiring DME providers offering wheelchairs, oxygen equipment, hospital beds, walkers, and home medical devices to patients and facilities.
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
                  We seek established DME providers with strong relationships with physicians, hospitals, and insurance payers,
                  delivering essential medical equipment to patients at home or in care facilities.
                </p>
                <p>
                  Target businesses include providers of mobility equipment, respiratory therapy devices, hospital beds,
                  patient lifts, and other durable medical equipment with repair and maintenance service capabilities.
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
                  <span>Medicare/Medicaid and commercial insurance billing expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Physician referral network and hospital discharge relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Repair and maintenance service capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Delivery and setup infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>HIPAA compliance and proper accreditation</span>
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
            Why Durable Medical Equipment?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">01</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Aging Demographics
              </h3>
              <p className="text-base leading-[160%]">
                Growing elderly population drives increasing demand for mobility aids, oxygen equipment, and home care devices.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">02</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Recurring Revenue
              </h3>
              <p className="text-base leading-[160%]">
                Rentals, consumables, repairs, and replacement parts create ongoing revenue beyond initial equipment sales.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">03</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Essential Service
              </h3>
              <p className="text-base leading-[160%]">
                DME enables patients to live independently and recover at home, making it a critical healthcare service.
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
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Payer Mix</h4>
                  <p className="text-lg leading-[160%]">Diversified payer sources including Medicare, Medicaid, and commercial insurance</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Growth Opportunity</h4>
                  <p className="text-lg leading-[160%]">Potential for geographic expansion and product line additions</p>
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
                Ready to discuss your DME business? Let&apos;s explore how we can work together for mutual success.
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
