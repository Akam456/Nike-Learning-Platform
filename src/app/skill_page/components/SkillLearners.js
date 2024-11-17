const SkillLearners = ({ count, learners }) => {
  return (
    <div className="w-56 h-70 border border-gray-200 rounded-lg p-4 font-sans flex flex-col shadow-sm">
      {/* Icon */}
      <div className="mb-2">
        <img
          src="/skill_page_images/People_icon.png"
          alt="Icon representing multiple people"
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Header */}
      <div className="mb-3">
        <p className="text-xl font-semibold text-gray-900">{count} people have learned this skill</p>
      </div>

      {/* Learners */}
      <div className="w-full">
        <p className="text-gray-500 text-md mb-2">Recent Learners</p>
        <div className="space-y-2">
          {learners.map((learner, index) => (
            <div
              key={index}
              className="flex items-center border border-gray-200 rounded-lg p-2"
            >
              <img
                src={learner.image}
                alt={learner.name}
                className="w-8 h-8 rounded-full border border-red-400 mr-2"
              />
              <p className="text-lg font-medium text-gray-900">{learner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillLearners;
