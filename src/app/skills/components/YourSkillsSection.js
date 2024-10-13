'use client';

import React from 'react';
import Link from 'next/link';

const IconPlaceholder = ({ children, className }) => (
  <span className={`inline-flex items-center justify-center w-4 h-full ${className}`}>{children}</span>
);

const SkillItem = ({ skill, isLast }) => (
  <div className={`flex items-center justify-between flex-1 px-4 ${!isLast ? 'border-r border-gray-300' : ''}`}>
    <span className="text-sm font-medium text-center flex-grow">{skill}</span>
    <IconPlaceholder className="text-gray-400 ml-2">›</IconPlaceholder>
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
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h3 className="text-xl font-semibold">Your Skills</h3>
        </div>
        <Link href="/manage-skills" className="text-sm text-red-500 hover:underline">Manage Skills ›</Link>
      </div>
      <div className="bg-gray-50 border border-gray-100">
        <div className="flex items-stretch h-12">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} isLast={index === skills.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}