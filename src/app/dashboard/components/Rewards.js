import Image from 'next/image';
import Link from "next/link";

export default function Rewards() {
  return (
    <div className="bg-[#eaeaea] rounded-lg p-6 text-left group">
      <h2 className="text-xl text-black font-bold">Rewards</h2>
      <div className="flex items-center gap-x-1">
        <Link href="/" className="text-sm text-black mt-2 transition-transform duration-200 group-hover:underline group-hover:text-[#f17b50]">
          View this month’s prize for the top 3 ranking learners
        </Link>
        <Image
          src="/dashboard_images/grey_arrow.svg" // Replace with your arrow icon path
          alt="arrow icon"
          width={12}
          height={12}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}
