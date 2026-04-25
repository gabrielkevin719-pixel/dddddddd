"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./header";
import { ProgressHeader } from "./progress-header";
import { QuestionCard } from "./question-card";
import { SocialProof } from "./social-proof";
import { VideoLanding } from "./video-landing";
import { QuizComplete } from "./quiz-complete";
import { quizQuestions } from "@/lib/quiz-data";

type QuizState = "landing" | "quiz" | "complete";

export function Quiz() {
  const [state, setState] = useState<QuizState>("landing");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handleStartQuiz = () => {
    setState("quiz");
  };

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setState("complete");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {state === "landing" && <VideoLanding onStartQuiz={handleStartQuiz} />}

      {state === "quiz" && (
        <>
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
        </>
      )}

      {state === "complete" && <QuizComplete />}
    </div>
  );
}
