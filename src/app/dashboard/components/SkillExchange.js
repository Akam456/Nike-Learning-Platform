
import Image from 'next/image';
export default function SkillExchange() {
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/dashboard_images/exchange.svg" // Replace with your courses icon path
              alt="Courses Icon"
              width={18}
              height={18}
            />
            <h2 className="text-xl font-extrabold text-black">Skill Exchange In Progress</h2>
          </div>
        </div>

        <div className="relative bg-white p-4 mt-4 border border-[#eaeaea] rounded-lg w-[32%]">
          <div className="flex items-center space-x-3">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white">
                  <Image 
                    src= "/dashboard_images/annie.svg"
                    alt= "annie"
                    className="w-full h-full object-cover" 
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="flex-grow min-h-[3.5rem] flex flex-col justify-center">
              <div className='flex justify-between'>
                <p className="font-semibold text-black text-xs">Annie</p>
                <Image
                  src="/dashboard_images/arrow.svg" // Replace with your arrow icon path
                  alt="Arrow Icon"
                  width={8}
                  height={8}
                />
              </div>
              <p className="text-sm mt-2 font-bold bg-black text-transparent bg-clip-text">
                Predicting Trends Using SQL
              </p>
            </div>
          </div>
        </div>
    </div>
    );
  }
  