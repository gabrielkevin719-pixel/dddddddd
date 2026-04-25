"use client";

import { Clock, AlertCircle } from "lucide-react";
import { categories } from "@/lib/quiz-data";

interface ProgressHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  currentCategory: string;
}

export function ProgressHeader({
  currentQuestion,
  totalQuestions,
  currentCategory,
}: ProgressHeaderProps) {
  const progress = (currentQuestion / totalQuestions) * 100;
  const remainingMinutes = Math.ceil((totalQuestions - currentQuestion + 1) * 0.5);
  const obstructionPercent = Math.max(85 - Math.floor(progress * 0.3), 55);

  return (
    <div className="w-full bg-white border-b border-border">
      {/* Category Pills */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => {
            const isActive = cat.id === currentCategory;
            const isPast = categories.findIndex((c) => c.id === currentCategory) > index;
            return (
              <div
                key={cat.id}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : isPast
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Info */}
      <div className="container mx-auto px-4 pb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">
              Pregunta <span className="text-primary">{currentQuestion}</span> de{" "}
              {totalQuestions}
            </span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {categories.find((c) => c.id === currentCategory)?.label}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-xs">{remainingMinutes} min restantes</span>
            </div>
            <div className="flex items-center gap-1 text-destructive">
              <AlertCircle className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">{obstructionPercent}% obstruido</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Labels */}
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Inicio</span>
          <span className="font-medium text-primary">{Math.round(progress)}% completado</span>
          <span>Protocolo Listo</span>
        </div>
      </div>
    </div>
  );
}
