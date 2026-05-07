'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileCheck, GraduationCap, Plane, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import ParallaxCard from '@/components/ParallaxCard';
import { 
  getServices, 
  getDestinations, 
  getHeroSlides, 
  getUpdateImages 
} from '@/lib/api';

// Icon mapping for services
const iconMap = {
  GraduationCap,
  FileCheck,
  Plane,
  BookOpen,
  Users
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Get data from API
  const services = getServices();
  const destinations = getDestinations();
  const heroSlides = getHeroSlides();
  const updateImages = getUpdateImages();
  
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(services.length - 1) * 100}%`]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[100vh] hero-slider"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl font-bold mb-6 heading-font"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8 text-font"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/apply" className="btn-primary inline-flex items-center space-x-2 hover:scale-105 transition-transform">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative" style={{ height: `${(services.length +2)* 100}vh` }}>
        <div className="services-container">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
            <h2 className="text-4xl font-bold text-center heading-font dual-color-text">
              <span className="text-black">Our </span>
              <span className="text-gradient">Services</span>
            </h2>
          </div>
          
<motion.div 
  className="services-track flex"
  style={{ x }}
>
  {/* Blank initial screen */}
  <div className="flex-shrink-0 w-[50vw]" />

  {services.map((service, index) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap];
    return (
      <div 
        key={index} 
        className="service-card flex-shrink-0 w-[20vw] flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-12 rounded-2xl shadow-2xl max-w-4xl text-center"
        >
          <IconComponent className="w-20 h-20 text-primary mb-8 mx-auto" />
          <h3 className="text-3xl font-bold mb-6 heading-font text-gray-800">{service.title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-font max-w-2xl mx-auto">
            {service.description}
          </p>
        </motion.div>
      </div>
    );
  })}
</motion.div>


        </div>
      </section>

      {/* Study Destinations Section with Card Stacking Animation */}
      <section className="relative bg-gray-50 destination-section">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center py-12 heading-font dual-color-text"
          >
            <span className="text-black">Study </span>
            <span className="text-gradient">Destinations</span>
          </motion.h2>
          <div className="relative hidden md:block" style={{ height: `${destinations.length * 100}vh` }}>
            {destinations.map((destination, index) => (
              <ParallaxCard
                key={destination.route}
                destination={destination}
                image={destination.image}
                index={index}
                totalCards={destinations.length}
              />
            ))}
          </div>

          {/* Mobile Responsive Grid */}
          <div className="md:hidden grid grid-cols-1 gap-8 pb-12">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.route}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={`Study in ${destination.name}`}
                    className="w-full h-full object-cover"
                  />
                  {destination.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                        Popular Choice
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 heading-font">Study in {destination.name}</h3>
                  <p className="text-gray-600 mb-4 text-font">
                    Experience world-class education in {destination.name}. Our comprehensive support ensures a smooth transition to your dream university.
                  </p>
                  <Link 
                    href={`/destinations/${destination.route}`}
                    className="inline-flex items-center text-primary font-semibold hover:underline"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO's Message Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="CEO"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="mt-4 text-center font-semibold">John Smith</p>
              <p className="text-center text-gray-600">CEO, StudentsRoute</p>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 prose max-w-none"
            >
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Message from Our </span>
                <span className="text-gradient">CEO</span>
              </h2>
              <p className="text-lg mb-6 text-font">
                Welcome to StudentsRoute, your trusted partner in international education. For over a decade, we have been dedicated to helping students achieve their dreams of studying abroad and building successful careers.
              </p>
              <p className="mb-6 text-font">
                Our commitment to excellence, integrity, and student success has made us one of the most respected names in educational consultancy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ICEF Agency Status Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 heading-font">ICEF Agency Status</h2>
          <p className="text-xl mb-8 text-font">The global quality standard for international education agencies.</p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </motion.section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 heading-font dual-color-text"
          >
            <span className="text-black">Latest </span>
            <span className="text-gradient">Updates</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {updateImages.map((imgUrl, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={imgUrl}
                  alt="Update"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 heading-font">Latest Education News</h3>
                  <p className="text-gray-600 mb-4 text-font">Stay updated with the latest trends and opportunities in international education.</p>
                  <Link href="/updates" className="text-primary font-semibold hover:underline">
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}