import { useState, useEffect } from 'react';
import { users as initialUsers } from '../data/users';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

export default function Users({ favorites, onToggleFavorite, darkMode }) {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsersList(initialUsers);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = usersList.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`;
  }, [filteredUsers.length]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
          }`}
        />
      </div>

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found matching your search." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <UserCard
              key={user.id}
              {...user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={onToggleFavorite}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}