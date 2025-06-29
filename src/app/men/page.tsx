import Link from "next/link";
import Image from "next/image";

export default function MenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

            {/* Hero image */}
            <div className="absolute inset-0 bg-neutral-800 z-0">
              <Image
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop"
                alt="Men's Grooming Services"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container relative z-20">
          <div className="max-w-xl">
            <h1 className="text-white font-bold mb-4">
              Men's Grooming Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Exceptional haircuts, beard styling, and premium grooming services
              designed specifically for men.
            </p>
            <Link href="#booking" className="btn btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16" id="services">
        <div className="container">
          <h2 className="section-title">Our Services for Men</h2>
          <div className="section-subtitle">
            Premium grooming and styling services tailored for the modern man
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Haircuts Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                  alt="Men's Haircuts"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Haircuts</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Classic Cut
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Fade
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Undercut
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Buzz Cut
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Expert haircuts tailored to your face shape and personal
                  style.
                </p>
              </div>
            </div>

            {/* Beard Styling Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=2070&auto=format&fit=crop"
                  alt="Beard Styling"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Beard Styling</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Beard Trim
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Beard Shaping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hot Towel Shave
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Beard Coloring
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Professional beard grooming for a clean, polished look or bold
                  statement.
                </p>
              </div>
            </div>

            {/* Hair Treatments Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop"
                  alt="Hair Treatments"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Hair Treatments</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Anti-Hair Loss
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hair Coloring
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Scalp Treatments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hair & Scalp Detox
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Revitalize your hair and scalp with our specialized
                  treatments.
                </p>
              </div>
            </div>

            {/* Facials Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=1974&auto=format&fit=crop"
                  alt="Men's Facials"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Facials & Skincare
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Charcoal Facial
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Anti-Aging Facial
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Deep Cleansing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hydrating Treatment
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Specialized facial treatments designed specifically for men's
                  skin.
                </p>
              </div>
            </div>

            {/* Spa & Massage Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                  alt="Men's Spa & Massage"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Spa & Massage</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Deep Tissue Massage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Stress Relief Massage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sports Massage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hand & Foot Treatment
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Relax and rejuvenate with our premium spa and massage
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-neutral-100 py-16" id="pricing">
        <div className="container">
          <h2 className="section-title">Men's Services Pricing</h2>
          <div className="section-subtitle">
            Transparent pricing for all our premium services
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-left">Service</th>
                    <th className="py-4 px-6 text-center">Duration</th>
                    <th className="py-4 px-6 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Classic Haircut</td>
                    <td className="py-4 px-6 text-center">30 min</td>
                    <td className="py-4 px-6 text-right">$30</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Fade Haircut</td>
                    <td className="py-4 px-6 text-center">45 min</td>
                    <td className="py-4 px-6 text-right">$40</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Beard Trim</td>
                    <td className="py-4 px-6 text-center">20 min</td>
                    <td className="py-4 px-6 text-right">$20</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Luxury Beard Spa</td>
                    <td className="py-4 px-6 text-center">45 min</td>
                    <td className="py-4 px-6 text-right">$50</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">
                      Haircut + Beard Styling
                    </td>
                    <td className="py-4 px-6 text-center">60 min</td>
                    <td className="py-4 px-6 text-right">$55</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Charcoal Facial</td>
                    <td className="py-4 px-6 text-center">45 min</td>
                    <td className="py-4 px-6 text-right">$60</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Gold Facial</td>
                    <td className="py-4 px-6 text-center">60 min</td>
                    <td className="py-4 px-6 text-right">$80</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Head Massage</td>
                    <td className="py-4 px-6 text-center">30 min</td>
                    <td className="py-4 px-6 text-right">$40</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">
                      Premium Package (Haircut + Facial + Massage)
                    </td>
                    <td className="py-4 px-6 text-center">120 min</td>
                    <td className="py-4 px-6 text-right">$120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-6">
              All services include complimentary beverages and consultation.
              Prices may vary depending on hair length and service complexity.
            </p>
            <Link href="#booking" className="btn btn-primary">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-neutral-900 text-white py-16" id="booking">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Book Your Appointment
            </h2>
            <p className="text-gray-300 mb-8">
              Ready to experience our premium men's grooming services? Book your
              appointment now.
            </p>
            <Link
              href="/contact#booking"
              className="btn bg-accent text-white hover:bg-white hover:text-primary"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
