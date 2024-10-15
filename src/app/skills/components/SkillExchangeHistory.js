'use client';

import React from 'react';
import Link from 'next/link';

const SkillExchangeHistoryItem = ({ name, skill, image }) => (
  <div className="relative bg-white p-4 shadow-sm border border-gray-200 rounded-lg w-[32%]">
    <div className="flex items-center space-x-3">
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-white">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="flex-grow min-h-[3.5rem] flex flex-col justify-center">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-sm font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
          {skill}
        </p>
      </div>
    </div>
    <span className="absolute top-2 right-4 text-orange-500 text-3xl font-bold">›</span>
  </div>
);



export default function SkillExchangeHistorySection({ history }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 1H3M3 1L7 5M3 1L7 -3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11H21M21 11L17 7M21 11L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-xl font-bold">Skill Exchange History</h3>
        </div>
        <Link href="/view-all-history" className="text-sm text-red-500 hover:underline font-bold font-helvetica-neue">
          View All ›</Link>
      </div>
      <div className="flex justify-between">
        {history.map((item, index) => (
          <SkillExchangeHistoryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}