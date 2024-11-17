import React, { useState } from "react";
import { Search, ChevronDown, MessageCircle, ChevronUp } from 'lucide-react';

const DiscussionList = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const discussions = [
    {
      id: 1,
      userAvatar: "?",
      title: "Question on Video 1",
      description: "This is a question on Video 1, this is a question on Video 1? This is a question...",
      comments: 2,
      time: "3d",
      isUnread: true
    },
    {
      id: 2,
      userAvatar: "?",
      title: "This is another question",
      description: "This is a question on the skill, this is a question on skill? This is a question on...",
      comments: 1,
      time: "2w",
      isUnread: true
    },
    {
      id: 3,
      userAvatar: "/skill_page_images/Keona.png",
      title: "Question on Article 2",
      description: "This is a question on Article 2, this is a question on Article 2? This is a questio...",
      comments: 3,
      time: "3w",
      isUnread: true
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
      >
        <h2 className="text-lg font-semibold text-gray-900">Discussion</h2>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>

      <div className="h-px bg-gray-200 w-full" />

      {isExpanded && (
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-blue-500 border border-gray-200 rounded-lg hover:bg-gray-50">
              Filter
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="h-px bg-gray-200 w-full" />

          <div>
            {discussions.map((discussion, index) => (
              <React.Fragment key={discussion.id}>
                <div className="flex items-center gap-4 py-3">
                  {discussion.isUnread && (
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  )}
                  
                  <div className="flex-shrink-0">
                    {discussion.userAvatar === "?" ? (
                      <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                        <span className="text-gray-500">?</span>
                      </div>
                    ) : (
                      <img
                        src={discussion.userAvatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
                      />
                    )}
                  </div>

                  <div className="flex-grow min-w-0 py-1">
                    <h3 className="font-bold text-gray-900 mb-1">{discussion.title}</h3>
                    <p className="text-gray-500 text-sm truncate">{discussion.description}</p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="flex items-center gap-1 text-orange-500 w-12 justify-end">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{discussion.comments}</span>
                    </div>
                    <span className="text-sm text-gray-400 w-8">{discussion.time}</span>
                  </div>
                </div>
                {index < discussions.length - 1 && (
                  <div className="h-px bg-gray-200 w-full" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionList;