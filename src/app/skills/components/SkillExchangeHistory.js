'use client';

import React from 'react';
import Link from 'next/link';

const IconPlaceholder = ({ children, className }) => (
  <span className={`inline-block w-4 h-4 text-center ${className}`}>{children}</span>
);

const SkillExchangeHistoryItem = ({ name, skill, image }) => (
  <div className="flex items-center justify-between bg-white p-3 shadow-sm border border-gray-200 w-[32%]">
    <div className="flex items-center space-x-3">
      <img src={image} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-red-500">{skill}</p>
      </div>
    </div>
    <IconPlaceholder className="text-red-500">›</IconPlaceholder>
  </div>
);

export default function SkillExchangeHistorySection({ history }) {
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <h3 className="text-xl font-semibold">Skill Exchange History</h3>
          </div>
          <Link href="/view-all-history" className="text-sm text-red-500 hover:underline">View All ›</Link>
        </div>
        <div className="flex justify-between">
          {history.map((item, index) => (
            <SkillExchangeHistoryItem key={index} {...item} />
          ))}
        </div>
      </div>
    );
  }