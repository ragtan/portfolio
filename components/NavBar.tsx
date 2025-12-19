'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { playSound, unlockAudio, setSoundEnabled } from '@/lib/audio';
import { useState } from 'react';

const navItems = [
  { label: 'Film', href: '/film' },
  { label: 'Game Audio', href: '/game' },
  { label: 'Music', href: '/music' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const router = useRouter();
  const [soundEnabled, setLocalSoundEnabled] = useState(true);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    unlockAudio();
    playSound('/sounds/click1.wav');

    setTimeout(() => {
      router.push(href);
    }, 120);
  };

  const toggleSound = () => {
    const newValue = !soundEnabled;
    setLocalSoundEnabled(newValue);
    setSoundEnabled(newValue);
    if (newValue) playSound('/sounds/click1.wav', 0.25);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          onMouseEnter={() => playSound('/sounds/hover1.wav', 0.15)}
          className="text-xl font-semibold tracking-wide nav-link"
        >
          Raghav Taneja
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 items-center text-sm uppercase tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              onMouseEnter={() => playSound('/sounds/hover1.wav', 0.15)}
              className="text-zinc-300 hover:text-white transition-colors nav-link"
            >
              {item.label}
            </Link>
          ))}

          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            className="ml-6 px-3 py-1 text-sm rounded bg-zinc-700 hover:bg-zinc-600 transition-colors button-hover"
          >
            {soundEnabled ? 'Sound ON' : 'Sound OFF'}
          </button>
        </nav>
      </div>
    </header>
  );
}