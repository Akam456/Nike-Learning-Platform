"use client";

import Link from "next/link";
import CustomCard from './components/customcard';
import NoTickerCard from "./components/notickercard";
import PopUp from "./components/popup";
import React, { useState} from 'react';

import SideBar from '../components/SideBar';

export default function Home() {
  // Data for the first grid with ticker
  const continueWhereLeftOff = [
    { topTitle: "Supply Chain", title: "Forecasting Techniques", backgroundImage: '/images/ForecastingTechniques.jpg', rating: 4.8, tickerProgress: 80 },
    { topTitle: "Digital Literacy", title: "Analytics", backgroundImage: '/images/Analytics.jpg', rating: 4.3, tickerProgress: 60 },
    { topTitle: "Business Acumen", title: "Influence", backgroundImage: '/images/InfluentialCommunications.jpg', rating: 4.7, tickerProgress: 90 },
    { topTitle: "Business Acumen", title: "Adaptability", backgroundImage: '/images/Adaptability.jpg', rating: 4.5, tickerProgress: 75 },
  ];

  // Data for the second grid (Digital Literacy Skills)
  const digitalLiteracySkills = [
    { title: "Data Management", backgroundImage: '/images/DataManagement.jpg', rating: 4.8, topTitle: 'Digital Literacy' },
    { title: "AI & Machine Learning", backgroundImage: '/images/AIML.jpg', rating: 4.6, topTitle: 'Digital Literacy' },
    { title: "Product Lifecycle Management", backgroundImage: '/images/CircularProductLifecyleManagement.jpg', rating: 4.4, topTitle: 'Digital Literacy' },
    { title: "Continuous Improvement", backgroundImage: '/images/ContinuousImprovementPractices.jpg', rating: 4.7, topTitle: 'Digital Literacy' },
    { title: "Simulation", backgroundImage: '/images/Analytics.jpg', rating: 4.6, topTitle: 'Digital Literacy' },
    { title: "Supplier Relationship", backgroundImage: '/images/SupplierRelationshipManagment.jpg', rating: 4.2, topTitle: 'Digital Literacy' },
    { title: "Inventory Flow Management", backgroundImage: '/images/InventoryFlowManagement.jpg', rating: 4.7, topTitle: 'Digital Literacy' },
  ];

  // Data for the third grid (Business Acumen Influence)
  const businessAcumenInfluence = [
    { title: "Financial Acumen", backgroundImage: '/images/FinancialAcumen.jpg', rating: 4.6, topTitle: "Business Acumen Influence" },
    { title: "Human-Centered Design", backgroundImage: '/images/HumanCentricDesign.jpg', rating: 4.2, topTitle: "Business Acumen Influence" },
    { title: "Systems Thinking", backgroundImage: '/images/SystemsThinking.jpg', rating: 4.8, topTitle: "Business Acumen Influence" },
    { title: "Customer Service", backgroundImage: '/images/ContinuousImprovementPractices.jpg', rating: 4.3, topTitle: "Business Acumen Influence" },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const openPopUp = (item) => {
    console.log('Item clicked:', item);
    setSelectedCard(item); // Set the clicked card's data to the state
  };

  const closePopUp = () => {
    setSelectedCard(null); // Close the PopUp by setting selectedCard to null
  };

  return (
    <div className="flex flex-grow">
    <div>
      <SideBar/>
    </div>
    <div className="flex-grow flex flex-col overflow-hidden">
      <div className="bg-white bg-cover bg-center bg-no-repeat text-black py-8 " style={{ backgroundImage: "url('/images/bg.png')",
      backgroundPosition: "top", // Adjust to show the middle part
      backgroundSize: "cover" }}>
        {/* Main Container */}
          {/* First Section - Continue where you left off */}
          <h1 className="text-[2.2rem] font-sans font-[690] pl-8 pb-3">Continue where you left off</h1>
          <div className="pl-[2rem] flex flex-wrap justify-start">
            {continueWhereLeftOff.map((item, index) => (
              <CustomCard
                key={index}
                topTitle={item.topTitle}
                title={item.title}
                backgroundImage={item.backgroundImage}
                rating={item.rating}
                tickerProgress={item.tickerProgress}
                onClick={() => openPopUp(item)}
              />
            ))}
          </div>
          

          {/* Second Section - Digital Literacy Skills (Slider) */}
          <h2 className="pl-[2rem] font-sans text-[1.8rem] font-[690] pt-11 pb-2">Digital Literacy Skills</h2>
          <div className="pl-[2rem] slider-container">
            <div className="slider-content py-1">
              {digitalLiteracySkills.map((item, index) => (
                <NoTickerCard
                key={index}
                title={item.title}
                backgroundImage={item.backgroundImage}
                rating={item.rating}
                onClick={() => openPopUp(item)}
              />
              ))}
            </div>
          </div>

          {/* Third Section - Business Acumen: Influence (Slider) */}
          <h2 className="pl-[2rem] font-sans text-[1.8rem] font-[690] pb-2 pt-6">Because you started Business Acumen: Influence</h2>
          <div className="pl-[2rem] slider-container">
            <div className="slider-content py-1">
              {businessAcumenInfluence.map((item, index) => (
                <NoTickerCard
                  key={index}
                  title={item.title}
                  backgroundImage={item.backgroundImage}
                  rating={item.rating}
                  onClick={() => openPopUp(item)}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="flex justify-center mt-8">
            <Link href="/skills">
              {/* Link contents */}
            </Link>
          </footer>
          {/* Conditionally render the PopUp if a card is clicked */}
          {selectedCard && (
          <PopUp
            topTitle={selectedCard.topTitle}
            title={selectedCard.title}
            rating={selectedCard.rating}
            closePopUp={closePopUp}
          />
        )}
      </div>
      </div>
    </div>
  );
}
