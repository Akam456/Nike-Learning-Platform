'use client'
import React from 'react';

// pages/index.js
import SkillLearners from './components/SkillLearners';
import DiscussionList from './components/DiscussionList';
import ContentSection from './components/ContentSection';
import RelatedCourses from './components/RelatedCourses';
import TitleDescription from './components/TitleDescription';

const learners = [
  { name: 'Nancy', image: '/skill_page_images/Nancy.png' },
  { name: 'James', image: '/skill_page_images/James.png' },
  { name: 'Helena', image: '/skill_page_images/Helena.png' },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      {/* Top TitleDescription Component */}
      <div className="w-full max-w-[80rem] mb-8">
        <TitleDescription />
      </div>

      {/* Main Content Section */}
      <div className="flex justify-between items-start w-full max-w-[80rem] gap-x-8">
        {/* Left Content */}
        <div className="flex flex-col items-center w-full space-y-6">
          <ContentSection />
          <DiscussionList />
          <RelatedCourses />
        </div>

        {/* Sidebar */}
        <div className="w-64 space-y-6">
          <SkillLearners count={55} learners={learners} />
        </div>
      </div>
    </div>
  );
}
