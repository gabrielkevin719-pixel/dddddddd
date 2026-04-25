"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { ProgressHeader } from "@/components/progress-header";
import { QuestionCard } from "@/components/question-card";
import { SocialProof } from "@/components/social-proof";
import { QuizComplete } from "@/components/quiz-complete";
import { quizQuestions } from "@/lib/quiz-data";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <QuizComplete />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ProgressHeader
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        currentCategory={currentQuestion.category}
      />

      <main className="container mx-auto px-4 py-6 pb-24">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        </AnimatePresence>

        {/* Analyzing Message */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Dr. Carlos está analizando tu perfil médico...
        </p>
      </main>

      <SocialProof />
    </div>
  );
}
