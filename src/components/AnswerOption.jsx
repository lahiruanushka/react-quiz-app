function AnswerOption({ option, isSelected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className={`w-full py-3 px-5 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out shadow-md ${
        isSelected ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-700 shadow-sm'
      } hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      {option}
    </button>
  );
}

export default AnswerOption;
