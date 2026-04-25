"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Lock } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export default function VSLPage() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after 20:44 (1244 seconds) when the product value is mentioned
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1244000);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "António García",
      avatar: "/images/dr-carlos.jpg",
      text: "Honestamente pensé que este tipo de cosas eran una estafa, pero maldita sea... ¡esta cosa realmente funciona! En menos de 1 semana me convertí en un toro en la cama y debo decir que estoy MUY feliz con los resultados. Mi esposa también.",
    },
    {
      name: "María Rodríguez",
      avatar: "/images/dr-carlos.jpg",
      text: "Mi esposo empezó a usar el protocolo hace 2 semanas y la diferencia es increíble. Nunca lo había visto con tanta energía y vitalidad. ¡Gracias Dr. Carlos!",
    },
    {
      name: "Carlos Mendez",
      avatar: "/images/dr-carlos.jpg",
      text: "Tenía muchas dudas, pero decidí intentarlo. Después de solo 5 días noté cambios significativos. El Doctor sabe lo que hace. 100% recomendado.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src="/images/dr-carlos.jpg"
                alt="Dr. Carlos Jaramillo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Diagnóstico finalizado</p>
              <p className="text-xs text-muted-foreground">Dr. Carlos Jaramillo</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Completo</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8"
        >
          Mira lo que el <span className="text-primary">Doctor</span> tiene que decir sobre tu diagnóstico
        </motion.h1>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-69ec4a6579a9b357d90e3042" style="display: block; margin: 0 auto; width: 100%; max-width: 100%;"></vturb-smartplayer>`,
              }}
            />
          </div>
          <Script
            src="https://scripts.converteai.net/1b27179a-ba8a-4485-adab-86acabe00490/players/69ec4a6579a9b357d90e3042/v4/player.js"
            strategy="afterInteractive"
          />
        </motion.div>

        {/* CTA Button - Shows after delay or always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showButton ? 1 : 0.5, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <motion.button
            whileHover={showButton ? { scale: 1.02 } : {}}
            whileTap={showButton ? { scale: 0.98 } : {}}
            onClick={() => showButton && router.push("/oferta")}
            disabled={!showButton}
            className={`w-full flex items-center justify-center gap-3 rounded-xl font-bold text-lg py-5 px-6 shadow-lg transition-all ${
              showButton
                ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/30 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <Lock className="h-5 w-5" />
            {showButton ? "VER MI PROTOCOLO PERSONALIZADO" : "Mira el video para continuar..."}
            {showButton && <ArrowRight className="h-5 w-5" />}
          </motion.button>
          {!showButton && (
            <p className="text-center text-xs text-muted-foreground mt-2">
              El botón se desbloqueará mientras miras el video
            </p>
          )}
        </motion.div>

        {/* User Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-bold text-foreground mb-4">Comentarios de Usuarios</h2>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex gap-3"
              >
                <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.text.split("En menos de 1 semana").map((part, i) =>
                      i === 0 ? (
                        part
                      ) : (
                        <span key={i}>
                          <span className="text-primary font-medium">En menos de 1 semana</span>
                          {part}
                        </span>
                      )
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Sticky Bottom CTA for Mobile */}
      {showButton && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 md:hidden z-50">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/oferta")}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 shadow-lg shadow-primary/30 transition-all"
          >
            <Lock className="h-5 w-5" />
            VER MI PROTOCOLO
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      )}
    </div>
  );
}
