import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Welcome to the Quiz
      </h1>
      <Link to="/quiz">
        <button className="py-3 px-6 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
