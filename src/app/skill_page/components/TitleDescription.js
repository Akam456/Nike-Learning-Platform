import React from 'react';

const TitleDescription = ({ title }) => {
  const content = {
    title: "Predicting Trends Using SQL",
    description:
      'Predicting Trends Using SQL involves analyzing historical data to identify patterns and forecast outcomes. SQL enables querying, filtering, and manipulating datasets to uncover trends using techniques like aggregations, time-series analysis, and window functions, while supporting advanced forecasting with calculated fields and integrations.',
  };

  return (
    <div className="bg-white w-full rounded-2xl max-w-7xl">
      {/* Top Title */}
      <div className="relative text-white rounded-2xl h-[20vh] flex justify-start items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-md"
          style={{
            backgroundImage: `url('/skill_page_images/popupbackground.png')`,
            filter: `brightness(1)`,
          }}
        ></div>

        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

        {/* Title Content */}
        <div className="relative z-10 mt-[50px] ml-[40px]">
          <h2 className="text-4xl md:text-6xl font-semibold">{content.title}</h2>
        </div>
      </div>

      {/* Course Content */}
      <div className="flex flex-col space-y-6 mt-8">
        {/* Image */}
        <div>
          <img
            src="/skill_page_images/extra_info.png"
            alt="Additional Info"
            className="w-full max-w-sm h-auto"
          />
        </div>

        {/* Description */}
        <div className="text-black text-lg leading-[30px] font-helveticaNeue">
          {content.description}
        </div>
      </div>
    </div>
  );
};

export default TitleDescription;
