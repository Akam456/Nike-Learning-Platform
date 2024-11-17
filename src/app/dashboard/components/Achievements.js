import Image from 'next/image';

export default function Achievements() {
  const badges = [
    { label: 'Digital Literacy Mastery Badge', border: '#f6bc40', image: '/dashboard_images/yellow_diamond.png' },
    { label: 'Completed 3 Courses', border: '#ec8dc9', image: '/dashboard_images/pink_diamond.png' },
    { label: 'Completed 3 Skill Exchanges', border: '#e53c1c', image: '/dashboard_images/red_diamond.png' },
    { label: 'Digital Literacy Mastery Badge', border: '#ad76fb', image: '/dashboard_images/purple_diamond.png' },
  ];

  return (
    <div className="bg-white mt-6 mx-6 border border-[#eaeaea] rounded-lg p-6">
      <h2 className="text-3xl mb-5 text-black font-bold">Achievements</h2>
      {/* Slider Container */}
      <div className="slider-container overflow-x-auto scrollbar-hide flex space-x-4 snap-x snap-mandatory">
        <div className="flex gap-4">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white text-sm font-bold text-gray-700 rounded-lg p-4"
              style={{
                border: `2px solid ${badge.border}`,
                width: '280px', // Fixed width for each badge
                height: '80px', // Fixed height for consistency
              }}
            >
              {/* Badge Image */}
              <div>
                <Image
                  src={badge.image}
                  alt={`${badge.label} icon`}
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              {/* Badge Label */}
              <div className="ml-2 flex items-center">
                <p className="text-sm font-bold text-black">{badge.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
