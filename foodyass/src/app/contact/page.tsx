"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Utensils,
  DollarSign,
} from "lucide-react";
import LabeledInput from "@/components/LabeledInput";
import LabeledTextArea from "@/components/LabeledTextArea";
import LabeledInputCalendar from "@/components/LabeledInputCalendar";
import PhoneNumberInputField from "@/components/PhoneNumberInputField";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    budget: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        budget: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Let&apos;s
            <span className="block bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Ready to create something amazing? Get in touch and let&apos;s start
            planning your perfect event
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-5 md:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Get In Touch
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  We&apos;d love to hear from you. Fill out the form or reach
                  out through any of our contact channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                <a
                  href="tel:+212522123456"
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      +212 522-123456
                    </p>
                    <p className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 mt-1">
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@tastefulevents.com"
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      info@tastefulevents.com
                    </p>
                    <p className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 mt-1">
                      24-hour response time
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                      Location
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Boulevard Moulay Youssef
                      <br />
                      Casablanca, Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Mon-Fri: 9am - 6pm
                      <br />
                      Sat: 10am - 4pm
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="hidden lg:block rounded-2xl overflow-hidden shadow-xl h-48 md:h-64 border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212670.97658544458!2d-7.789490550000001!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1709308900000!5m2!1sen!2sma"
                  className="w-full h-full border-0"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 lg:self-start bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Request a Quote
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-emerald-800 dark:text-emerald-200">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                  {/* Name Input */}
                  <LabeledInput
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    bgColor="bg-white dark:bg-gray-800"
                    className="w-full"
                  />

                  {/* Email Input */}
                  <LabeledInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    bgColor="bg-white dark:bg-gray-800"
                    className="w-full"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                  {/* Phone Input */}
                  <PhoneNumberInputField
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />

                  {/* Event Type Select */}
                  <div className="relative">
                    <div className="relative">
                      <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant pointer-events-none z-10" />
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 h-14 rounded-xl border-2 border-light-outline dark:border-dark-outline bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest text-light-onSurface dark:text-dark-onSurface focus:border-light-primary dark:focus:border-dark-primary focus:ring-0 transition-all appearance-none cursor-pointer">
                        <option value="" disabled>
                          Select event type
                        </option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Party</option>
                        <option value="gala">Gala</option>
                        <option value="other">Other</option>
                      </select>
                      <label
                        htmlFor="eventType"
                        className={`absolute left-3 bg-light-surface dark:bg-dark-surface px-1 text-xs font-medium transition-all duration-200 pointer-events-none ${
                          formData.eventType
                            ? "-top-2.5 text-light-primary dark:text-dark-primary"
                            : "-top-2.5 text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant"
                        }`}>
                        Event Type *
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                  {/* Event Date */}
                  <LabeledInputCalendar
                    label="Event Date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    isOldDaysBlocked={true}
                    bgColor="bg-white dark:bg-gray-800"
                    className="w-full"
                  />

                  {/* Number of Guests */}
                  <LabeledInput
                    label="Number of Guests"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    bgColor="bg-white dark:bg-gray-800"
                    className="w-full"
                  />
                </div>

                {/* Budget Select */}
                <div className="relative">
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant pointer-events-none z-10" />
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 h-14 rounded-xl border-2 border-light-outline dark:border-dark-outline bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest text-light-onSurface dark:text-dark-onSurface focus:border-light-primary dark:focus:border-dark-primary focus:ring-0 transition-all appearance-none cursor-pointer">
                      <option value="">Select budget range</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-20000">$10,000 - $20,000</option>
                      <option value="20000+">$20,000+</option>
                    </select>
                    <label
                      htmlFor="budget"
                      className="absolute -top-2.5 left-3 bg-light-surface dark:bg-dark-surface px-1 text-xs font-medium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant pointer-events-none">
                      Budget Range (Optional)
                    </label>
                  </div>
                </div>

                {/* Message Textarea */}
                <LabeledTextArea
                  label="Additional Details"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  bgColor="bg-white dark:bg-gray-800"
                  className="w-full"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-base sm:text-lg font-semibold">
                  <Send className="w-5 h-5" />
                  Send Request
                </button>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                  We&apos;ll respond within 24 hours with a custom quote
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-rose-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 3-6 months in advance, especially for weddings and large events. However, we can accommodate shorter timelines based on availability.",
              },
              {
                q: "Do you accommodate dietary restrictions?",
                a: "Absolutely! We specialize in creating custom menus for all dietary needs including vegan, vegetarian, gluten-free, and allergy-specific requirements.",
              },
              {
                q: "What's included in your catering service?",
                a: "Our full-service catering includes menu planning, food preparation, professional staff, table setup, and cleanup. We can customize packages based on your needs.",
              },
              {
                q: "Do you provide tastings?",
                a: "Yes! We offer complimentary tastings for events with 50+ guests. For smaller events, tastings are available for a nominal fee that's credited toward your final invoice.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
