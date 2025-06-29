import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

            {/* Hero image */}
            <div className="absolute inset-0 bg-neutral-800 z-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
                alt="The Salon"
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
              Style. Elegance. Confidence.
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience premium salon services tailored for both men and women
              at The Salon.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#booking" className="btn btn-primary">
                Book Now
              </Link>
              <Link
                href="#services"
                className="btn btn-outline !text-white border-white hover:border-accent"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-neutral-100" id="about">
        <div className="container">
          <h2 className="section-title">About The Salon</h2>
          <div className="section-subtitle">
            Where style meets sophistication for both men and women
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <div>
              <div className="aspect-square relative bg-neutral-300 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop"
                  alt="The Salon Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Premium Salon Experience
              </h3>
              <p className="text-gray-700 mb-6">
                Established in 2010, The Salon has been providing exceptional
                beauty and grooming services to discerning clients. Our highly
                trained stylists and beauty therapists are dedicated to
                delivering personalized services that enhance your natural
                beauty.
              </p>
              <p className="text-gray-700 mb-6">
                We pride ourselves on our welcoming atmosphere, attention to
                detail, and use of premium products. Whether you're looking for
                a simple trim or a complete makeover, our team is committed to
                exceeding your expectations.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-white" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="section-subtitle">
            Tailored services for both men and women
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Men's Services */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] shadow-sm hover:shadow-md">
              <div className="h-64 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                  alt="Men's Grooming Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Men's Services</h3>
                <p className="text-gray-700 mb-6">
                  Classic and modern haircuts, beard grooming, hair treatments,
                  and relaxing spa services tailored for men.
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href="/men"
                    className="font-medium text-accent hover:underline"
                  >
                    View All Services
                  </Link>
                  <Link
                    href="/contact#booking"
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Women's Services */}
            <div className="bg-neutral-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] shadow-sm hover:shadow-md">
              <div className="h-64 relative bg-neutral-300">
                <Image
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2070&auto=format&fit=crop"
                  alt="Women's Beauty Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Women's Services
                </h3>
                <p className="text-gray-700 mb-6">
                  Premium hairstyling, coloring, skincare treatments, and spa
                  services tailored for women.
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href="/women"
                    className="font-medium text-accent hover:underline"
                  >
                    View All Services
                  </Link>
                  <Link
                    href="/contact#booking"
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-100">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="section-subtitle">
            What our clients say about our services
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-neutral-300 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop"
                    alt="John Doe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The haircut was fantastic. The stylist really listened to what
                I wanted and delivered beyond my expectations. Highly
                recommend!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-neutral-300 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076&auto=format&fit=crop"
                    alt="Jane Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jane Smith</h4>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I had a wonderful experience at The Salon. The staff is
                professional and friendly. My new hair color looks amazing!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-neutral-300 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2087&auto=format&fit=crop"
                    alt="Robert Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The hot towel shave and haircut was an incredible experience.
                The attention to detail was impressive. Will definitely return!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
