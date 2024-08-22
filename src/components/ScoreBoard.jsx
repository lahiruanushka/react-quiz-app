import { useNavigate } from 'react-router-dom';

function ScoreBoard({ score }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Your Score</h1>
      <div className="text-6xl font-bold text-blue-600 mb-6">{score}</div>
      <button
        onClick={() => navigate('/')}
        className="py-3 px-6 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ScoreBoard;
