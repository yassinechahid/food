"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, MapPin, Heart, ArrowRight, Filter } from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "weddings", "corporate", "private", "galas"];

  const events = [
    {
      title: "Elegant Garden Wedding",
      category: "weddings",
      guests: 150,
      location: "Botanical Gardens",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      description: "A magical outdoor celebration with farm-to-table cuisine"
    },
    {
      title: "Corporate Gala Dinner",
      category: "corporate",
      guests: 300,
      location: "Grand Ballroom",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      description: "Annual awards ceremony with seven-course tasting menu"
    },
    {
      title: "Intimate Birthday Celebration",
      category: "private",
      guests: 30,
      location: "Private Estate",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      description: "Personalized Italian-themed dinner party"
    },
    {
      title: "Luxury Wedding Reception",
      category: "weddings",
      guests: 200,
      location: "Waterfront Venue",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      description: "Romantic seaside celebration with live cooking stations"
    },
    {
      title: "Tech Summit Conference",
      category: "corporate",
      guests: 500,
      location: "Convention Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      description: "Multi-day conference catering with diverse menu options"
    },
    {
      title: "Anniversary Gala",
      category: "galas",
      guests: 250,
      location: "Historic Mansion",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop",
      description: "50th anniversary celebration with vintage-inspired menu"
    },
    {
      title: "Product Launch Party",
      category: "corporate",
      guests: 180,
      location: "Modern Gallery",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
      description: "Contemporary cocktail reception with innovative small plates"
    },
    {
      title: "Rustic Barn Wedding",
      category: "weddings",
      guests: 120,
      location: "Countryside Barn",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8c8b0?w=800&h=600&fit=crop",
      description: "Charming country wedding with comfort food elevated"
    },
    {
      title: "Charity Fundraising Gala",
      category: "galas",
      guests: 400,
      location: "City Hotel",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      description: "Black-tie event with silent auction and gourmet dinner"
    },
    {
      title: "Family Reunion Celebration",
      category: "private",
      guests: 80,
      location: "Lake House",
      image: "https://images.unsplash.com/photo-1529543544-b4f383302a46?w=800&h=600&fit=crop",
      description: "Multi-generational gathering with diverse menu selections"
    },
    {
      title: "Executive Business Dinner",
      category: "corporate",
      guests: 40,
      location: "Private Dining Room",
      image: "https://images.unsplash.com/photo-1515518115645-7c0071d42c59?w=800&h=600&fit=crop",
      description: "Intimate fine dining experience for board members"
    },
    {
      title: "Spring Garden Wedding",
      category: "weddings",
      guests: 175,
      location: "Estate Gardens",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      description: "Elegant spring celebration with seasonal ingredients"
    },
  ];

  const filteredEvents = selectedCategory === "all" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              Event Gallery
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our portfolio of unforgettable events and celebrations
          </p>

          {/* Category Filter */}
          <div className="inline-flex items-center gap-2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent capitalize">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="text-sm">{event.guests} Guests</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No events found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-rose-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Events Catered
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Client Satisfaction
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Guests Served
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                20+
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Unique Venues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-orange-400/20 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-3xl p-12 bg-gradient-to-br from-amber-600 to-rose-600 text-white text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Create Your Own Memorable Event
              </h2>
              
              <p className="text-xl mb-8 opacity-90">
                Let's bring your vision to life with our exceptional catering and planning services
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-amber-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg font-semibold"
              >
                Start Planning
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
