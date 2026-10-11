import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { users } from '../data/users';
import ErrorMessage from '../components/ErrorMessage';

export default function UserDetails({ darkMode }) {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = users.find(u => u.id === parseInt(id));
    setUser(foundUser || null);

    if (foundUser) {
      document.title = foundUser.name;
    } else {
      document.title = "User Not Found";
    }
  }, [id]);

  if (!user) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-center">
        <ErrorMessage message="User not found." />
        <Link to="/users" className="text-blue-500 hover:underline mt-4 inline-block font-medium">
          &larr; Back to Users
        </Link>
      </div>
    );
  }

 return (
    <div className={`max-w-2xl mx-auto my-10 p-8 rounded-xl shadow-md border transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
      <Link to="/users" className="text-sm text-blue-500 hover:underline mb-6 inline-block font-semibold">
        &larr; Back to Users
      </Link>
      <h2 className="text-3xl font-extrabold mb-2">{user.name}</h2>
      <p className="text-blue-500 font-semibold mb-4">{user.role}</p>
      
      <div className="space-y-2 text-sm border-t pt-4">
        <p><span className="font-bold">Email:</span> {user.email}</p>
        <p><span className="font-bold">Company:</span> {user.company}</p>
      </div>
    </div>
  );
}