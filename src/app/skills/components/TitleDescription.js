import React from 'react';

const TitleDescription = ({title}) => {
    let content = {
        title: "Predicting Trends Using Sequel",
        description: 'Predicting Trends Using SQL involves analyzing historical data from relational databases to identify patterns and forecast future outcomes. By leveraging SQL, users can efficiently query, filter, and manipulate large datasets to uncover trends. Techniques such as aggregations, time-series analysis, and window functions enable the identification of seasonal or cyclical patterns, while calculated fields and integrations with statistical tools support more advanced forecasting methods',
    };
    return (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-[2px] z-50 flex justify-center items-center">
        <div className="bg-white p-4 w-8/12 h-[60vh] rounded-2xl relative border-1">
                
            {/* Top Title */}
            <div className="relative text-white p-8 rounded-2xl h-[20vh] flex justify-start items-end border border-transparent">
    
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/skills_images/popupbackground.jpeg')`,
                                filter: `brightness(1)`
                    }}
                ></div>
    
                {/* Transparent Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

                {/* Close Button (X) */}
                <button
                    className="flex justify-center items-center absolute top-5 right-[1px]  text-white text-2xl font-bold focus:outline-none"
                >
                    <img
                    src="/skills_images/star.png"
                    className="w-1/2 h-1/2"
                    />
                        
                </button>

                {/* Title Content */}
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-semibold">{content.title}</h2>
                </div>

            </div>

            {/* Course Content */}
            <div className="p-4 md:p-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[0%] h-auto">
                <div className="flex flex-col md:space-y-6">
                    <div className="bg-white">
                        <img 
                            src="/skills_images/extra_info.png"
                            className="w-[45%] h-auto">
                        </img>
                    </div>
                    <div className="text-lg text-black leading-[30px] font-helveticaNeue text-[22px] w-[100%]">
                        {content.description}
                    </div>
                </div>
            </div>  
        </div>
    </div>
    );
};

export default TitleDescription;