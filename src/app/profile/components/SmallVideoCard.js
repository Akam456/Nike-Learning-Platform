export function SmallVideoCard({ title, subtitle, description, thumbnailUrl }) {
  return (
    <div className="grid grid-cols-7 items-center gap-4 bg-white rounded-lg">
      {/* Left: Thumbnail without border */}
      <div className="relative col-span-2">
        <h3 className="text-sm text-center font-bold text-gray-800">
          Video Title
        </h3>
        <div className="relative w-full h-16">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white bg-black bg-opacity-50 rounded-full p-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right: Text with border */}
      <div className="col-span-5 border border-gray-300 rounded-lg p-2">
        <h3 className="text-sm font-bold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}
