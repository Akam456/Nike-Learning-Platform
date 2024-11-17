import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ContentList from './components/ContentList';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';

export default function ProfilePage() {
  return (
    <div className="flex bg-white min-h-screen p-8">
      <Sidebar />

      <div className="pl-32 mx-auto">
        {/* Profile Header */}
        <div className="border border-gray-300 rounded-lg p-6">
          <ProfileHeader />
        </div>

        {/* Main Layout: Two Columns */}
        <div className="grid grid-cols-4 gap-8 mt-8">
          {/* Left Column: Skills & Content */}
          <div className="col-span-3 space-y-6">
            <div className="border border-gray-300 rounded-lg p-6">
              <Skills />
            </div>
            <div className="border border-gray-300 rounded-lg p-6">
              <ContentList />
            </div>
          </div>

          {/* Right Column: Achievements & Discussion */}
          <div className="space-y-6">
            <div className="border border-gray-300 rounded-lg p-6">
              <Achievements />
            </div>
            <div className="border border-gray-300 rounded-lg p-3">
              <DiscussionSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscussionSection() {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-1">Discussion Activity</h2>
      <a
        href="#"
        className="text-sm font-medium text-orange-600 hover:underline flex items-center"
      >
        See all the questions Anna has answered &gt;
      </a>
    </div>
  );
}
