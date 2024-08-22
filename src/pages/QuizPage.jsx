import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import Question from "../components/Question";
import NavigationButtons from '../components/NavigationButtons';

function QuizPage() {
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, setCurrentQuestionIndex } = useContext(QuizContext);

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

  const handleFinishQuiz = () => {
    navigate('/results');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 min-h-screen flex flex-col justify-center">
      <Question />
      <NavigationButtons
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onNext={handleNextQuestion}
        onPrevious={handlePreviousQuestion}
        onFinish={handleFinishQuiz}
      />
    </div>
  );
}

export default QuizPage;
