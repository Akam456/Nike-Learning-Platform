'use client'
import React, { useRef, useState } from 'react';

import Link from 'next/link';
import SkillCard from './components/SkillCard';
import WhiteBox from './components/WhiteBox';
import SkillScroll from './components/SkillScroll';
import CategoryScroll from './components/CategoryScroll';
import YourSkillsSection from './components/YourSkillsSection';
import SkillExchangeHistorySection from './components/SkillExchangeHistory';

import SideBar from '../components/SideBar';
import Header from "../components/Header";

const IconPlaceholder = ({ children }) => (
  <span className="inline-block w-6 h-6 text-center">{children}</span>
);
export default function SkillExchangePage() {
  const profileData = [
    { name: 'Anna', skill: 'Attend a forecasting workshop', profilePicture: "skills_images/Anna_profile.png", backgroundImage: 'skills_images/sql_background.png'},
    { name: 'Ben', skill: 'Build a 90 day product forecast', profilePicture: "skills_images/Ben_profile.png", backgroundImage: 'skills_images/excel_background.png'},
    { name: 'Amelia', skill: 'Run a Monte Carlo simulation', profilePicture: "skills_images/Amelia_profile.png", backgroundImage: 'skills_images/wires_background.png'},
    { name: 'Olivia', skill: 'Brief a forecast output to your team', profilePicture: "skills_images/Olivia_profile.png", backgroundImage: 'skills_images/nike_background.png'},
  ];
  
  const skillCategories = [
    "Forecasting Techniques",
    "Financial Acumen",
    "Human Centered Design",
    "Adaptability",
    "Systems Thinking",
    "Influence",
    "Data Management",
    "Analytics",
    "Artificial Intelligence and Machine Learning",
    "Simulation",
    "Forecasting techniques",
    "Supplier Relationship Management",
    "Continuous Improvement",
    "Inventory Flow Management",
    "Customer Service",
    "Circular Product Lifecycle Management",
  ];
  const skillExchangeHistory = [
    { name: 'Katie', skill: 'Tableau Visualizations', image: 'skills_images/katie_photo.png' },
    { name: 'Toby', skill: 'Financial Statements', image: 'skills_images/toby_photo.png' },
    { name: 'John', skill: 'Pivot Tables', image: 'skills_images/john_photo.png' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (

    <div className="bg-white font-sans text-gray-800 min-h-screen flex">
      <SideBar/>
      <div className="pl-32 pt-8 flex-grow flex flex-col">
        <Header Title="Skill Exchange"/>

        <main className="flex flex-col w-full max-w-7xl mx-auto" style={{justifyContent: "space-between", height: "100%"}}>
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
        <CategoryScroll skillCategories={skillCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/> {/* Added consistent margin */}
        <SkillScroll skills={selectedCategory == skillCategories[0] ? profileData : []}/> {/* Added consistent margin */}
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