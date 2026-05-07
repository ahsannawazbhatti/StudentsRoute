'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ParallaxCardProps {
  destination: {
    name: string;
    route: string;
    description?: string;
    popular?: boolean;
  };
  image: string;
  index: number;
  totalCards: number;
}

const ParallaxCard = ({ destination, image, index, totalCards }: ParallaxCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [2, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.3, 0.8, 1]);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center sticky top-4"
      style={{
        zIndex: totalCards + index,
      }}
    >
      <motion.div
        className="bg-white rounded-2xl overflow-hidden w-[min(1000px,90vw)] h-[500px] p-6 md:p-12"
        style={{
          opacity,
          y,
          position: 'absolute',
          top: `${index * 25}px`,
        }}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 font-kameron">Study in {destination.name}</h2>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-1">
            <div className="md:w-2/5 flex flex-col justify-center">
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">
                {destination.description || `Experience world-class education in ${destination.name}. Our comprehensive support ensures a smooth transition to your dream university.`}
              </p>
              <Link 
                href={`/destinations/${destination.route}`}
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="relative md:w-3/5 h-48 md:h-full rounded-2xl overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <img
                  src={image}
                  alt={`Study in ${destination.name}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {destination.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    Popular Choice
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ParallaxCard;