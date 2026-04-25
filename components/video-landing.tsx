"use client";

import { motion } from "framer-motion";
import { Check, Clock, Lock, Sparkles, Star } from "lucide-react";
import Image from "next/image";

interface VideoLandingProps {
  onStartQuiz: () => void;
}

export function VideoLanding({ onStartQuiz }: VideoLandingProps) {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg text-center"
      >
        {/* Doctor Profile Photo */}
        <div className="relative inline-block mb-4">
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white z-10" />
          
          {/* Profile image container */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 relative">
            <Image
              src="/images/dr-carlos.jpg"
              alt="Dr. Carlos Jaramillo"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          {/* Verified badge */}
          <div className="absolute -bottom-1 right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-white">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Doctor Name */}
        <h2 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2 mb-1">
          Dr. Carlos Jaramillo
          <span className="text-primary">
            <Check className="w-5 h-5" />
          </span>
        </h2>

        {/* Ratings */}
        <p className="text-sm text-muted-foreground mb-8">
          150 mil valoraciones · 4.8/5{" "}
          <Star className="w-4 h-4 inline text-yellow-500 fill-yellow-500" />
        </p>

        {/* Main Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
          Descubre los 3 ingredientes del truco del bicarbonato
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-6">
          Recibirás la preparación exacta calibrada para{" "}
          <strong className="text-foreground">tu peso</strong>,{" "}
          <strong className="text-foreground">tu edad</strong> y{" "}
          <strong className="text-foreground">tu nivel de bloqueo</strong>.
        </p>

        {/* Sparkle Icon */}
        <div className="flex justify-center mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>

        {/* Protocol Text */}
        <p className="text-primary text-sm mb-8">
          Protocolo personalizado del Dr. Carlos — gratis y confidencial
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartQuiz}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-4 px-6 shadow-lg shadow-primary/30 transition-all"
        >
          RECIBIR MI PREPARACIÓN PERSONALIZADA →
        </motion.button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            1 minuto
          </span>
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5" />
            Solo tú lo verás
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            100% gratis
          </span>
        </div>
      </motion.div>
    </div>
  );
}
