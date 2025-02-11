"use client";
import FloatingHeart from "@/lib/floatingheart";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface WelcomeScreenProps {
    onContinue: () => void;
  }
  const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => {
    const hearts = [0, 1, 2, 3, 4, 5, 6];
    
    return (
      <motion.div 
        className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {hearts.map((heart) => (
          <FloatingHeart key={heart} />
        ))}
        
        <motion.div
          className="text-center z-10 max-w-lg mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 mb-4">
            Welcome
          </h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-8 px-4"
          >
            VAL OF PEGGY
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Button 
              onClick={onContinue}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-xl rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Continue to Your Valentine ❤️
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
  export default WelcomeScreen;