import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <div className="mx-auto">
      {/* Main Layout: Two Columns */}
      <div className="grid grid-cols-4 gap-8">
        {/* Left Column: Skills & Content */}
        <div className="col-span-3 space-y-6">
          {/* Left Section: Profile Picture and Info */}
          <div className="flex items-center">
            {/* Profile Picture */}
            <div className="relative w-24 h-24">
              {/* Profile Picture */}
              <Image
                src="/skills_images/Anna_profile.png"
                alt="Profile Picture"
                className="rounded-full object-cover border-2 border-orange-600" // Orange border
                layout="fill"
              />
              {/* Star Badge */}
              <div className="absolute top-0 right-0 bg-orange-600 rounded-full p-1 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>

            {/* Profile Info */}
            <div className="ml-6">
              <h1 className="text-3xl font-black text-black">Anna</h1>
              <h2 className="text-xl font-bold text-gray-500">
                Insights & Analytics
              </h2>
              <img
                src="/profile_images/linkedin.png"
                alt="linkedin"
                className="h-6 object-contain"
              />
            </div>
          </div>

        </div>

        {/* Right Column: Achievements & Discussion */}
        <div className="space-y-6">
          {/* Right Section: Level Info */}
          <div className="bg-red-50 text-center p-4 rounded-lg flex items-center space-x-3">
            {/* Image Icon */}
            <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-full">
              <img
                src="/profile_images/logo.svg"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            {/* Level and Points Info */}
            <div className="text-left">
              <p className="text-xl font-bold text-gray-800">Level 7</p>
              <p className="text-md font-semibold text-orange-500">890 points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
