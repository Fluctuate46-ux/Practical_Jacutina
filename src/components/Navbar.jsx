import { NavLink } from 'react-router-dom';

export default function Navbar({ favoritesCount, darkMode, setDarkMode }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
      : "hover:text-blue-400 pb-1 transition-colors";

  return (
    <nav className={`shadow-md px-6 py-4 transition-colors ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-800 text-white'}`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold tracking-wide">Team Directory</h1>
        
        <div className="flex items-center space-x-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/users" className={linkClass}>Users</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          
          <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full text-white">
            Favorites: {favoritesCount}
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-xs transition-colors"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}