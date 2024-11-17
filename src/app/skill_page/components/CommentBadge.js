import React from "react";

const CommentBadge = ({ count }) => {
  return (
    <div className="flex items-center space-x-2 bg-orange-100 p-2 rounded-lg">
      {/* Speech Bubble Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0-4.418-4.03-8-9-8S3 7.582 3 12c0 3.86 3.141 7.063 7.25 7.898-.996.91-2.203 1.858-2.25 2.057 0 0 3.584-.35 5-1.404 2.638.68 4.954-.678 6.672-1.805A8.963 8.963 0 0021 12z"
        />
      </svg>
      {/* Dynamic Count */}
      <span className="text-orange-500 font-bold text-lg">{count}</span>
    </div>
  );
};

export default CommentBadge;
