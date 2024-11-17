export default function HexagonBadge({ iconColor, borderColor, label }) {
    return (
      <div
        className={`flex items-center border rounded-lg p-2 ${borderColor} space-x-2`}
      >
        <div className={`flex items-center justify-center ${iconColor}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l5 9-5 9-5-9 5-9z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-800">{label}</span>
      </div>
    );
  }
  