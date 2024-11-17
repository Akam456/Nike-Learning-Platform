export function LargeVideoCard({ title, thumbnailUrl }) {
  return (
    <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover justify-center"
      />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 w-full">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
}
