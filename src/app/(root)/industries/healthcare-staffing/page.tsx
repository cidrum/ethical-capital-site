import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare Staffing & Recruiting Acquisitions",
  description: "Seeking to acquire healthcare staffing agencies placing nurses, therapists, and medical professionals in hospitals and healthcare facilities.",
};

export default function HealthcareStaffingPage() {
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
              Healthcare Staffing & Recruiting Acquisitions
            </h1>
            <p className="text-xl leading-[160%] text-dark-blue-70">
              Acquiring healthcare staffing agencies placing nurses, therapists, and medical professionals in temporary and permanent positions.
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
                  We seek established healthcare staffing agencies with strong candidate databases, client relationships
                  with hospitals and facilities, and proven recruiting systems for medical professionals.
                </p>
                <p>
                  Target businesses include agencies specializing in nursing staff, allied health professionals, therapists,
                  and other clinical positions through temporary, travel, or permanent placement models.
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
                  <span>Large database of qualified healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Multi-year contracts with hospital systems and facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Specialized recruiting and credentialing processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Strong gross margins on placements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-marine mr-3 text-2xl">•</span>
                  <span>Compliance with licensing and regulatory requirements</span>
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
            Why Healthcare Staffing?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">01</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Labor Shortage
              </h3>
              <p className="text-base leading-[160%]">
                Ongoing healthcare worker shortages create consistent demand for temporary and permanent staffing solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">02</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                Recurring Needs
              </h3>
              <p className="text-base leading-[160%]">
                Facilities require continuous staffing support for vacancies, seasonal needs, and special projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[48px] font-playfair text-blue-sky">03</div>
              <h3 className="text-[24px] leading-[135%] font-source-serif text-dark-blue">
                High Margins
              </h3>
              <p className="text-base leading-[160%]">
                Healthcare staffing agencies typically maintain strong gross margins on placements due to specialized skills.
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
                  <p className="text-lg leading-[160%]">Established agencies with 5+ years of operating history</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Client Relationships</h4>
                  <p className="text-lg leading-[160%]">Diversified client base with multi-year staffing agreements</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-marine mb-2">Growth Opportunity</h4>
                  <p className="text-lg leading-[160%]">Potential for specialty expansion and new market penetration</p>
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
                Ready to discuss your healthcare staffing agency? Let&apos;s explore partnership opportunities together.
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
