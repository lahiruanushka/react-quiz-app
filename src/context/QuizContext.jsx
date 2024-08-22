import { createContext, useState } from "react";
import { questions } from "../data/questions";

// Create the context
export const QuizContext = createContext();

// Define the provider component
export function QuizProvider({ children }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setTotalScore(totalScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        setCurrentQuestionIndex,
        selectedAnswers,
        totalScore,
        questions,
        handleAnswerSelect,
        handleNextQuestion,
        handlePreviousQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
