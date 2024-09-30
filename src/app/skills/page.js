import React from 'react';
import Link from 'next/link';
import SkillCard from './components/SkillCard';
import GradientButton from './components/GradientButton';
import WhiteBox from './components/WhiteBox';

const IconPlaceholder = ({ children }) => (
  <span className="inline-block w-6 h-6 text-center">{children}</span>
);

export default function SkillExchangePage() {
  const skillCategories = [
    "Data Analysis",
    "Management",
    "Operations",
    "Strategy",
    "Business Acumen"
  ];

  return (
    <div className="bg-white p-6 font-sans text-gray-800 min-h-screen flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="bg-black w-10 h-10 rounded-md flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-red-500">Skill Exchange</h1>
        </div>
        <div className="flex items-center space-x-4">
          <IconPlaceholder>⭐️</IconPlaceholder>
          <IconPlaceholder>🔔</IconPlaceholder>
          <IconPlaceholder>👤</IconPlaceholder>
        </div>
      </header>

      <main className="flex flex-col md:flex-row flex-grow">
        <div className="w-full md:w-1/2 pr-4">
          <h2 className="text-4xl font-bold mb-6">Find a skill</h2>
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search Employee Skills"
              className="w-full p-3 pr-10 rounded-md bg-gray-100 border border-gray-300"
            />
            <IconPlaceholder className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </IconPlaceholder>
          </div>
        </div>

        <div className="w-full md:w-1/2 pl-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Skill Exchange History</h3>
            <a href="#" className="text-red-500 hover:underline">View All</a>
          </div>
          {/* This section is intentionally left blank */}
        </div>
      </main>

      <WhiteBox>
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Explore Popular Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {skillCategories.map((category, index) => (
              <GradientButton key={index} label={category} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              { name: 'Anna', skill: 'Predicting Trends Using SQL' },
              { name: 'Ben', skill: 'Data Visualizations in Excel' },
              { name: 'Amelia', skill: 'Large Language Models' },
              { name: 'Olivia', skill: 'Simulating External Events' },
              { name: 'James', skill: 'Collecting Large Datasets' },
            ].map((item, index) => (
              <SkillCard key={index} name={item.name} skill={item.skill} />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="p-2"><IconPlaceholder>←</IconPlaceholder></button>
            <button className="p-2"><IconPlaceholder>→</IconPlaceholder></button>
          </div>
        </section>
      </WhiteBox>

      {/* Temporary Navigation Before Side Bar */}
      <footer className="mt-8 py-4 border-t border-gray-200 flex justify-center">
        <Link href="/home" className="text-red-500 hover:underline hover:underline-offset-4">
          To Home / Course Page →
        </Link>
      </footer>
      {/* Temporary Navigation Before Side Bar */}
    </div>
  );
}