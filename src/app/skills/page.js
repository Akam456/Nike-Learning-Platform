import React from 'react';
import Link from 'next/link';
import SkillCard from './components/SkillCard';
import WhiteBox from './components/WhiteBox';
import SkillScroll from './components/SkillScroll';
import CategoryScroll from './components/CategoryScroll';
import YourSkillsSection from './components/YourSkillsSection';
import SkillExchangeHistorySection from './components/SkillExchangeHistory';

import SideBar from '../components/SideBar';

const IconPlaceholder = ({ children }) => (
  <span className="inline-block w-6 h-6 text-center">{children}</span>
);
export default function SkillExchangePage() {
  const profileData = [
    { name: 'Anna', skill: 'Predicting Trends Using SQL', profilePicture: "skills_images/Anna_profile.png", backgroundImage: 'skills_images/sql_background.png'},
    { name: 'Ben', skill: 'Data Visualizations in Excel', profilePicture: "skills_images/Ben_profile.png", backgroundImage: 'skills_images/excel_background.png'},
    { name: 'Amelia', skill: 'Large Language Models', profilePicture: "skills_images/Amelia_profile.png", backgroundImage: 'skills_images/wires_background.png'},
    { name: 'Olivia', skill: 'Simulating External Events', profilePicture: "skills_images/Olivia_profile.png", backgroundImage: 'skills_images/nike_background.png'},
    { name: 'James', skill: 'Collecting Large Datasets', profilePicture: "skills_images/James_profile.png", backgroundImage: 'skills_images/shoes_background.png'},
  ];
  
  const skillCategories = [
    "Data Analysis",
    "Management",
    "Operations",
    "Strategy",
    "Business Acumen",
  ];
  const skillExchangeHistory = [
    { name: 'Katie', skill: 'Tableau Visualizations', image: 'skills_images/katie_photo.png' },
    { name: 'Toby', skill: 'Financial Statements', image: 'skills_images/toby_photo.png' },
    { name: 'John', skill: 'Pivot Tables', image: 'skills_images/john_photo.png' },
  ];


  return (

    <div className="bg-white font-sans text-gray-800 min-h-screen flex flex-grow">
      <div className="rounded-full shadow-lg">
      <SideBar/>
      </div>
      <div className="flex-grow flex flex-col">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-500 ml-6 mt-4">Skill Exchange</h1>
          </div>
          <div className="flex items-center space-x-4">
          <IconPlaceholder>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 mt-1 -ml-4">
              <path d="M12 2l3 6.5L22 9l-5 5 1 7-6-3-6 3 1-7-5-5 7-0.5L12 2z" />
            </svg>
          </IconPlaceholder>
          <IconPlaceholder>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 mt-1.5 -ml-4">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              <circle cx="18" cy="4" r="3" fill="#FF6B6B" stroke="none" />
            </svg>
          </IconPlaceholder>
          <IconPlaceholder>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 mt-[5px] -ml-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
              <path d="M17 18.5c-1.4-1.4-3.3-2.3-5.4-2.3-2.1 0-4 .9-5.4 2.3" />
            </svg>
          </IconPlaceholder>
          </div>
        </header>

        <main className="flex flex-col w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row mb-8">
            {/* Left column */}
            <div className="md:w-5/12 pl-0 mt-24 md:ml-10">
              <h2 className="text-5xl font-bold mb-6 tracking-normal" 
                  style={{ 
                    fontFamily: 'Futura, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '-0.02em',
                    transform: 'scaleX(0.9)',
                    transformOrigin: 'left center'
                  }}>
                Find a skill
              </h2>
              <div className="relative w-4/5">
                <input
                  type="text-gray-800"
                  placeholder="Search Employee Skills"
                  className="w-full p-3 pr-10 rounded-md bg-gray-100 border border-gray-300 text-gray-800"
                />
                <svg className="w-6 h-6 text-gray-800 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
    
        {/* Right column */}
        <div className="md:w-7/12 pl-4 md:pl-8"> 
          <YourSkillsSection />
          <SkillExchangeHistorySection history={skillExchangeHistory} />
        </div>
      </div>

      {/* Explore Popular Skills section */}
      <WhiteBox>
        <h3 className="text-4xl font-bold mb-5 mx-5 mt-6">Explore Popular Skills</h3> {/* Added consistent margin */}
        <CategoryScroll skillCategories={skillCategories}/> {/* Added consistent margin */}
        <SkillScroll skills={profileData}/> {/* Added consistent margin */}
      </WhiteBox>

    </main>

        {/* Temporary Navigation Before Side Bar */}
        {/*<footer className="mt-16 py-4 border-t border-gray-200 flex justify-center">
          <Link href="/home" className="text-red-500 hover:underline hover:underline-offset-4">
            To Home / Course Page →
          </Link>
        </footer>*/}
      </div>
      {/* Temporary Navigation Before Side Bar */}
    </div>
  );
}