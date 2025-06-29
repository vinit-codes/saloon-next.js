import Link from "next/link";
import Image from "next/image";

export default function WomenPage() {
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
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1969&auto=format&fit=crop"
                alt="Women's Beauty Services"
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
              Women's Beauty Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium hair styling, coloring, skincare, and spa treatments
              tailored for women.
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
          <h2 className="section-title">Our Services for Women</h2>
          <div className="section-subtitle">
            Luxurious beauty and wellness services tailored for the modern woman
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Haircuts Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop"
                  alt="Women's Haircuts"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Haircuts & Styling
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
                    Haircut & Blowdry
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
                    Styling & Updos
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
                    Hair Extensions
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
                    Bridal Hair
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Expert haircuts and styling services to suit your personal
                  style and face shape.
                </p>
              </div>
            </div>

            {/* Hair Coloring Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2070&auto=format&fit=crop"
                  alt="Hair Coloring & Treatments"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Hair Coloring & Treatments
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
                    Full Color
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
                    Highlights & Balayage
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
                    Ombre & Sombre
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
                    Color Correction
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Transform your look with our premium coloring services using
                  high-quality products.
                </p>
              </div>
            </div>

            {/* Facials & Skin Care */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                  alt="Women's Facials & Skin Care"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Facials & Skin Care
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
                    Hydrating Facial
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
                    Anti-Aging Treatment
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
                    Acne Treatment
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
                    Skin Brightening
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Rejuvenate your skin with our premium facial and skincare
                  treatments.
                </p>
              </div>
            </div>

            {/* Spa & Relaxation Service */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
                  alt="Women's Spa & Relaxation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Spa & Relaxation</h3>
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
                    Swedish Massage
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
                    Hot Stone Massage
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
                    Aromatherapy
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
                    Body Treatments
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Indulge in our premium spa services designed to relax and
                  rejuvenate your body and mind.
                </p>
              </div>
            </div>

            {/* Nail Services */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop"
                  alt="Nail Services"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Nail Services</h3>
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
                    Manicure
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
                    Pedicure
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
                    Gel Polish
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
                    Nail Art
                  </li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Pamper your hands and feet with our comprehensive nail care
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
          <h2 className="section-title">Women's Services Pricing</h2>
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
                    <td className="py-4 px-6 font-medium">Haircut & Styling</td>
                    <td className="py-4 px-6 text-center">60 min</td>
                    <td className="py-4 px-6 text-right">$60</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">
                      Blow Dry & Styling
                    </td>
                    <td className="py-4 px-6 text-center">45 min</td>
                    <td className="py-4 px-6 text-right">$45</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Root Color</td>
                    <td className="py-4 px-6 text-center">90 min</td>
                    <td className="py-4 px-6 text-right">$85</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Full Highlights</td>
                    <td className="py-4 px-6 text-center">150 min</td>
                    <td className="py-4 px-6 text-right">$150</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Balayage</td>
                    <td className="py-4 px-6 text-center">180 min</td>
                    <td className="py-4 px-6 text-right">$180</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Keratin Treatment</td>
                    <td className="py-4 px-6 text-center">120 min</td>
                    <td className="py-4 px-6 text-right">$200</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Hydrating Facial</td>
                    <td className="py-4 px-6 text-center">60 min</td>
                    <td className="py-4 px-6 text-right">$80</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Gold Facial</td>
                    <td className="py-4 px-6 text-center">75 min</td>
                    <td className="py-4 px-6 text-right">$120</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Full Body Massage</td>
                    <td className="py-4 px-6 text-center">90 min</td>
                    <td className="py-4 px-6 text-right">$110</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-neutral-50">
                    <td className="py-4 px-6 font-medium">
                      Manicure & Pedicure
                    </td>
                    <td className="py-4 px-6 text-center">90 min</td>
                    <td className="py-4 px-6 text-right">$75</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">
                      Premium Package (Haircut + Color + Facial)
                    </td>
                    <td className="py-4 px-6 text-center">4 hours</td>
                    <td className="py-4 px-6 text-right">$260</td>
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
      <section className="bg-white py-16" id="booking">
        <div className="container">
          <h2 className="section-title">Book Your Appointment</h2>
          <div className="section-subtitle">
            Reserve your spot for a premium beauty experience
          </div>

          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-lg text-gray-700 mb-8">
              Ready to experience our premium women's beauty services? Book your
              appointment now using our online booking system or contact us
              directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#booking" className="btn btn-primary">
                Online Booking
              </Link>
              <a href="tel:1234567890" className="btn btn-outline">
                Call Us: (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
