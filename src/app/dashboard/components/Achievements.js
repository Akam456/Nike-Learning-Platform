import Image from 'next/image';

export default function Achievements() {
  const badges = [
    { label: 'Digital Literacy Mastery Badge', border: '#f6bc40', image: '/dashboard_images/yellow_diamond.svg' },
    { label: 'Completed 3 Courses', border: '#ec8dc9', image: '/dashboard_images/pink_diamond.svg' },
    { label: 'Completed 3 Skill Exchanges', border: '#e53c1c', image: '/dashboard_images/red_diamond.svg' },
    { label: 'Digital Literacy Mastery Badge', border: '#ad76fb', image: '/dashboard_images/purple_diamond.svg' },
  ];

  return (
    <div className="bg-white mt-6 mx-6 border border-[#eaeaea] rounded-lg p-6">
      <h2 className="text-3xl mb-5 text-black font-bold">Achievements</h2>
      {/* Slider Container */}
      <div className="slider-container overflow-x-auto scrollbar-hide flex space-x-4 snap-x snap-mandatory">
        <div className="slider-content flex gap-4">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white text-sm font-bold text-gray-700 rounded-lg pr-32 py-2"
              style={{
                border: `2px solid ${badge.border}`,
                width: '280px', // Adjust the width for a clean layout
                height: '80px', // Adjust the height for consistency
              }}
            >
              {/* Badge Image */}
              <div className="flex-shrink-0">
                <Image
                  src={badge.image}
                  alt={`${badge.label} icon`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              {/* Badge Label */}
              <div className="ml-4 text-left">
                <p className="text-xs font-bold text-black">{badge.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
