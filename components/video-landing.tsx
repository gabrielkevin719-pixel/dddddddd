"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Users, Radio, Rocket } from "lucide-react";

interface VideoLandingProps {
  onStartQuiz: () => void;
}

export function VideoLanding({ onStartQuiz }: VideoLandingProps) {
  const [viewerCount, setViewerCount] = useState(127);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(100, Math.min(150, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl"
      >
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Dr. Carlos Jaramillo - Consulta Médica Gratuita
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Antes de liberar el{" "}
          <strong className="text-primary">Protocolo Del Bicarbonato personalizado</strong>
        </p>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl mb-6">
          {/* Placeholder Video */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur cursor-pointer hover:bg-white/20 transition-all">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <p className="text-white/60 text-sm">Video de presentación</p>
            </div>
          </div>

          {/* Live Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur px-3 py-1.5">
            <div className="relative flex items-center gap-1.5">
              <Radio className="h-3.5 w-3.5 text-red-500 animate-pulse" />
              <span className="text-xs font-semibold text-white">EN VIVO</span>
            </div>
          </div>

          {/* Viewer Count */}
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur px-3 py-1.5">
            <Users className="h-3.5 w-3.5 text-white" />
            <span className="text-xs font-medium text-white">{viewerCount}</span>
            <span className="text-xs text-white/60">viendo</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartQuiz}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-4 px-6 shadow-lg shadow-primary/30 transition-all"
        >
          <Rocket className="h-5 w-5" />
          COMENZAR CONSULTA GRATUITA
        </motion.button>

        {/* Trust Badge */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          ✅ Dr. Carlos preparará tu versión personalizada • 100% Confidencial
        </p>
      </motion.div>
    </div>
  );
}
