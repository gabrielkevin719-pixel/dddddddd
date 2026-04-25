"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Star, 
  AlertTriangle,
  Gift,
  Flame,
  Users,
  Award,
  ArrowRight,
  Lock,
  Zap,
  Heart,
  BookOpen
} from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";

export default function OfertaPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Roberto M.",
      age: 52,
      location: "Madrid",
      text: "Despues de 3 semanas siguiendo el protocolo, mi energia ha mejorado drasticamente. Mi esposa nota la diferencia.",
      rating: 5,
    },
    {
      name: "Carlos P.",
      age: 47,
      location: "Barcelona",
      text: "Probe muchas cosas antes sin exito. El protocolo del Dr. Carlos fue lo unico que realmente funciono para mi.",
      rating: 5,
    },
    {
      name: "Miguel A.",
      age: 58,
      location: "Valencia",
      text: "En solo 7 dias empece a sentir los cambios. Ahora me siento como hace 15 anos. Increible!",
      rating: 5,
    },
  ];

  const benefits = [
    { icon: Zap, text: "Aumento de energia y vitalidad en 7 dias" },
    { icon: Heart, text: "Mejora de la circulacion sanguinea" },
    { icon: Shield, text: "Fortalecimiento del sistema inmunologico" },
    { icon: Flame, text: "Aceleracion del metabolismo" },
    { icon: Star, text: "Resultados comprobados cientificamente" },
    { icon: Clock, text: "Solo 5 minutos al dia" },
  ];

  const bonuses = [
    {
      title: "Guia de Alimentacion Alcalina",
      value: "$47",
      description: "Plan de comidas de 30 dias para potenciar los resultados",
    },
    {
      title: "Video Masterclass Exclusiva",
      value: "$97",
      description: "3 horas de contenido con el Dr. Carlos Jaramillo",
    },
    {
      title: "Acceso al Grupo Privado",
      value: "$67",
      description: "Comunidad de apoyo con otros participantes",
    },
    {
      title: "Consulta de Seguimiento",
      value: "$150",
      description: "Sesion personalizada de 30 minutos",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Urgency Banner */}
      <div className="bg-destructive text-white py-3 px-4 text-center sticky top-14 z-40">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-sm font-semibold">
            OFERTA EXPIRA EN: {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-sm">|</span>
          <span className="text-sm">Solo quedan {spotsLeft} lugares disponibles</span>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            Tu Protocolo Personalizado Esta Listo
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            El Protocolo Del Bicarbonato Del Dr. Carlos Jaramillo
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Basado en tus respuestas, hemos creado un plan personalizado que puede transformar tu
            salud en solo 21 dias.
          </p>

          {/* Compatibility Score */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-foreground">Tu Compatibilidad</span>
              <span className="text-2xl font-bold text-primary">94%</span>
            </div>
            <div className="h-3 bg-white rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-primary rounded-full"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Excelente compatibilidad con el protocolo
            </p>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/20 transition-all">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-white text-lg font-medium">
                  Mira como funciona el Protocolo
                </p>
                <p className="text-white/60 text-sm mt-1">Duracion: 8 minutos</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">
            Lo Que Obtendras Con El Protocolo
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">
            Resultados Reales De Personas Reales
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-border">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.age} anos, {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bonuses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gift className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Bonos Exclusivos Incluidos
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-primary/20 flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{bonus.title}</h3>
                      <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full line-through">
                        {bonus.value}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{bonus.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-primary font-semibold mt-4">
              Valor Total de Bonos: $361 - GRATIS HOY
            </p>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <div className="bg-white rounded-2xl border-2 border-primary p-6 md:p-8 text-center relative overflow-hidden">
            {/* Best Value Badge */}
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
              MEJOR VALOR
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-2">
              Acceso Completo Al Protocolo
            </h2>
            <p className="text-muted-foreground mb-6">
              Todo lo que necesitas para transformar tu salud
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-muted-foreground line-through">$197</span>
                <span className="text-5xl font-bold text-primary">$99</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Pago unico - Sin suscripciones ocultas
              </p>
            </div>

            {/* What's Included */}
            <div className="text-left mb-6 space-y-3">
              {[
                "Protocolo Del Bicarbonato Personalizado",
                "Guia de Alimentacion Alcalina ($47 valor)",
                "Video Masterclass Exclusiva ($97 valor)",
                "Acceso al Grupo Privado ($67 valor)",
                "Consulta de Seguimiento ($150 valor)",
                "Garantia de 60 dias",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://pay.mycheckoutt.com/019dadf8-7741-7094-8690-6b05edd52fc8?ref="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-5 px-6 shadow-lg shadow-primary/30 transition-all mb-4"
            >
              <Lock className="h-5 w-5" />
              OBTENER MI PROTOCOLO AHORA
              <ArrowRight className="h-5 w-5" />
            </motion.a>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>Garantia 60 Dias</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>+10,000 Clientes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-10"
        >
          <div className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              Garantia de Satisfaccion de 60 Dias
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Si no ves resultados en 60 dias, te devolvemos el 100% de tu dinero. Sin preguntas,
              sin complicaciones. Tu satisfaccion es nuestra prioridad.
            </p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Es seguro el Protocolo Del Bicarbonato?",
                a: "Si, el protocolo utiliza ingredientes 100% naturales y ha sido desarrollado por el Dr. Carlos Jaramillo, un experto reconocido en medicina funcional.",
              },
              {
                q: "Cuanto tiempo tarda en verse resultados?",
                a: "La mayoria de nuestros clientes reportan mejoras significativas en los primeros 7-14 dias siguiendo el protocolo correctamente.",
              },
              {
                q: "Necesito receta medica?",
                a: "No, el protocolo no requiere receta medica ya que utiliza ingredientes naturales disponibles en cualquier tienda.",
              },
              {
                q: "Que pasa si no funciona para mi?",
                a: "Tienes nuestra garantia de 60 dias. Si no estas satisfecho por cualquier razon, te devolvemos el 100% de tu dinero.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center pb-8"
        >
          <motion.a
            href="https://pay.mycheckoutt.com/019dadf8-7741-7094-8690-6b05edd52fc8?ref="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-md mx-auto flex items-center justify-center gap-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-5 px-6 shadow-lg shadow-primary/30 transition-all"
          >
            <Flame className="h-5 w-5" />
            SI, QUIERO TRANSFORMAR MI SALUD
            <ArrowRight className="h-5 w-5" />
          </motion.a>
          <p className="text-sm text-muted-foreground mt-4">
            Solo quedan {spotsLeft} lugares al precio de oferta
          </p>
        </motion.div>
      </main>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 md:hidden z-50">
        <motion.a
          href="https://pay.mycheckoutt.com/019dadf8-7741-7094-8690-6b05edd52fc8?ref="
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 shadow-lg shadow-primary/30 transition-all"
        >
          <Lock className="h-5 w-5" />
          OBTENER PROTOCOLO - $99
        </motion.a>
      </div>
    </div>
  );
}
