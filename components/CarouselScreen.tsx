"use client";
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import features from '@/lib/features';
import { FloatingHeartsContainer } from '@/lib/floatingheart';

const CarouselScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Single FloatingHeartsContainer instance */}
      <div className="absolute inset-0 items-center justify-center">
      </div>
      
      {/* Main content */}
      <FloatingHeartsContainer/>
      <div className="relative z-10 w-full"> {/* Added z-index and relative positioning */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto"
          >
            <Card className={`${features[currentIndex].color} shadow-lg border-2 border-pink-200`}>
              <CardContent className="p-6">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-video relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={features[currentIndex].imgSrc}
                    width={800}
                    height={500}
                    alt="Valentine memory"
                    className="w-full h-full object-fit shadow-md" /* Changed object-fit to object-cover */
                  />
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg sm:text-xl text-center font-semibold text-pink-800 leading-relaxed mt-4"
                >
                  {features[currentIndex].text}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselScreen;