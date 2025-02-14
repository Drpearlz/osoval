"use client";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from './WelcomeScreen';
import CarouselScreen from './CarouselScreen';

const ValentineCarousel = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className='bg-gradient-to-b fixed inset-0 overflow-hidden'>
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen onContinue={() => setShowWelcome(false)} />
        ) : (
          <CarouselScreen />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentineCarousel;
