export default function Loader() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      <span className="ml-3 text-lg font-medium text-gray-500">Loading...</span>
    </div>
  );
}