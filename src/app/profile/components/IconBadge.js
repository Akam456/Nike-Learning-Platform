export default function IconBadge({ icon, label, textColor }) {
  const icons = {
    star: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    award: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C7.589 2 4 5.589 4 10s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
        <path d="M11 14h2v-4h-2v4zm-1-6h4v-2h-4v2z" />
      </svg>
    ),
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`flex items-center justify-center ${textColor}`}>
        {icons[icon]}
      </div>
      <span className={`text-sm font-semibold ${textColor}`}>{label}</span>
    </div>
  );
}
