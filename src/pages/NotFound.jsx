import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
      <Link to="/" className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
}