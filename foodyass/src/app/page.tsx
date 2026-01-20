import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Utensils,
  Calendar,
  Award,
  Star,
  Phone,
  Mail,
  ChefHat,
  Sparkles,
  Heart,
  Users,
  Clock,
  Check,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Gourmet Catering",
      description:
        "Exquisite culinary experiences crafted by award-winning chefs",
      icon: ChefHat,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Event Planning",
      description:
        "Comprehensive planning for weddings, corporate events, and celebrations",
      icon: Calendar,
      color: "from-rose-500 to-pink-600",
    },
    {
      title: "Custom Menus",
      description:
        "Personalized menus tailored to your taste and dietary preferences",
      icon: Utensils,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Premium Service",
      description: "White-glove service with attention to every detail",
      icon: Award,
      color: "from-violet-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Client",
      content:
        "Absolutely phenomenal! They transformed our wedding into a magical experience. Every detail was perfect!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Corporate Event",
      content:
        "Professional, creative, and delicious. Our company event was a huge success thanks to their expertise.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Emma Rodriguez",
      role: "Birthday Party",
      content:
        "The food was incredible and the presentation was stunning. Highly recommend for any special occasion!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ];

  const stats = [
    { label: "Events Catered", value: "500+", icon: Calendar },
    { label: "Happy Clients", value: "350+", icon: Heart },
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Team Members", value: "25+", icon: Users },
  ];

  const features = [
    "Professional event coordination",
    "Custom menu creation",
    "Dietary accommodations",
    "Full-service catering",
    "Table & venue setup",
    "Expert culinary team",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-800">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                    Premium Food & Event Services
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  Creating Unforgettable
                  <span className="block bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    Culinary Experiences
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  Transform your special occasions into extraordinary memories
                  with our exceptional catering and event planning services.
                  From intimate gatherings to grand celebrations.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
                >
                  Book Your Event
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-amber-600 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300 text-lg font-semibold"
                >
                  View Services
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex items-center gap-6 pt-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:info@tastefulevents.com"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">info@tastefulevents.com</span>
                </a>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/30 to-rose-400/30 blur-3xl" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=800&fit=crop"
                    alt="Gourmet food presentation"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2 text-amber-600">
                      <Award className="w-6 h-6" />
                      <div>
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-4 shadow-xl animate-bounce-slow">
                  <ChefHat className="w-full h-full text-white" />
                </div>

                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 p-3 shadow-xl animate-bounce-delayed">
                  <Heart className="w-full h-full text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-4 group-hover:shadow-lg transition-shadow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for all your catering and event planning
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 mt-6 text-amber-600 dark:text-amber-400 font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-rose-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                  alt="Restaurant kitchen"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <span className="font-bold text-gray-900 dark:text-white">
                    Fast Service
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Response within 24 hours for all inquiries
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We bring passion, expertise, and creativity to every event we
                cater
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold mt-6"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don&apos;t just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-100 to-amber-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Recent Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A glimpse into our stunning work
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop",
            ].map((src, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Event ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-orange-400/20 rounded-3xl blur-3xl" />

            <div className="relative rounded-3xl p-12 bg-gradient-to-br from-amber-600 to-rose-600 text-white text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Create Magic?
                </h2>

                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Let's start planning your perfect event today. Get in touch
                  for a free consultation and custom quote.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-amber-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
