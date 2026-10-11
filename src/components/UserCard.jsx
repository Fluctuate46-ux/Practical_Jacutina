import { Link } from 'react-router-dom';
import Button from './Button';

export default function UserCard({ id, name, email, company, isFavorite, onToggleFavorite, darkMode }) {
  return (
    <div className={`p-5 rounded-xl shadow-md border flex flex-col justify-between transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-blue-500 font-medium">{company}</p>
        <p className="text-xs text-gray-400 mt-1">{email}</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <Link to={`/users/${id}`} className="text-sm text-blue-500 hover:underline font-semibold">
          View Details
        </Link>
        <Button
          onClick={() => onToggleFavorite(id)}
          variant={isFavorite ? "danger" : "primary"}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
      </div>
    </div>
  );
}