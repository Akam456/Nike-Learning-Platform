'use client';

import React from 'react';
import Link from 'next/link';

const SkillItem = ({ skill }) => (
  <div className="flex-1 flex items-center px-8">
    <span className="text-base font-bold font-helvetica-neue">{skill}</span>
    <span className="text-orange-500 text-2xl font-bold ml-2 self start -mt-0.5">›</span>
  </div>
);

export default function YourSkillsSection() {
  const skills = [
    'Collaborating with External Suppliers',
    'Customer Service',
    'Digital Twins'
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-black-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17.5c-1.4-1.4-3.3-2.3-5.4-2.3-2.1 0-4 .9-5.4 2.3" />
          </svg>
          <h3 className="text-xl font-bold font-helvetica-neue">Your Skills</h3>
        </div>
        <Link href="/manage-skills" className="text-sm text-red-500 hover:underline font-bold font-helvetica-neue">Manage Skills ›</Link>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-stretch h-20">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}