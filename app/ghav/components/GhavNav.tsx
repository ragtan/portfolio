'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { playSound, unlockAudio, getSoundEnabled } from '@/lib/audio';

export default function GhavNavBar() {
  const router = useRouter();

  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent instant navigation so sound can fire
    e.preventDefault();

    if (getSoundEnabled()) {
      unlockAudio();
      playSound('/sounds/return.wav', 0.35);

      // Small delay feels intentional, but subtle
      setTimeout(() => {
        router.push('/');
      }, 120);
    } else {
      // If sounds are disabled, navigate immediately
      router.push('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        {/* GHAV LOGO / HOME */}
        <Link
          href="/ghav"
          className="text-lg font-semibold tracking-wide text-zinc-700"
        >
          ghav!
        </Link>

        {/* GHAV NAV */}
        <nav className="flex gap-8 text-sm tracking-widest uppercase text-zinc-600">
          <Link
            href="/ghav/paranoia"
            className="hover:text-zinc-900 transition"
          >
            Paranoia
          </Link>

          {/* ONLY THIS LINK MAKES SOUND */}
          <Link
            href="/"
            onClick={handlePortfolioClick}
            className="hover:text-zinc-900 transition"
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}

