import React from 'react';

const PopUp = ({ topTitle, title, rating, closePopUp }) => {
    let content = {
        title: title,
        description: 'Predict future demand using quantitative and qualitative methods, leveraging historical data, market trends and advanced analytics.',
        rating: rating,
        levels: [
            { name: 'Level 1: Understanding', time: '1h 30min', backgroundColor: "#fcbc51" },
            { name: 'Level 2: Applying', time: '1h 50min', backgroundColor: "#ed8dc9" },
            { name: 'Level 3: Elevating', time: '2h 30min', backgroundColor: "#f75d40" }
        ],
        topTitle: topTitle,
        totalLevel: 3,
    };
    const handleLevelClick = () => {
        window.open("https://rise.articulate.com/share/QXpnKWM8HvPXmDs8Z0_UlXtziEsZYx7G", "_blank");
    };
    return (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-black p-4 w-11/12 max-w-6xl h-auto max-h-[90vh] rounded-lg relative">
                
                {/* Top Title */}
                <div className="relative text-white p-8 rounded-t-lg h-[20vh] flex justify-start items-end border border-gray-500">
    
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('/images/popup-image.jpeg')` }}
                    ></div>
    
                    {/* Transparent Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Close Button (X) */}
                    <button
                        onClick={closePopUp}
                        className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
                    >
                        &times;
                    </button>

                    {/* Title Content */}
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-semibold">{content.title}</h2>
                    </div>

                </div>

                {/* Course Content */}
                <div className="p-4 md:p-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[0%] h-auto">
                    <div className="flex flex-col md:space-y-6">
                        <div className="text-lg text-white leading-[30px] font-helveticaNeue text-[22px] w-full md:w-3/4">
                            {content.description}
                        </div>
                        {/* Test button */}
                        <div className="pl-0 mb-32 pt-2">
                            <a href = "https://docs.google.com/document/d/1gyES-9cwrY05MseRj84ueVmk28kyEa4u5_5R4DghiCw/edit" target="blank">
                            <button className="ml-0 mr-4 w-[120px] h-[50px] bg-white text-black text-[24px] font-semibold rounded-md">
                                Test
                                <span className="ml-2">&gt;</span>
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col text-gray-400 font-helveticaNeue text-[16px] leading-[20px] w-full md:w-1/4">
                        <h3 className="mb-4"> 
                            Skill Area: <span className="text-red-400 font-semibold">{content.topTitle}</span> 
                        </h3>
                        {/* Rating */}
                        <p className="mb-4">
                            Average Rating: <span className="text-red-400 font-semibold">★ {content.rating}</span>
                        </p>
                        <p className="mb-4">
                            This course has <span className="text-red-400 font-semibold">{content.totalLevel}</span> levels
                        </p>
                    </div>
                </div>


                {/* Levels */}
                <div className="space-x-2 md:space-x-12 ml-4 mr-4 flex md:flex-row justify-center p-2 pb-[2rem] mt-6">
                    {content.levels.map((level, index) => (
                        <div
                            key={index}
                            className="flex flex-col space-y-8 justify-between items-center p-5 rounded-md w-full md:w-[30%] transition duration-300 hover:opacity-50"
                            style={{ backgroundColor: level.backgroundColor, cursor: 'pointer'}}
                            onClick = {handleLevelClick}
                        >
                            <div className="text-white text-3xl md:text-4xl font-semibold relative" style={{ left: '0rem' }}>
                                {level.name}
                            </div>
                            <div className="flex space-x-1 ml-[-9.375rem] mt-2">
                                <div className="w-6 h-6">
                                    <img src="/images/clock.png" alt="clock icon"/>
                                </div>
                                <div className="text-black text-xl font-semibold">
                                    {level.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default PopUp;