import React, { useState } from "react";
import { ChevronUp, ChevronDown, Play, ChevronRight } from "lucide-react";

const ContentSection = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header - Always Visible */}
      <div className="px-5 py-4 flex justify-between items-center cursor-pointer border-b border-gray-200" onClick={toggleExpand}>
        <h2 className="text-lg font-bold">Content</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img 
                src="skill_page_images/nikeGem.png" 
                alt="coral arrow" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-red-400 font-bold text-medium">0 / 25</span>
            </div>
            <div className="w-36 h-1.5 bg-gray-200 rounded-full" />
          </div>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          )}
        </div>
      </div>

      {/* Collapsible Content */}
      {isExpanded && (
        <div className="px-6 pt-4 pb-2">
          {/* Horizontal Content Scroll */}
          <div className="overflow-x-auto">
            <div className="flex gap-6">
              {/* Video 1 */}
              <div className="min-w-[280px]">
                <h3 className="text-base font-bold mb-2">Watch Video 1</h3>
                <div className="relative h-[160px] w-full bg-black/5 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                    </div>
                  </div>
                  <img
                    src="/skill_page_images/Coding.png"
                    alt="Code editor interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Video 2 */}
              <div className="min-w-[280px]">
                <h3 className="text-base font-bold mb-2">Watch Video 2</h3>
                <div className="relative h-[160px] w-full bg-black/5 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                    </div>
                  </div>
                  <img
                    src="/skill_page_images/Coding.png"
                    alt="Code editor interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Articles Section */}
              <div className="min-w-[280px]">
                {/* Article 1 */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold">Read Article 1</h3>
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-600">
                    This is a description of the article. This is a description of the article.
                  </p>
                </div>

                {/* Article 2 */}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold">Read Article 2</h3>
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-600">
                    This is a description of the article. This is a description of the article.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentSection;
