'use client';

import { Mail, Instagram, Linkedin, Twitch } from 'lucide-react';
import { playSound, unlockAudio, getSoundEnabled } from '@/lib/audio';

export default function ContactPage() {
  const CLICK = '/sounds/link.wav';
  const SUBMIT = '/sounds/submit.wav'; // add this file, or swap to CLICK if needed

  const sClick = () => {
    unlockAudio();
    playSound(CLICK, 0.3);
  };

  const sSubmit = () => {
    unlockAudio();
    playSound(SUBMIT, 0.4);
  };

  const sFocus = () => {
    // subtle, optional: only play if sounds enabled
    if (!getSoundEnabled()) return;
    unlockAudio();
    playSound(CLICK, 0.12);
  };

  return (
    <main className="min-h-screen px-8 py-32 max-w-7xl mx-auto text-zinc-100">
      {/* PAGE HEADER */}
      <header className="mb-24 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Contact</h1>
        <p className="text-lg text-zinc-400">
          I’m currently available for freelance work across film,
          video game audio, and music production.
        </p>
      </header>

      {/* CONTENT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT COLUMN — INFO */}
        <div className="space-y-10">
          {/* Email */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <a
              href="mailto:audio@raghavtaneja.ca"
              className="inline-flex items-center gap-3 text-zinc-300 hover:text-white transition"
              onMouseDown={sClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') sClick();
              }}
            >
              <Mail size={18} />
              audio@raghavtaneja.ca
            </a>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Socials</h2>

            <div className="flex flex-wrap gap-6">
              <a
                href="https://www.instagram.com/ragtan99/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
                onMouseDown={sClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') sClick();
                }}
              >
                <Instagram size={20} />
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/raghav-taneja-170819164/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
                onMouseDown={sClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') sClick();
                }}
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://www.twitch.tv/giftofghav"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
                onMouseDown={sClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') sClick();
                }}
              >
                <Twitch size={20} />
                Twitch
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="text-zinc-400 text-sm">
            Currently accepting new projects and collaborations.
          </div>
        </div>

        {/* RIGHT COLUMN — FORM */}
        <form
          className="space-y-6 bg-zinc-900/40 p-8 rounded-xl border border-zinc-800"
          onSubmit={(e) => {
            e.preventDefault();
            sSubmit();
          }}
        >
          <div>
            <label className="block text-sm mb-1 text-zinc-400">Name</label>
            <input
              type="text"
              placeholder="Your name"
              onFocus={sFocus}
              className="w-full bg-black border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-zinc-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              onFocus={sFocus}
              className="w-full bg-black border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-zinc-400">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              onFocus={sFocus}
              className="w-full bg-black border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-white text-black rounded hover:bg-zinc-200 transition"
            onMouseDown={sClick}
          >
            Send Message
          </button>

          <p className="text-xs text-zinc-500">
            Contact form backend coming soon. For now, email is the best way to reach me.
          </p>
        </form>
      </section>
    </main>
  );
}
