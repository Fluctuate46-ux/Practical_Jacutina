import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleFavorite = (userId) => {
    setFavorites(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar
        favoritesCount={favorites.length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/users" element={<Users favorites={favorites} onToggleFavorite={handleToggleFavorite} darkMode={darkMode} />} />
          <Route path="/users/:id" element={<UserDetails darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}