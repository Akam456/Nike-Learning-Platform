export default function Achievements() {
  return (
    <div>
      {/* Achievements Heading */}
      <h2 className="text-2xl text-black font-black mb-4">Achievements</h2>

      {/* Icon-based badges */}
      <div className="space-y-4">
        <div className="flex items-start space-x-1">
          <img
            src="/profile_images/VerifiedAnswer.svg"
            alt="Verified Answers Icon"
            className="w-6 h-6 object-contain"
          />
          <p className="text-sm font-semibold text-orange-600">Verified Answers</p>
        </div>
        <div className="flex items-start space-x-1">
          <img
            src="/profile_images/Contributor.svg"
            alt="Top Contributor Icon"
            className="w-6 h-6 object-contain"
          />
          <p className="text-sm font-semibold text-yellow-600">Top Contributor</p>
        </div>
      </div>

      {/* Hexagon-based badges */}
      <div className="space-y-4 mt-4">
        <div className="flex items-center space-x-3 border border-pink-300 rounded-lg p-2">
          <img
            src="/profile_images/PinkD.svg"
            alt="Completed 10 Courses"
            className="w-8 h-8 object-contain"
          />
          <p className="text-xs font-medium text-black">Completed 10 Courses</p>
        </div>
        <div className="flex items-center space-x-3 border border-yellow-300 rounded-lg p-2">
          <img
            src="/profile_images/OrangeD.svg"
            alt="Digital Literacy Mastery Badge"
            className="w-8 h-8 object-contain"
          />
          <p className="text-xs font-medium text-black">Digital Literacy Mastery Badge</p>
        </div>
        <div className="flex items-center space-x-3 border border-orange-300 rounded-lg p-2">
          <img
            src="/profile_images/RedD.svg"
            alt="Completed 10 Skill Exchanges"
            className="w-8 h-8 object-contain"
          />
          <p className="text-xs font-medium text-black">Completed 10 Skill Exchanges</p>
        </div>
      </div>
    </div>
  );
}
