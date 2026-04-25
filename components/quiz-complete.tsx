"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, ArrowRight, Shield, Clock, Star } from "lucide-react";

export function QuizComplete() {
  const [analyzing, setAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setAnalyzing(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  if (analyzing) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md text-center"
        >
          <div className="bg-white rounded-2xl border border-border p-8 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Loader2 className="h-16 w-16 text-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{progress}%</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">
              Analizando tus respuestas...
            </h2>
            <p className="text-muted-foreground mb-6">
              El Dr. Carlos está preparando tu protocolo personalizado
            </p>

            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/80"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className={progress > 30 ? "text-primary" : ""}>
                ✓ Evaluando perfil demográfico...
              </p>
              <p className={progress > 50 ? "text-primary" : ""}>
                ✓ Analizando estilo de vida...
              </p>
              <p className={progress > 70 ? "text-primary" : ""}>
                ✓ Calculando protocolo óptimo...
              </p>
              <p className={progress > 90 ? "text-primary" : ""}>
                ✓ Preparando recomendaciones...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <div className="bg-white rounded-2xl border border-border p-8 shadow-lg">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
            >
              <CheckCircle className="h-10 w-10 text-primary" />
            </motion.div>
          </div>

          <h2 className="text-2xl font-bold text-center text-foreground mb-2">
            ¡Tu Protocolo Está Listo!
          </h2>
          <p className="text-center text-muted-foreground mb-6">
            El Dr. Carlos Jaramillo ha preparado un protocolo personalizado basado en tus
            respuestas.
          </p>

          {/* Protocol Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-secondary rounded-xl">
              <Shield className="h-6 w-6 text-primary mx-auto mb-1" />
              <span className="text-xs text-muted-foreground">100% Natural</span>
            </div>
            <div className="text-center p-3 bg-secondary rounded-xl">
              <Clock className="h-6 w-6 text-primary mx-auto mb-1" />
              <span className="text-xs text-muted-foreground">Resultados en 7 días</span>
            </div>
            <div className="text-center p-3 bg-secondary rounded-xl">
              <Star className="h-6 w-6 text-primary mx-auto mb-1" />
              <span className="text-xs text-muted-foreground">97% Efectividad</span>
            </div>
          </div>

          {/* Compatibility Score */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Compatibilidad con el Protocolo
              </span>
              <span className="text-lg font-bold text-primary">94%</span>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full w-[94%] bg-primary rounded-full" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Tu perfil es altamente compatible con el Protocolo del Bicarbonato
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-4 px-6 shadow-lg shadow-primary/30 transition-all"
          >
            VER MI PROTOCOLO PERSONALIZADO
            <ArrowRight className="h-5 w-5" />
          </motion.button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 Información 100% confidencial y segura
          </p>
        </div>
      </motion.div>
    </div>
  );
}
