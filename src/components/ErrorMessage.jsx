export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center my-6">
      <p className="font-semibold">{message || "Something went wrong!"}</p>
    </div>
  );
}