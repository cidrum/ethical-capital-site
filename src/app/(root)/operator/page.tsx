import Image from "next/image";
import Link from "next/link";

export default function OperatorPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="max-w-4xl">
            <h1 className="font-source-serif text-[64px] leading-[110%] text-dark-blue">
              We are professionals who are shaped by values and driven to succeed.
            </h1>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Operator Profile */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-blue-marine"></div>
              <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                our team
              </div>
            </div>
            <h2 className="uppercase text-blue-marine tracking-[2px] font-inter text-lg font-medium">
              Operator
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <Image
                src="/images/ryan-kania-small-business-owner.png"
                alt="Ryan Kania - Operator"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-blue-marine"></div>
                  <div className="uppercase text-blue-marine tracking-[2px] font-inter text-sm font-medium">
                    Founder & Operator
                  </div>
                </div>
                <h2 className="text-[36px] leading-[110%] font-source-serif text-dark-blue mb-6">
                  Ryan Kania
                </h2>
              </div>

              <p className="text-lg leading-[160%]">
                Ryan Kania is a serial entrepreneur with over 15 years of experience founding, operating, and scaling small to mid-sized businesses. His track record includes successfully leading two businesses to over $10M in annual revenue.
              </p>

              <div className="space-y-4">
                <h3 className="text-[24px] leading-[135%] font-source-serif text-blue-marine">
                  Professional Background
                </h3>
                <ul className="space-y-3 text-lg leading-[160%]">
                  <li>• Founded and led Surgical Resources Group (healthcare equipment)</li>
                  <li>• Founded and led Advocates for World Health (global health advocacy)</li>
                  <li>• Both businesses achieved $10M+ annual revenue</li>
                  <li>• Expertise in healthcare services, distribution, and liquidation</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-[24px] leading-[135%] font-source-serif text-blue-marine">
                  Education
                </h3>
                <ul className="space-y-3 text-lg leading-[160%]">
                  <li>• MBA, Northwestern University Kellogg School of Management (with distinction)</li>
                  <li>• BS in Economics & Finance, University of South Florida</li>
                  <li>• Fall 2010 Outstanding Graduate, USF</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Operational Philosophy */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[60px] leading-[105%] text-blue-marine font-source-serif mb-6">
                Hands-On Operational Approach
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-[160%]">
                As a serial entrepreneur, Ryan brings direct operational experience to every acquisition. He understands the challenges of running a small business because he&apos;s built and scaled multiple companies from the ground up.
              </p>
              <p className="text-lg leading-[160%]">
                This hands-on approach means working directly with management teams, implementing proven systems, and making strategic decisions based on real-world experience—not just financial models.
              </p>
              <p className="text-lg leading-[160%]">
                The goal is always sustainable growth that benefits employees, customers, and the community, not just short-term financial returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32"></div>

      {/* Core Strengths */}
      <section className="w-full">
        <div className="max-w-[1120px] mx-auto px-[3.33%]">
          <div className="mb-12">
            <h2 className="text-[60px] leading-[105%] text-blue-marine font-source-serif">
              Core Operational Strengths
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-marine-10 p-10">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Business Development
              </h3>
              <p className="text-lg leading-[160%]">
                Proven ability to identify growth opportunities, develop strategic partnerships, and expand market reach.
              </p>
            </div>

            <div className="bg-blue-marine-10 p-10">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Operations Management
              </h3>
              <p className="text-lg leading-[160%]">
                Experience optimizing processes, implementing systems, and driving operational efficiency.
              </p>
            </div>

            <div className="bg-blue-marine-10 p-10">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Financial Stewardship
              </h3>
              <p className="text-lg leading-[160%]">
                Strong financial acumen with focus on profitability, cash flow, and sustainable growth.
              </p>
            </div>

            <div className="bg-blue-marine-10 p-10">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Team Leadership
              </h3>
              <p className="text-lg leading-[160%]">
                Track record of building, motivating, and retaining high-performing teams.
              </p>
            </div>

            <div className="bg-blue-marine-10 p-10">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Strategic Planning
              </h3>
              <p className="text-lg leading-[160%]">
                MBA-level strategic thinking applied to real-world business challenges.
              </p>
            </div>

            <div className="bg-blue-marine-10 p-10">
              <h3 className="text-[28px] leading-[135%] font-source-serif text-blue-marine mb-4">
                Healthcare Expertise
              </h3>
              <p className="text-lg leading-[160%]">
                Deep understanding of healthcare services, equipment, and distribution industries.
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
                Interested in discussing how operational expertise can benefit your business transition?
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
