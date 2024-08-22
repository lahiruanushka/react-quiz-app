function NavigationButtons({ currentQuestionIndex, totalQuestions, onNext, onPrevious, onFinish }) {
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="flex justify-between mt-6">
      <button
        disabled={currentQuestionIndex === 0}
        onClick={onPrevious}
        className={`py-2 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 ease-in-out ${
          currentQuestionIndex === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Previous
      </button>
      <button
        onClick={isLastQuestion ? onFinish : onNext}
        className={`py-2 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 ease-in-out ${
          isLastQuestion ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isLastQuestion ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

export default NavigationButtons;
