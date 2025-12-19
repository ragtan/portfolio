'use client';

import Image from 'next/image';
import { playSound, unlockAudio } from '@/lib/audio';

export default function MusicPage() {
  // small helpers so everything feels consistent
  const click = () => {
    unlockAudio();
    playSound('/sounds/click3.wav', 0.3);
  };

  const play = () => {
    unlockAudio();
    // swap to /sounds/play.wav later if you want
    playSound('/sounds/play.wav', 0.25);
  };

  const pause = () => {
    unlockAudio();
    // swap to /sounds/pause.wav later if you want
    playSound('/sounds/pause.wav', 0.2);
  };

  return (
    <main className="min-h-screen px-8 py-32 max-w-7xl mx-auto text-zinc-100">
      {/* PAGE HEADER */}
      <header className="mb-24 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Music — Engineering & Production</h1>
        <p className="text-lg text-zinc-400">
          Recording, mixing, mastering, and production work for independent artists
          and collaborators across a range of styles.
        </p>
      </header>

      {/* MUSIC GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* PROJECT CARD */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/images/turkey.jpg"
              alt="Turkey Mix album artwork"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold">Connor Mead — Turkey Mix</h2>
            <p className="text-sm text-zinc-400">Role: Recording / Mixing</p>
          </div>

          <audio
            controls
            className="w-full"
            src="/music/turkey.mp3"
            onPlay={play}
            onPause={pause}
          />
        </div>

        {/* PROJECT CARD */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/images/brick.jpg"
              alt="Another Brick In The Wall artwork"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold">Pink Floyd — Another Brick In The Wall</h2>
            <p className="text-sm text-zinc-400">Role: Mixing</p>
          </div>

          <audio
            controls
            className="w-full"
            src="/music/brick-web.mp3"
            onPlay={play}
            onPause={pause}
          />
        </div>

        {/* PROJECT CARD */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/images/promises.jpg"
              alt="Promises album artwork"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold">K.I.D.S x Mary Scarlett — Promises</h2>
            <p className="text-sm text-zinc-400">Role: Producing / Recording / Mixing</p>
          </div>

          <audio
            controls
            className="w-full"
            src="/music/promises-web.mp3"
            onPlay={play}
            onPause={pause}
          />
        </div>

      </section>

      {/* PERSONAL MUSIC LINK */}
      <section className="mt-32 border-t border-zinc-800 pt-16 max-w-3xl">
        <h3 className="text-2xl font-semibold mb-4">Personal Music</h3>
        <p className="text-zinc-400 mb-6">
          I also release my own music independently. Personal projects and
          collaborations live on a separate page.
        </p>

        <a
          href="/ghav"
          target="_blank"
          className="inline-block px-5 py-2 border border-zinc-600 rounded hover:bg-zinc-800 transition"
          onMouseDown={click}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') click();
          }}
        >
          Visit Personal Music Page
        </a>
      </section>
    </main>
  );
}
