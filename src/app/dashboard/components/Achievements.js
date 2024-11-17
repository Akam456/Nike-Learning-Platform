export default function Achievements() {
    const badges = [
      { label: 'Digital Literacy Mastery Badge', color: 'bg-yellow-300' },
      { label: 'Completed 3 Courses', color: 'bg-pink-300' },
      { label: 'Completed 3 Skill Exchanges', color: 'bg-orange-300' },
      { label: 'Digital Literacy Mastery Badge', color: 'bg-purple-300' },
    ];
  
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="flex space-x-4">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center text-sm font-bold text-gray-700 rounded-lg ${badge.color} w-32 h-16`}
            >
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
  