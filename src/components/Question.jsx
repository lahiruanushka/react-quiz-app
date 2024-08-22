import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import AnswerOption from './AnswerOption';

function Question() {
  const { questions, currentQuestionIndex, handleAnswerSelect, selectedAnswers } = useContext(QuizContext);
  const question = questions[currentQuestionIndex];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedAnswers[currentQuestionIndex] === option}
            onSelect={() => handleAnswerSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
