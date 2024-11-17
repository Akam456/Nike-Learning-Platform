export default function Skills() {
    const skillCategories = [
      {
        category: 'Digital Literacy',
        skills: ['SQL', 'Data Analysis', 'Tableau Visualizations'],
      },
      {
        category: 'Supply Chain',
        skills: ['Forecasting Techniques'],
      },
      {
        category: 'Business Acumen',
        skills: ['Customer Service'],
      },
    ];
  
    return (
      <div>
        <h2 className="text-3xl text-black font-bold mb-3">Skills</h2>
        <div className="grid grid-cols-3 border-t border-gray-300 divide-x divide-gray-300">
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
  