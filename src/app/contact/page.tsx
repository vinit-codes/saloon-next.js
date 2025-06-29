"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "haircut",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "haircut",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

            {/* Placeholder for hero image - replace with your own */}
            <div className="absolute inset-0 bg-neutral-800 z-0">
              {/* When you have an actual image, uncomment this:
              <Image 
                src="/images/contact-hero.jpg" 
                alt="Contact Elegance Salon"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
              */}
            </div>
          </div>
        </div>

        <div className="container relative z-20">
          <div className="max-w-xl">
            <h1 className="text-white font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with our team for appointments, inquiries, or
              feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-neutral-100 p-6 rounded-lg text-center">
              <div className="w-14 h-14 mx-auto bg-accent rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-gray-700">
                123 Beauty Street
                <br />
                Salon City, SC 12345
                <br />
                United States
              </p>
            </div>

            {/* Contact */}
            <div className="bg-neutral-100 p-6 rounded-lg text-center">
              <div className="w-14 h-14 mx-auto bg-accent rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@elegancesalon.com
              </p>
            </div>

            {/* Hours */}
            <div className="bg-neutral-100 p-6 rounded-lg text-center">
              <div className="w-14 h-14 mx-auto bg-accent rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <ul className="text-gray-700 space-y-1">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-100 py-16">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="section-subtitle">
            We're conveniently located in the heart of the city
          </div>

          <div className="mt-12 h-[400px] bg-neutral-300 rounded-lg overflow-hidden">
            {/* Google Maps Placeholder */}
            {/* Replace this with actual Google Maps embed code */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-primary mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-lg">
                  Google Maps Integration
                  <br />
                  <span className="text-sm text-gray-600">
                    To add Google Maps, replace this placeholder with the embed
                    code from Google Maps
                  </span>
                </p>
              </div>
            </div>

            {/* Uncomment and replace with your actual Google Maps embed code
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0MyJzAuMCJOIDcwwrAzJzAuMCJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            */}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16" id="booking">
        <div className="container">
          <h2 className="section-title">Book an Appointment</h2>
          <div className="section-subtitle">
            Fill out the form below to schedule your appointment
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            {isSubmitted ? (
              <div className="text-center p-8 bg-green-50 rounded-lg">
                <svg
                  className="w-16 h-16 text-green-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-700 mb-6">
                  Your appointment request has been received. We'll contact you
                  shortly to confirm your booking.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-neutral-100 p-8 rounded-lg"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="haircut">Haircut</option>
                      <option value="coloring">Hair Coloring</option>
                      <option value="styling">Styling</option>
                      <option value="facial">Facial</option>
                      <option value="massage">Massage</option>
                      <option value="nails">Nail Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Any specific requirements or preferred time for appointment"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Book Appointment"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Have Questions?
              </h2>
              <p className="text-gray-300">
                Our friendly staff is here to help with any inquiries you may
                have.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="tel:1234567890"
                className="btn bg-white text-primary hover:bg-accent hover:text-white"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
