import Image from 'next/image';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Digital Literacy',
      skills: ['Excel', 'Digital Twins', 'Tableau Visualizations'],
    },
    {
      category: 'Supply Chain',
      skills: ['Collaborating with External Suppliers'],
    },
    {
      category: 'Business Acumen',
      skills: ['Customer Service'],
    },
  ];

  return (
    <div className='mx-6 p-6 border border-[#eaeaea] rounded-lg'>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl text-black font-bold">Skills</h2>
        <div className="flex space-x-2">
          <div className="flex gap-x-2 bg-[#f6f6f6] items-center border border-orange-500 px-4 py-1 rounded-lg">
            <Image
              src="/dashboard_images/plus.svg"
              alt="Plus Icon"
              width={16}
              height={16}
            />
            <button className="text-[#f17b50] font-bold">Add Skills</button>
          </div>
          <div className="flex gap-x-2 bg-[#f6f6f6] items-center border border-orange-500 px-4 py-1 rounded-lg">
            <Image
              src="/dashboard_images/import.svg"
              alt="Import Icon"
              width={17}
              height={17}
            />
            <button className="text-[#f17b50] font-bold">
              Import From LinkedIn
            </button>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-3 border-t border-[#eaeaea] divide-x divide-[#eaeaea]">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-3">
            <h3 className="text-medium font-semibold text-gray-500 mb-2 mt-2">{category.category}</h3>
            <ul>
              {category.skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-xs font-semibold text-black mb-1"
                >
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  <span className="hover:text-orange-500 cursor-pointer">
                    {skill}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-orange-500 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


/*
export default function SkillsSection() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-black font-bold">Skills</h2>
        <div className="flex space-x-2">
          <div className="flex gap-x-2 bg-[#f6f6f6] items-center border border-orange-500 px-4 py-1 rounded-lg">
            <Image
              src="/dashboard_images/plus.svg"
              alt="Plus Icon"
              width={16}
              height={16}
            />
            <button className="text-[#f17b50] font-bold">Add Skills</button>
          </div>
          <div className="flex gap-x-2 bg-[#f6f6f6] items-center border border-orange-500 px-4 py-1 rounded-lg">
            <Image
              src="/dashboard_images/import.svg"
              alt="Import Icon"
              width={17}
              height={17}
            />
            <button className="text-[#f17b50] font-bold">
              Import From LinkedIn
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-gray-800">Digital Literacy</h3>
          <ul className="mt-2 space-y-1">
            <li className="text-sm text-gray-600">
              <span className="text-orange-500 mr-2">•</span>
              Excel
            </li>
            <li className="text-sm text-gray-600">
              <span className="text-orange-500 mr-2">•</span>
              Digital Twins
            </li>
            <li className="text-sm text-gray-600">
              <span className="text-orange-500 mr-2">•</span>
              Tableau Visualizations
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800">Supply Chain</h3>
          <ul className="mt-2 space-y-1">
            <li className="text-sm text-gray-600">
              <span className="text-orange-500 mr-2">•</span>
              Collaborating with External Suppliers
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800">Business Acumen</h3>
          <ul className="mt-2 space-y-1">
            <li className="text-sm text-gray-600">
              <span className="text-orange-500 mr-2">•</span>
              Customer Service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
*/