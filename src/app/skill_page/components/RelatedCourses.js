import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Assuming SkillCard is imported from your components
import SkillCardNew from './SkillCardNew';

const RelatedCourses = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const skills = [
    { name: 'Anna', skill: 'Attend a forecasting workshop', profilePicture: "/skills_images/Anna_profile.png", backgroundImage: 'skills_images/sql_background.png'},
    { name: 'Ben', skill: 'Build a 90 day product forecast', profilePicture: "/skills_images/Ben_profile.png", backgroundImage: 'skills_images/excel_background.png'},
    { name: 'Amelia', skill: 'Run a Monte Carlo simulation', profilePicture: "/skills_images/Amelia_profile.png", backgroundImage: 'skills_images/wires_background.png'},
    { name: 'Olivia', skill: 'Brief a forecast output to your team', profilePicture: "/skills_images/Olivia_profile.png", backgroundImage: 'skills_images/nike_background.png'}
  ];

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header section with toggle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer rounded-t-lg"
      >
        <h2 className="text-lg font-semibold text-gray-900">Related Courses & Skills</h2>
        {isExpanded ? (
          <ChevronUp className="h-6 w-6 text-gray-500" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-500" />
        )}
      </button>

      {/* Dividing line */}
      <div className="h-px bg-gray-200 w-full" />

      {/* Collapsible content */}
      {isExpanded && (
        <div className="p-6">
          <p className="text-lg font-bold text-gray-600 mb-6">Similar skills you may be interested in</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((profile) => (
              <div key={profile.name} className="w-full">
                <SkillCardNew
                  name={profile.name}
                  skill={profile.skill}
                  profilePicture={profile.profilePicture}
                  backgroundImage={profile.backgroundImage}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedCourses;