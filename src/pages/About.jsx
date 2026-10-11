export default function About({ darkMode }) {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">About Team Directory</h1>
      <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        This application was built as a Laboratory Activity using React (Vite + Tailwind CSS) and React Router DOM. It features user filtering, state management, simulated async loading, favorites tracking, and custom routing.
      </p>
    </div>
  );
}