import Hero from './components/Header';
import ProgressSection from './components/ProgressSection.js';
import SkillExchange from './components/SkillExchange';
import SkillsSection from './components/SkillsSection';
import Achievements from './components/Achievements';
import Leaderboard from './components/LeaderBoard.js';
import Rewards from './components/Rewards';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import Level from './components/Level.js';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-8 flex">
      <Sidebar />
      <div className="flex-grow pl-32 space-y-6">
        {/* Header Section */}
        <Header Title="My Profile"/>
        <Hero name="Emily" team="Insights and Analytics" location="Portland, OR" />

        {/* Courses and Skill Exchange */}
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <ProgressSection />
            <SkillExchange />
            <SkillsSection />
            <Achievements />
          </div>

          {/* Sidebar: Level and Leaderboard */}
          <div>
            <Level />
            <Leaderboard />
            <Rewards />
          </div>
        </div>
      </div>
    </div>
  );
}
