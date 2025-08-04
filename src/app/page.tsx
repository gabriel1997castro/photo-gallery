import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="w-full max-w-sm mx-auto px-4 py-10 min-h-screen flex flex-col items-center justify-center font-sans">
      <Logo />
      <h1 className="text-2xl font-bold text-primary mt-8 mb-4 text-center">
        Welcome to Photo Gallery
      </h1>
      <p className="text-neutral-600 text-center mb-8">
        Sign in to browse beautiful nature photos and save your favorites.
      </p>
      <div className="flex flex-col gap-4 w-full">
        <Link
          href="/signin"
          className="w-full bg-secondary hover:bg-secondary-hover text-white py-3 px-3 rounded-lg transition-colors font-bold text-base text-center"
        >
          Sign In
        </Link>
        <Link
          href="/photos"
          className="w-full bg-primary hover:bg-primary/80 text-white py-3 px-3 rounded-lg transition-colors font-bold text-base text-center"
        >
          View Gallery
        </Link>
      </div>
      <footer className="mt-12 text-xs text-neutral-400 text-center">
        &copy; {new Date().getFullYear()} Photo Gallery. Powered by Pexels API.
      </footer>
    </div>
  );
}
