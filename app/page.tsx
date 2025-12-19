'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center px-8 py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold tracking-tight mb-4">
              Raghav Taneja
            </h1>
            <p className="text-xl text-zinc-400 mb-2">
              Audio Engineer & Sound Designer
            </p>
            <p className="text-3xl font-light text-zinc-200">
              Rebuilding sound from the ground up.
            </p>
          </div>

          <div className="text-lg text-zinc-300 space-y-6 leading-relaxed">
            <p>
              I’m an audio engineer and sound designer working across film,
              video games, and music. I enjoy taking sound apart and putting
              it back together—rebuilding scenes, moments, and worlds from silence.
            </p>
            <p>
              My work ranges from full post-production audio for picture, to
              interactive sound design in games, to recording, mixing, and
              producing music for artists.
            </p>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
          <Image
            src="/profile.jpeg"
            alt="Raghav Taneja portrait"
            fill
            className="object-cover rounded-lg grayscale hover:grayscale-0 transition duration-700"
            priority
          />
          {/* subtle frame */}
          <div className="absolute inset-0 border border-zinc-700 rounded-lg pointer-events-none" />
        </div>

      </div>
    </main>
  );
}
