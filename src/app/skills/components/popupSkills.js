import React from 'react';

const PopUpSkills = ({ closePopUp }) => {
  const content = {
    title: "Predicting Trends Using SQL",
    description:
      "Predicting Trends Using SQL involves analyzing historical data from relational databases to identify patterns and forecast future outcomes. By leveraging SQL, users can efficiently query, filter, and manipulate large datasets to uncover trends. Techniques such as aggregations, time-series analysis, and window functions enable the identification of seasonal or cyclical patterns, while calculated fields and integrations with statistical tools support more advanced forecasting methods.",
  };

  const handleLevelClick = () => {
    window.open(
      "https://rise.articulate.com/share/QXpnKWM8HvPXmDs8Z0_UlXtziEsZYx7G",
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-[2px] z-50 flex justify-center items-center">
      <div className="bg-white p-4 w-[90vw] max-w-[1200px] h-[70vh] max-h-[800px] rounded-2xl relative border">
        {/* Top Title */}
        <div className="relative text-white p-6 rounded-2xl h-[25vh] md:h-[20vh] flex justify-start items-end border border-transparent">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url('/skill_page_images/popupbackground.png')`,
              filter: `brightness(1)`,
            }}
          ></div>

          {/* Transparent Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

          {/* Close Button (X) */}
          <button
            onClick={closePopUp} // Call closePopUp function passed via props
            className="flex justify-center items-center absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
          >
            <img
              src="/skill_page_images/closeX.png"
              alt="Close"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </button>

          {/* Title Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
              {content.title}
            </h2>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col items-start"> {/* Ensure left alignment */}
            <div className="self-start"> {/* Start the image from the left */}
              <img
                src="/skill_page_images/extra_info.png"
                alt="Extra Info"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
            <div className="text-lg text-black leading-[30px] font-helveticaNeue text-[18px] lg:text-[22px] mt-6">
              {content.description}
            </div>
            <div className="mt-6 flex justify-start"> {/* Button aligns to the left */}
              <a
                href="../skill_page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-[200px] h-[50px] bg-black text-white text-[18px] lg:text-[20px] font-semibold rounded-md">
                  Begin Learning
                  <span className="ml-2">&gt;</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpSkills;
