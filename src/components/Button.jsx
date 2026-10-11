export default function Button({ label, onClick, variant = "primary", children }) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${variants[variant] || variants.primary}`}
    >
      {label || children}
    </button>
  );
}