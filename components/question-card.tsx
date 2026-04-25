"use client";

import { motion } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";
import type { QuizQuestion } from "@/lib/quiz-data";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (optionId: string) => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-gradient-to-b from-secondary/50 to-white rounded-2xl border border-border p-6 shadow-sm">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-8 w-8 text-primary" />
          </div>
        </div>

        {/* Category Label */}
        <div className="flex justify-center mb-3">
          <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            {question.categoryLabel}
          </span>
        </div>

        {/* Question */}
        <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-6">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onAnswer(option.id)}
              className="w-full flex items-center justify-between gap-3 rounded-xl border-2 border-warning/50 bg-white p-4 text-left transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.emoji}</span>
                <span className="font-medium text-foreground">{option.text}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
