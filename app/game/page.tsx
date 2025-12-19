'use client';

export default function GameAudioPage() {
  return (
    <main className="min-h-screen px-8 py-32 max-w-7xl mx-auto text-zinc-100">

      {/* PAGE HEADER */}
      <header className="mb-24 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Video Game Audio</h1>
        <p className="text-lg text-zinc-400">
          Sound design and audio implementation for interactive systems,
          focusing on responsiveness, clarity, and player feedback.
        </p>
      </header>

      {/* ───────────────── PROJECT ───────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — GAME PREVIEW */}
        <div className="space-y-6">
          <div className="w-full aspect-video border border-dashed border-zinc-700 rounded-lg flex items-center justify-center">
            <div className="text-center text-zinc-500 px-6">
              <h2 className="text-xl font-semibold mb-2">Gameplay / WebGL Build</h2>
              <p className="text-sm">
                Playable WebGL version and gameplay footage coming soon.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">
            Angry Bots
          </h2>
          <p className="text-zinc-400">
            Full sound design and implementation for a third-person action game.
          </p>

          <button
            disabled
            className="inline-block mt-4 px-4 py-2 border border-zinc-700 rounded text-zinc-500 cursor-not-allowed"
          >
            Download Windows Build (Coming Soon)
          </button>
        </div>

        {/* RIGHT — DETAILS */}
        <div className="space-y-10">

          {/* ROLE */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Role</h3>
            <p className="text-zinc-300">
              Sound Designer & Audio Implementer
            </p>
          </div>

          {/* RESPONSIBILITIES */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
            <ul className="space-y-2 text-zinc-300 list-disc list-inside">
              <li>Designed all weapon, movement, enemy, and environmental sounds</li>
              <li>Built responsive audio feedback systems tied to gameplay events</li>
              <li>Balanced clarity and impact during fast-paced combat</li>
              <li>Integrated and tested audio directly within Unity</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Tech</h3>
            <ul className="space-y-2 text-zinc-300 list-disc list-inside">
              <li>Unity</li>
              <li>Pro Tools</li>
              <li>Game audio asset pipelines</li>
              <li>Event-driven sound systems</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}