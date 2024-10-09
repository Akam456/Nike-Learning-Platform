import Link from "next/link";
import CustomCard from './components/customcard';
import NoTickerCard from "./components/notickercard";
import Sidebar from "../components/SideBar";

export default function Home() {
  // Data for the first grid with ticker
  const continueWhereLeftOff = [
    { topTitle: "Supply Chain", title: "Forecasting Techniques", backgroundImage: '/images/nike.png', rating: 4.8, tickerProgress: 80 },
    { topTitle: "Digital Literacy", title: "Analytics", backgroundImage: '/images/nike.png', rating: 4.3, tickerProgress: 60 },
    { topTitle: "Business Acumen", title: "Influence", backgroundImage: '/images/nike.png', rating: 4.7, tickerProgress: 90 },
    { topTitle: "Business Acumen", title: "Adaptability", backgroundImage: '/images/nike.png', rating: 4.5, tickerProgress: 75 },
  ];

  // Data for the second grid (Digital Literacy Skills)
  const digitalLiteracySkills = [
    { title: "Data Management", backgroundImage: '/images/nike.png', rating: 4.8 },
    { title: "AI & Machine Learning", backgroundImage: '/images/nike.png', rating: 4.6 },
    { title: "Simulation", backgroundImage: '/images/nike.png', rating: 4.4 },
    { title: "SQL", backgroundImage: '/images/nike.png', rating: 4.7 },
    { title: "Running Micro Simulations", backgroundImage: '/images/nike.png', rating: 4.2 },
    { title: "Trends on Tableau", backgroundImage: '/images/nike.png', rating: 4.7 },
  ];

  // Data for the third grid (Business Acumen Influence)
  const businessAcumenInfluence = [
    { title: "Financial Acumen", backgroundImage: '/images/nike.png', rating: 4.6 },
    { title: "Human-Centered Design", backgroundImage: '/images/nike.png', rating: 4.2 },
    { title: "Systems Thinking", backgroundImage: '/images/nike.png', rating: 4.8 },
    { title: "Customer Service", backgroundImage: '/images/nike.png', rating: 4.3 },
  ];

  return (
    <div className="flex min-h-screen bg-cover bg-center bg-no-repeat text-black">
      <Sidebar /> 
      {/* Main Container */}
      <div className="min-h-screen flex-grow bg-cover bg-center bg-no-repeat text-black py-8" style={{ backgroundImage: "url('/images/bg.png')" }}>
        <div className="max-w-screen-xl mx-auto p-6">
          
          {/* First Section - Continue where you left off */}
          <h1 className="text-3xl font-bold mb-6">Continue where you left off</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {continueWhereLeftOff.map((item, index) => (
              <CustomCard
                key={index}
                topTitle={item.topTitle}
                title={item.title}
                backgroundImage={item.backgroundImage}
                rating={item.rating}
                tickerProgress={item.tickerProgress}
              />
            ))}
          </div>

          {/* Second Section - Digital Literacy Skills (Slider) */}
          <h2 className="text-3xl font-bold my-6 pt-12">Digital Literacy Skills</h2>
          <div className="slider-container">
            <div className="slider-content">
              {digitalLiteracySkills.map((item, index) => (
                <NoTickerCard
                  key={index}
                  title={item.title}
                  backgroundImage={item.backgroundImage}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/* Third Section - Business Acumen: Influence (Slider) */}
          <h2 className="text-3xl font-bold my-6">Because you started Business Acumen: Influence</h2>
          <div className="slider-container">
            <div className="slider-content">
              {businessAcumenInfluence.map((item, index) => (
                <NoTickerCard
                  key={index}
                  title={item.title}
                  backgroundImage={item.backgroundImage}
                  rating={item.rating}
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
        </div>
      </div>
    </div>
  );
}
