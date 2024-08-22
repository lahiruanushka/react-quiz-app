function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-6">Page Not Found</p>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="py-3 px-6 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFoundPage;
