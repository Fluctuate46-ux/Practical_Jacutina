import { Link } from 'react-router-dom';

export default function Home({ darkMode }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-500 font-semibold text-xs rounded-full mb-4">
          Directory Management System
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Welcome to the Team Directory
        </h1>
        <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Easily browse through team members, inspect detailed staff profiles, filter contacts in real time, and manage your preferred team member bookmarks all in one place.
        </p>
        <div className="flex items-center gap-4">
          <Link 
            to="/users" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all text-sm"
          >
            Explore Directory &rarr;
          </Link>
          <Link 
            to="/about" 
            className={`px-6 py-3 font-semibold rounded-xl transition-all text-sm border ${
              darkMode ? 'border-slate-700 text-gray-300 hover:bg-slate-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}