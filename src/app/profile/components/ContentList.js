import { LargeVideoCard } from './LargeVideoCard';
import { SmallVideoCard } from './SmallVideoCard';

export default function ContentList() {
  return (
    <div>
      <h2 className="text-3xl font-black text-black mb-6">From Anna</h2>
      <div className="grid grid-cols-3 gap-1 divide-x-4 divide-gray-350">
        {/* Left Column: Large Video */}
        <div className="col-span-1 pr-6 flex items-center justify-center">
          <LargeVideoCard
            title="Predicting Trends Using SQL"
            thumbnailUrl="/images/Analytics.jpg"
          />
        </div>

        {/* Right Column: Small Video Cards */}
        <div className="col-span-2 pl-6 space-y-6">
          <SmallVideoCard
            title="Article Title"
            subtitle="Video Title"
            description="This is a description of the article. This is a description of the article."
            thumbnailUrl="/images/DataManagement.jpg"
          />
          <SmallVideoCard
            title="Article Title"
            subtitle="Video Title"
            description="This is a description of the article. This is a description of the article."
            thumbnailUrl="/images/Datamanagement.jpg"
          />
        </div>
      </div>
    </div>
  );
}
