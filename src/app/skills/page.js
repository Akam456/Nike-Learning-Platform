import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        Skill Share Page
      </p>


      {/* Temporary Navigation Before Side Bar */}
      <footer className="row-start-3 flex gap-6 justify-center">
      <Link href="/home" className="hover:underline hover:underline-offset-4"> To Home / Course Page → </Link>
      </footer>
      {/* Temporary Navigation Before Side Bar */}
    </div>
  );
}
