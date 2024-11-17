export default function Level() {
    return (
      <div className="bg-[#fff1ed] text-center p-8 rounded-lg">
        {/* Top Section with Logo and Level Info */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <img
            src="/dashboard_images/logo_diamond.svg"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
          <div className="text-left">
            <p className="text-xl font-bold text-gray-800">Level 3</p>
            <p className="text-md font-semibold text-[#ff6447]">75 points</p>
          </div>
        </div>
  
        {/* Progress Bar Section */}
        <div className="bg-[#ffd8cd] p-3 mx-4 rounded-lg">
          <div className="text-left text-sm font-bold text-gray-800 mb-2">
            Level 4
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <div className="w-9/12 bg-black h-4 rounded-full relative overflow-hidden">
                <div
                className="bg-[#ff6447] h-full"
                style={{ width: '65%' }}
                ></div>
            </div>
            <p className="text-right text-m font-bold text-[#ff6447]">
                75/100
            </p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <p className="text-sm font-medium text-[#737373] mt-3">
          You are 25 points away from Level 4
        </p>
      </div>
    );
  }
  