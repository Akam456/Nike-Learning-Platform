import Image from 'next/image';

export default function Leaderboard() {
  return (
    <div className="p-6 rounded-lg">
      {/* Title */}
      <h2 className="text-2xl font-bold text-black mb-6">Leaderboard</h2>

      <div className="bg-[#eaeaea] p-3 rounded-xl">


      {/* Table Header */}
      <div className="flex items-center justify-between bg-black text-white rounded-xl m-2 py-3 px-4">
        <div className='flex gap-x-2'>
          <span className="text-sm font-bold">Rank</span>
          <Image
              src="/dashboard_images/profile.svg" // Replace with your courses icon path
              alt="Courses Icon"
              width={17}
              height={17}
          />
        </div>
        <span className="text-sm font-bold">Points</span>
      </div>

      {/* Leaderboard Entries */}
        {/* Top 1 */}
        <div className="flex items-center justify-between rounded-xl bg-white py-3 px-4 m-2 border-b">
          <span className="text-lg text-black font-bold">1</span>
          <div className="flex items-center space-x-3">
            <img
              src="/path/to/thomas.jpg"
              alt="Thomas"
              className="w-8 h-8 rounded-full border border-orange-500"
            />
            <div>
              <p className="text-sm font-bold text-black">Thomas</p>
              <p className="text-xs text-orange-500">Level 22</p>
            </div>
          </div>
          <span className="text-lg font-bold text-[#f17b50]">5,600</span>
        </div>

        {/* Top 2 */}
        <div className="flex items-center justify-between rounded-xl bg-white m-2 py-3 px-4 border-b">
          <span className="text-lg text-black font-bold">2</span>
          <div className="flex items-center space-x-3">
            <img
              src="/path/to/jenn.jpg"
              alt="Jenn"
              className="w-8 h-8 rounded-full border border-orange-500"
            />
            <div>
              <p className="text-sm font-bold text-black">Jenn</p>
              <p className="text-xs text-orange-500">Level 22</p>
            </div>
          </div>
          <span className="text-lg font-bold text-[#f17b50]">5,200</span>
        </div>

        {/* Top 3 */}
        <div className="flex items-center justify-between rounded-xl bg-white m-2 py-3 px-4 border-b">
          <span className="text-lg text-black font-bold">3</span>
          <div className="flex items-center space-x-3">
            <img
              src="/path/to/amelia.jpg"
              alt="Amelia"
              className="w-8 h-8 rounded-full border border-orange-500"
            />
            <div>
              <p className="text-sm font-bold text-black">Amelia</p>
              <p className="text-xs text-orange-500">Level 20</p>
            </div>
          </div>
          <span className="text-lg font-bold text-[#f17b50]">4,700</span>
        </div>

        {/* User */}
        <div className="flex items-center justify-between rounded-xl bg-[#ffe9e3] py-4 px-5 rounded-b-xl">
          <span className="text-lg text-black font-bold">132</span>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f17b50]">
              <img
                src="/path/to/you.jpg"
                alt="You"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-black">You</p>
              <p className="text-xs text-orange-500">Level 3</p>
            </div>
          </div>
          <span className="text-lg font-bold text-[#f17b50]">75</span>
        </div>
        </div>
    </div>
  );
}
