'use client';

import Link from 'next/link';
import { getSoundEnabled, playSound, unlockAudio } from '@/lib/audio';

export default function FilmPage() {
  const CLICK = '/sounds/click4.wav';
  const PTX_DOWNLOAD = '/sounds/download.wav'; // your 3.36s sound

  const sClick = (vol = 0.25) => {
    if (!getSoundEnabled()) return;
    unlockAudio();
    playSound(CLICK, vol);
  };

  const sDownloadPTX = () => {
    if (!getSoundEnabled()) return;
    unlockAudio();
    playSound(PTX_DOWNLOAD, 0.4);
  };

  return (
    <main className="min-h-screen px-8 py-32 max-w-7xl mx-auto text-zinc-100">
      {/* PAGE HEADER */}
      <header className="mb-24 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Film & Post-Production Audio</h1>
        <p className="text-lg text-zinc-400">
          Complete audio redesigns for picture — all sound rebuilt from silence.
          Dialogue, Foley, sound effects, ambience, and final mix.
        </p>
      </header>

      <div className="space-y-32">
        {/* ───────────────── BATMAN ───────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* VIDEO */}
          <div className="space-y-4">
            <video
              src="/film/batman-enc1.mp4"
              controls
              className="w-full rounded-lg border border-zinc-700"
              onPlay={() => sClick(0.22)}
              onPause={() => sClick(0.18)}
            />
            <h2 className="text-2xl font-semibold">Batman Begins — Scene Redesign</h2>
            <p className="text-zinc-400">
              Grounded realism with detailed Foley, environmental texture, and cinematic dynamics.
            </p>
          </div>

          {/* SESSION */}
          <div className="space-y-6">
            <video
              src="/film/batman-session.mp4"
              controls
              className="w-full rounded-lg border border-zinc-700"
              onPlay={() => sClick(0.22)}
              onPause={() => sClick(0.18)}
            />
            <div className="text-sm text-zinc-400">
              Pro Tools session walkthrough showing organization, routing, and mix structure.
            </div>

            <Link
              href="/downloads/batman-session.ptx"
              className="inline-block mt-4 px-4 py-2 border border-zinc-600 rounded hover:bg-zinc-800 transition"
              onMouseDown={sDownloadPTX}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') sDownloadPTX();
              }}
            >
              Download Pro Tools Session (.ptx)
            </Link>
          </div>
        </section>

        {/* ───────────────── SHREK ───────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* VIDEO */}
          <div className="space-y-4">
            <video
              src="/film/shrek-enc.mp4"
              controls
              className="w-full rounded-lg border border-zinc-700"
              onPlay={() => sClick(0.22)}
              onPause={() => sClick(0.18)}
            />
            <h2 className="text-2xl font-semibold">Shrek — Scene Redesign</h2>
            <p className="text-zinc-400">
              Expressive Foley, exaggerated physicality, and comedic timing.
            </p>
          </div>

          {/* SESSION */}
          <div className="space-y-6">
            <video
              src="/film/shrek-session.mp4"
              controls
              className="w-full rounded-lg border border-zinc-700"
              onPlay={() => sClick(0.22)}
              onPause={() => sClick(0.18)}
            />
            <div className="text-sm text-zinc-400">
              Pro Tools session breakdown focusing on layered Foley and character movement.
            </div>

            <Link
              href="/downloads/shrek-session.ptx"
              className="inline-block mt-4 px-4 py-2 border border-zinc-600 rounded hover:bg-zinc-800 transition"
              onMouseDown={sDownloadPTX}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') sDownloadPTX();
              }}
            >
              Download Pro Tools Session (.ptx)
            </Link>
          </div>
        </section>

        {/* ───────────────── MATRIX (COMING SOON) ───────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex items-center justify-center border border-dashed border-zinc-700 rounded-lg min-h-[300px]">
            <div className="text-center text-zinc-500">
              <h2 className="text-2xl font-semibold mb-2">The Matrix</h2>
              <p>Scene redesign coming soon.</p>
            </div>
          </div>

          <div className="flex items-center justify-center border border-dashed border-zinc-700 rounded-lg min-h-[300px]">
            <p className="text-zinc-500">Session walkthrough coming soon.</p>
          </div>
        </section>

        {/* ───────────────── INCREDIBLES (COMING SOON) ───────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex items-center justify-center border border-dashed border-zinc-700 rounded-lg min-h-[300px]">
            <div className="text-center text-zinc-500">
              <h2 className="text-2xl font-semibold mb-2">The Incredibles</h2>
              <p>Scene redesign coming soon.</p>
            </div>
          </div>

          <div className="flex items-center justify-center border border-dashed border-zinc-700 rounded-lg min-h-[300px]">
            <p className="text-zinc-500">Session walkthrough coming soon.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
