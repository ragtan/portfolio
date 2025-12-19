'use client';

import ReleaseCountdown from './ReleaseCountdown';

type Track = {
  title: string;
  src: string;
};

const TRACKS: Track[] = [
  { title: 'Burning Up', src: '/ghav/paranoia/burning-up.m4a' },
  { title: 'Lost In Snow', src: '/ghav/paranoia/lost-in-snow.m4a' },
  { title: 'Back to Reality', src: '/ghav/paranoia/back-to-reality.m4a' },
  { title: 'Inside Eyes', src: '/ghav/paranoia/inside-eyes.mp4' }, // audio-only mp4 is OK
  { title: 'On My Life (ft. A K.I.D)', src: '/ghav/paranoia/on-my-life.m4a' },
  { title: 'All Falls Down – Demo', src: '/ghav/paranoia/all-falls-down.m4a' },
];

export default function ParanoiaPage() {
  return (
    <main className="bg-[#0f0f12] text-[#eaeaea]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20">
        <div className="mb-12">
          <ReleaseCountdown />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          PARANOIA
        </h1>

        <p className="mt-6 max-w-xl text-lg text-[#9a9a9a]">
          An experimental EP exploring anxiety, isolation, and distorted perception
          through sound design, texture, and rhythm.
        </p>

        <p className="mt-4 text-sm uppercase tracking-widest text-[#ac3b3b]">
          GHAV x BLAZE · 2025
        </p>
      </section>

      {/* CONCEPT */}
      <section className="bg-[#1a1a1f] px-8 md:px-20 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Concept
        </h2>

        <p className="max-w-3xl text-lg leading-relaxed text-[#cfcfcf]">
          <em>Paranoia</em> is built around the feeling of being watched — not
          literally, but emotionally. Every sound is intentional: detuned
          textures, unstable rhythms, and moments of silence designed to feel
          uncomfortable rather than empty.
          <br /><br />
          The project developed alongside livestreamed production sessions,
          capturing raw decision-making and experimentation in real time.
        </p>
      </section>

      {/* TRACKLIST */}
      <section className="px-8 md:px-20 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Tracklist
        </h2>

        <ol className="space-y-8 max-w-3xl">
          {TRACKS.map((track, i) => (
            <li
              key={track.src}
              className="border border-[#2a2a2e] rounded-xl p-5 bg-[#121216]"
            >
              <div className="flex items-center justify-between gap-6 mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#9a9a9a] w-10">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium">
                    {track.title}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest text-[#9a9a9a]">
                  audio
                </span>
              </div>

              <audio controls preload="none" className="w-full">
                <source src={track.src} />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ol>
      </section>

      {/* PRODUCTION BREAKDOWN */}
      <section className="bg-[#1a1a1f] px-8 md:px-20 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Production Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((vid) => (
            <div key={vid} className="space-y-4">
              <div className="aspect-video bg-black border border-[#2a2a2e] rounded-lg flex items-center justify-center text-[#9a9a9a]">
                Livestream Clip {vid}
              </div>

              <p className="text-sm leading-relaxed text-[#cfcfcf]">
                Session focused on sound design, arrangement decisions,
                and real-time problem solving during the production of
                <em> Paranoia</em>.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="px-8 md:px-20 py-20 text-sm text-[#9a9a9a]">
        <p>
          Written, produced, and engineered by BLAZE and ghav!
          <br />
          Created for academic evaluation and artistic release.
        </p>
      </section>

    </main>
  );
}
