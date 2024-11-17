import Image from 'next/image';
export default function Header({ name, location, team}) {
  return (
    <div
      style={{
        backgroundImage: "url('/dashboard_images/hero_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white h-28 rounded-xl p-6 flex items-center justify-between"
    >
      <div className='flex items-center space-x-4'>
        <Image
          src="/header_images/profile.svg"
          alt="profile"
          width={40}
          height={40}
        />
        <h1 className="text-3xl text-black font-bold">Welcome Back, {name}!</h1>
      </div>
      <div className='flex flex-col text-black'>
        <p className="text-m font-semibold">{team}</p>
        <p className="text-m content-end font-medium">{location}</p>
      </div>
    </div>
  );
}
