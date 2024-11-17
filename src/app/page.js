import Link from "next/link";

export default function Home() {
  return (
    
    <div>

      <div className="row-start-3 flex gap-6 justify-center">
        Place Holder Page. Go to home or skill share
      </div>


      
      {/* Temporary Navigation Before Side Bar */}
      <footer className="row-start-3 flex gap-6 justify-center">
      <Link href="/home" className="hover:underline hover:underline-offset-4"> To Home / Course Page → </Link>
      <Link href="/skills" className="hover:underline hover:underline-offset-4"> To Skill Share Page → </Link>
      <Link href="/profile" className="hover:underline hover:underline-offset-4"> To Profile Page → </Link>
      <Link href="/dashboard" className="hover:underline hover:underline-offset-4"> To Dashboard Page → </Link>
      </footer>
      {/* Temporary Navigation Before Side Bar */}
    </div>
  );
}
