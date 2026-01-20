import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  Heart,
  Target,
  ChefHat,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Chef Marcus Williams",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
      bio: "20+ years of Michelin-starred experience",
    },
    {
      name: "Sarah Anderson",
      role: "Event Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Specialist in luxury weddings and corporate events",
    },
    {
      name: "David Chen",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
      bio: "Award-winning dessert artisan",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Ensuring seamless event execution",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every dish and every detail",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for food and events drives everything we do",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to bring visions to life",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly evolving with creative culinary experiences",
      color: "from-violet-500 to-purple-600",
    },
  ];

  const milestones = [
    { year: "2008", event: "Founded by Chef Marcus" },
    { year: "2012", event: "Expanded to corporate catering" },
    { year: "2016", event: "Won Regional Catering Award" },
    { year: "2020", event: "Reached 500+ successful events" },
    { year: "2024", event: "Opened second kitchen facility" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                Tasteful Events
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Crafting extraordinary culinary experiences for over 15 years
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                  alt="Our restaurant"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded in 2008 by Chef Marcus Williams, Tasteful Events began
                with a simple vision: to create extraordinary culinary
                experiences that transform ordinary occasions into unforgettable
                memories.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                What started as a small catering service has grown into a
                full-service event planning and catering company, serving over
                500 events annually. Our team of passionate professionals brings
                together decades of experience in fine dining, event management,
                and hospitality.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe that food is more than sustenance—it's an art form, a
                conversation starter, and a memory maker. Every event we cater
                is an opportunity to showcase our commitment to excellence,
                creativity, and impeccable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-4 mb-6`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our story
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-8 group">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 group-hover:scale-150 transition-transform duration-300" />
                <div className="flex-grow p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-xl transition-all">
                  <p className="text-lg text-gray-900 dark:text-white font-medium">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-rose-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The talented people behind your perfect event
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-amber-300 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Catering Service",
                year: "2023",
                org: "Regional Food Awards",
              },
              {
                title: "Excellence in Events",
                year: "2022",
                org: "Hospitality Association",
              },
              {
                title: "Top Rated Caterer",
                year: "2021",
                org: "Wedding Excellence Awards",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 font-semibold mb-1">
                  {award.year}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s create something amazing together
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-amber-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
