'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Calendar, Eye } from 'lucide-react';
import { getGalleries, getGalleryVideos } from '@/lib/api';
import Lightbox from '@/components/Lightbox';

export default function Galleries() {
  const galleries = getGalleries();
  const galleryVideos = getGalleryVideos();
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Flatten all images for lightbox
  const allImages = galleries.flatMap(gallery => gallery.images);
  const allVideos = galleryVideos.flatMap(gallery => gallery.videos);

  const openLightbox = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (allImages.length + allVideos.length));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length + allVideos.length) % (allImages.length + allVideos.length));
  };

  const filteredGalleries = selectedYear 
    ? galleries.filter(gallery => gallery.year === selectedYear)
    : galleries;

  const filteredVideos = selectedYear
    ? galleryVideos.filter(gallery => gallery.year === selectedYear)
    : galleryVideos;

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 heading-font dual-color-text">
          <span className="text-black">Study Expo </span>
          <span className="text-gradient">Galleries</span>
        </h1>
        <p className="text-lg text-gray-600 text-font max-w-2xl mx-auto">
          Explore our collection of memorable moments from study expos, student events, and success celebrations.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-6 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${
              activeTab === 'images'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span className="text-font">Images</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${
              activeTab === 'videos'
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <Play className="w-4 h-4" />
            <span className="text-font">Videos</span>
          </button>
        </div>
      </div>

      {/* Year Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              selectedYear === null
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Years
          </button>
          {[...new Set([...galleries.map(g => g.year), ...galleryVideos.map(g => g.year)])].map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                selectedYear === year
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'images' ? (
        <div className="space-y-12">
          {filteredGalleries.map((gallery, galleryIndex) => (
            <motion.div
              key={gallery.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: galleryIndex * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold heading-font">Study Expo {gallery.year}</h2>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm text-font">
                  {gallery.images.length} photos
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.images.map((image, imageIndex) => {
                  const globalIndex = galleries
                    .slice(0, galleryIndex)
                    .reduce((acc, g) => acc + g.images.length, 0) + imageIndex;
                  
                  return (
                    <motion.div
                      key={imageIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                      onClick={() => openLightbox(globalIndex)}
                    >
                      <img
                        src={image}
                        alt={`Study Expo ${gallery.year} - ${imageIndex + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {imageIndex + 1} / {gallery.images.length}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-12">
          {filteredVideos.map((gallery, galleryIndex) => (
            <motion.div
              key={gallery.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: galleryIndex * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold heading-font">Study Expo {gallery.year} Videos</h2>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm text-font">
                  {gallery.videos.length} videos
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.videos.map((video, videoIndex) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ scale: 1.02 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 heading-font">{video.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        images={allImages}
        videos={allVideos}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}