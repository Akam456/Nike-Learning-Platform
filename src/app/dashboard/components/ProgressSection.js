import Image from 'next/image';

export default function ProgressSection() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/dashboard_images/courses.svg" // Replace with your courses icon path
            alt="Courses Icon"
            width={17}
            height={17}
          />
          <h2 className="text-xl font-extrabold text-black">Courses In Progress</h2>
        </div>
        <Image
          src="/dashboard_images/circles.svg" // Replace with your courses icon path
          alt="Progress Icon"
          width={20}
          height={17}
        />
      </div>
      
      <div className="flex justify-between mt-4">
        {['Forecasting Techniques', 'Analytics', 'Influence'].map((course, idx) => (
          <button
            key={idx}
            className="flex w-72 items-center justify-between text-black px-4 py-2 rounded-lg font-medium border border-[#eaeaea]"
          >
            {course}
            <Image
              src="/dashboard_images/arrow.svg" // Replace with your arrow icon path
              alt="Arrow Icon"
              width={8}
              height={8}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
