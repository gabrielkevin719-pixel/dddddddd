"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Script from "next/script";

interface VideoLandingProps {
  onStartQuiz: () => void;
}

export function VideoLanding({ onStartQuiz }: VideoLandingProps) {
  useEffect(() => {
    // Initialize VTurb player timing
    if (typeof window !== "undefined") {
      (window as Window & { _plt?: number })._plt =
        (window as Window & { _plt?: number })._plt ||
        (performance && performance.timeOrigin
          ? performance.timeOrigin + performance.now()
          : Date.now());
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 py-8">
      {/* VTurb Player Script */}
      <Script
        src="https://scripts.converteai.net/1b27179a-ba8a-4485-adab-86acabe00490/players/69ec3cb779a9b357d90e199b/v4/player.js"
        strategy="afterInteractive"
      />

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

        {/* VTurb Video Player */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl mb-6">
          <div
            dangerouslySetInnerHTML={{
              __html: `<vturb-smartplayer id="vid-69ec3cb779a9b357d90e199b" style="display: block; margin: 0 auto; width: 100%; max-width: 100%;"></vturb-smartplayer>`,
            }}
          />
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
