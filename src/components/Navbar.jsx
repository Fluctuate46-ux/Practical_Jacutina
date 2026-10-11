import { NavLink } from 'react-router-dom';

export default function Navbar({ favoritesCount, darkMode, setDarkMode }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
      : "text-gray-300 hover:text-white pb-1 transition-colors";

  return (
    <nav className={`shadow-md px-6 py-4 transition-colors border-b ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-gray-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand / Logo on the Left */}
        <NavLink to="/" className="text-xl font-extrabold tracking-tight text-blue-500 flex items-center gap-2">
          TeamDirectory
        </NavLink>
        
        {/* Navigation Links and Controls on the Right */}
        <div className="flex items-center space-x-6 text-sm">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/users" className={linkClass}>Users</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          
          <div className="h-4 w-px bg-gray-600/30"></div>

          <span className="font-medium bg-blue-600 px-3 py-1 rounded-full text-white text-xs shadow-xs">
            Favorites: {favoritesCount}
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
              darkMode ? 'bg-slate-800 border-slate-700 text-gray-200 hover:bg-slate-700' : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}