import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8 mt-20">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto mb-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-playfair leading-tight">
            Ethics drive prosperous acquisition entrepreneurs.
          </h1>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/images/Untitled-design.png"
            alt="Building successful businesses through strategic acquisitions"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            As a serial entrepreneur with a strategic mindset, I actively seek multiple small business acquisition opportunities
            and distressed commercial real estate properties. With extensive expertise in healthcare services and a strong network,
            I aim to unlock the full potential of acquired ventures, ensuring prosperity for businesses and stakeholders alike.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="w-full max-w-7xl mx-auto mb-24 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              Multiple Acquisition Targets
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              I&apos;m building a portfolio of profitable small businesses across healthcare services, wholesale distribution,
              and liquidation services. Each acquisition represents an opportunity to apply proven operational expertise
              and drive sustainable growth.
            </p>
            <p className="text-lg text-gray-700">
              Beyond operating businesses, I specialize in acquiring distressed commercial real estate, particularly flex warehouses,
              where strategic repositioning creates significant value.
            </p>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm uppercase tracking-wider text-gray-600">Investment Focus</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">What I&apos;m Acquiring</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/industries" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Small Businesses</h3>
              <p className="text-gray-700 mb-4">
                Healthcare services, wholesale distribution, and liquidation services SMBs with strong fundamentals
                and growth potential.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/real-estate" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Flex Warehouses</h3>
              <p className="text-gray-700 mb-4">
                Distressed commercial real estate properties, particularly flex warehouses offering unique value creation opportunities.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/operator" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Proven Operator</h3>
              <p className="text-gray-700 mb-4">
                15+ years of experience successfully founding and leading businesses to $10M+ revenue with strategic expertise.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-7xl mx-auto py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Discuss Your Business or Property?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re considering selling your small business or have a distressed commercial property,
          let&apos;s explore how we can work together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="tel:+13522634219"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Call: (352) 263-4219
          </Link>
        </div>
      </div>
    </section>
  );
}
