import Link from "next/link";
import Image from "next/image";
import {
  ChefHat,
  Users,
  Award,
  Check,
  ArrowRight,
  Sparkles,
  Utensils,
  Wine,
  Cake,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Wedding Catering",
      description:
        "Make your special day unforgettable with our bespoke wedding catering services",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      features: [
        "Custom menu design",
        "Tasting sessions",
        "Full service staff",
        "Table & décor setup",
        "Cake & desserts",
        "Bar services",
      ],
      color: "from-rose-500 to-pink-600",
      icon: Award,
    },
    {
      title: "Corporate Events",
      description:
        "Professional catering for business meetings, conferences, and company celebrations",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      features: [
        "Breakfast & lunch options",
        "Coffee break services",
        "Cocktail receptions",
        "Gala dinners",
        "On-time delivery",
        "Dietary accommodations",
      ],
      color: "from-blue-500 to-cyan-600",
      icon: Users,
    },
    {
      title: "Private Parties",
      description:
        "From birthdays to anniversaries, we make your celebrations memorable",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      features: [
        "Birthday parties",
        "Anniversary celebrations",
        "Graduation parties",
        "Holiday gatherings",
        "Intimate dinners",
        "Theme parties",
      ],
      color: "from-amber-500 to-orange-600",
      icon: Cake,
    },
    {
      title: "Fine Dining Experience",
      description: "Michelin-quality dining brought to your venue",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      features: [
        "Multi-course menus",
        "Wine pairing",
        "Private chef service",
        "Plated service",
        "Amuse-bouche",
        "Premium ingredients",
      ],
      color: "from-purple-500 to-indigo-600",
      icon: ChefHat,
    },
  ];

  const menuCategories = [
    {
      title: "Appetizers",
      icon: Utensils,
      items: [
        "Truffle Arancini with Parmesan Cream",
        "Seared Scallops with Citrus Beurre Blanc",
        "Beef Carpaccio with Arugula & Aged Parmesan",
        "Smoked Salmon Canapés with Dill Cream",
      ],
    },
    {
      title: "Main Courses",
      icon: ChefHat,
      items: [
        "Herb-Crusted Rack of Lamb",
        "Pan-Seared Chilean Sea Bass",
        "Beef Wellington with Red Wine Jus",
        "Vegetarian Risotto with Wild Mushrooms",
      ],
    },
    {
      title: "Desserts",
      icon: Cake,
      items: [
        "Chocolate Fondant with Vanilla Ice Cream",
        "Lemon Tart with Berry Compote",
        "Tiramisu with Espresso Caviar",
        "Seasonal Fruit Pavlova",
      ],
    },
    {
      title: "Beverages",
      icon: Wine,
      items: [
        "Curated Wine Selection",
        "Signature Cocktails",
        "Craft Beer Options",
        "Specialty Coffee & Tea",
      ],
    },
  ];

  const packages = [
    {
      name: "Essential",
      price: "$45",
      unit: "per person",
      features: [
        "3-course meal",
        "Standard table setup",
        "Basic bar service",
        "Professional wait staff",
        "4-hour service",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$75",
      unit: "per person",
      features: [
        "5-course meal",
        "Premium table setup",
        "Full bar service",
        "Dedicated event coordinator",
        "6-hour service",
        "Custom menu options",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$120",
      unit: "per person",
      features: [
        "7-course tasting menu",
        "Luxury table décor",
        "Premium bar & sommelier",
        "Personal chef & coordinator",
        "Unlimited service time",
        "Fully customized experience",
        "Live cooking stations",
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-800 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
              Comprehensive Catering Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Services & Menus
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we create culinary
            experiences that exceed expectations
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
              >
                <div className={`relative ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div
                    className={`absolute -top-6 ${isEven ? "-right-6" : "-left-6"} w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} p-5 shadow-xl`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                </div>

                <div
                  className={`space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>

                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${service.color} text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold mt-6`}
                  >
                    Request Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sample Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-rose-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Sample Menu
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A taste of what we can create for your event
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 mb-6">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {category.title}
                  </h3>

                  <ul className="space-y-3">
                    {category.items.map((item, iIndex) => (
                      <li
                        key={iIndex}
                        className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-amber-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              All menus are fully customizable to your preferences and dietary
              requirements
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
            >
              Customize Your Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Catering Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect package for your event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl ${
                  pkg.popular
                    ? "bg-gradient-to-br from-amber-600 to-rose-600 text-white shadow-2xl scale-105"
                    : "bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
                } transition-all duration-300 hover:scale-105`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 rounded-full bg-white text-amber-600 font-bold text-sm shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`text-3xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900 dark:text-white"}`}
                  >
                    {pkg.name}
                  </h3>
                  <div className="flex items-end justify-center gap-1">
                    <span
                      className={`text-5xl font-bold ${pkg.popular ? "text-white" : "bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent"}`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-lg mb-2 ${pkg.popular ? "text-white/80" : "text-gray-600 dark:text-gray-400"}`}
                    >
                      {pkg.unit}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          pkg.popular
                            ? "bg-white/20"
                            : "bg-amber-100 dark:bg-amber-900/30"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 ${pkg.popular ? "text-white" : "text-amber-600 dark:text-amber-400"}`}
                        />
                      </div>
                      <span
                        className={
                          pkg.popular
                            ? "text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-white text-amber-600 hover:shadow-xl"
                      : "bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-xl hover:scale-105"
                  }`}
                >
                  Select Package
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Minimum of 20 guests. Custom quotes available for larger events.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss your vision and create a custom package
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-amber-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg font-semibold"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
