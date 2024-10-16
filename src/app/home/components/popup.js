import React from 'react';

const PopUp = ({ topTitle, title, rating, closePopUp}) => {
    let content = {
        title: title,
        description: 'This is a description of the course content this is a. Description of the course content this is a description of the course content. This is a description of the course content this is a description of the course content. This is a description of the course content.',
        rating: rating,
        levels: [
            { name: 'Level 1', time: '1h 30min', backgroundColor: "#fcbc51"},
            { name: 'Level 2', time: '1h 50min', backgroundColor: "#ed8dc9"},
            { name: 'Level 3', time: '2h 30min', backgroundColor: "#f75d40" }
            ],
        topTitle: topTitle,
        totalLevel: 3,
        };
    

    return (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-black p-4 w-2/3 h-3/4 rounded-lg relative">
                
                {/* Top Title */}
                <div className="relative text-white p-8 rounded-t-lg h-44 flex justify-start items-end border border-gray-500">
    
                {/* Background Image */}
                    <div
                    className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('/images/popup-image.jpeg')` }}
                        ></div>
    
                    {/* Transparent Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50">
                    </div>

                    {/* Close Button (X) */}
                    <button
                        onClick={closePopUp} // Call the function to close the popup
                        className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
                    >
                        &times; {/* X symbol */}
                    </button>

                    {/* Title Content (keeps text fully opaque) */}
                    <div className="relative z-10">
                        <h2 className="text-6xl font-[510] ">{content.title}</h2>
                    </div>

                </div>

                {/* Course Content */}
                <div className="p-8 flex space-x-[160px] h-[180px] ml-4 mr-4">
                    <div className="text-lg text-white leading-[25px] font-helveticaNeue text-[17px] w-[750px] h-[140px]">
                        {content.description}
                    </div>

                    <div className="flex-col text-gray-400 font-helveticaNeue text-[16px] leading-[20px] h-[140px] w-[220px]">
                        <h3 className="mb-4 "> 
                            Skill Area: <span className="text-red-400 font-semibold"> {content.topTitle} </span> 
                        </h3>
                        {/* Rating */}
                        <p className="mb-4">
                            Average Rating: <span className="text-red-400 font-semibold">★ {content.rating} </span>
                        </p>
                        <p className="mb-4">
                            This course has <span className="text-red-400 font-semibold"> {content.totalLevel} </span> levels
                        </p>
                    </div>
                </div>
                {/* Test button */}
                <div className="p-2 h-[75px] ml-4 mr-4">
                    <button className="ml-5 mr-4 w-[100px] h-[44px] bg-white text-black text-[20px] font-semibold rounded-md">
                            Test
                            <span className="ml-2">&gt;</span> {/* Right arrow icon */}
                    </button>
                </div>
                {/* Levels */}
                <div className="space-x-10 ml-4 mr-4 flex justify-center h-[175px] p-2 mt-6">
                    {content.levels.map((level, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-between items-center p-6 rounded-md w-[400px] transition duration-300 hover:opacity-50`}
                            style={{ backgroundColor: level.backgroundColor }}
                        >
                            
                            <div className="text-white text-5xl font-semibold mr-28">
                                {level.name}
                            </div>
                            <div className="flex space-x-1 mr-36">
                                <div className="w-6 h-6">
                                    <img src="/images/clock.png"/>
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