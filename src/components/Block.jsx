export default function Block({ children }) {
  return (
    <div className="p-6 bg-white shadow-md border border-gray-300 rounded-lg">
      {children}
    </div>
  );
}
