'use client';

import { Instagram, Twitch, Music } from 'lucide-react';


export default function GhavLandingPage() {
  return (
    <main className="font-sans text-gray-800">

      {/* HERO */}
      <section className="ghav-section bg-ghav-offwhite text-center min-h-[80vh] flex flex-col justify-center items-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          hey, glad you're here.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          welcome to ghav! — let's listen, laugh, and build something real together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="https://linktr.ee/giftofghav"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#c7b8f5] text-white rounded-md font-semibold hover:scale-105 transition"
          >
            🎧 listen now
          </a>
          <a
            href="https://discord.com/invite/Zn4W9Tqr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#ff7c81] text-white rounded-md font-semibold hover:scale-105 transition"
          >
            💬 join the community
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="ghav-section bg-ghav-lavender text-center">
        <h2 className="text-3xl font-bold mb-4">what is ghav?</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          ghav! is about being real. about feeling stuck, about laughing anyway.
          it’s music, yes — but also a place for all of us to grow, feel, and heal together.
        </p>
      </section>

      {/* LISTEN */}
      <section className="ghav-section bg-ghav-offwhite px-6">
        <h2 className="text-3xl font-bold text-center mb-10">listen to the latest</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <a
            href="https://soundcloud.com/paulogav/carry-on-paulo-gav"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src="/ghav/albums/carry-on.jpg"
              alt="Carry On - ghav!"
              className="w-full aspect-square object-cover rounded-lg shadow-md group-hover:scale-105 transition"
            />
            <p className="mt-3 text-center font-medium">
              carry on
            </p>
          </a>
          <a
            href="https://soundcloud.com/paulogav/late-night-drive"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
           <img
              src="/ghav/albums/lnd-cover.JPG"
              alt="Late Night Drive - ghav!"
              className="w-full aspect-square object-cover rounded-lg shadow-md group-hover:scale-105 transition"
            />
            <p className="mt-3 text-center font-medium">
              late night drive
            </p>
          </a>
          <a
            href="https://soundcloud.com/paulogav/goin-dummy-freestyle-paulogav-x-dolce"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src="/ghav/albums/goin-dummy.jpg"
              alt="Goin Dummy Freestyle - ghav!"
              className="w-full aspect-square object-cover rounded-lg shadow-md group-hover:scale-105 transition"
            />
            <p className="mt-3 text-center font-medium">
              goin’ dummy freestyle
            </p>
          </a>
        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="ghav-section bg-ghav-gray">
        <h2 className="text-3xl font-bold text-center mb-10">a peek behind the scenes</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="h-64 bg-white flex items-center justify-center">
            recording
          </div>
          <div className="h-64 bg-white flex items-center justify-center">
            production
          </div>
          <div className="h-64 bg-white flex items-center justify-center">
            writing
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="ghav-section bg-ghav-coral text-center">
        <h2 className="text-3xl font-bold mb-4">you’re not alone in this</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-700">
          this is where we hang out, share music, and vibe together.
          it’s not just about listening — it’s about being heard.
        </p>
        <a
          href="https://linktr.ee/giftofghav"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#c7b8f5] text-white rounded-md font-semibold hover:scale-105 transition"
        >
          join the community
        </a>
      </section>

      {/* NEWSLETTER */}
      <section className="ghav-section bg-ghav-offwhite text-center">
        <h2 className="text-3xl font-bold mb-4">let’s grow together</h2>
        <p className="text-lg max-w-xl mx-auto mb-6 text-gray-700">
          no spam. just updates, music drops, and sometimes memes.
        </p>
        <a
          href="https://commoninja.site/773366b6-ebe0-4dd3-b77a-76bf70f22ba9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#ff7c81] text-white rounded-md font-semibold hover:scale-105 transition"
        >
          join the email list
        </a>
      </section>

      {/* FOOTER — UPDATED */}
      <footer className="bg-ghav-lavender py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* LEFT */}
          <p className="text-gray-700 text-sm max-w-md">
            ghav! is a feeling, not a person.
            <br />
            thanks for being here.
          </p>

          {/* RIGHT — SOCIAL ICONS */}
          <div className="flex items-center gap-6 text-gray-800">
            <a
              href="https://www.instagram.com/giftofghav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 font-medium hover:text-black transition-colors"
            >
              <Instagram size={18} strokeWidth={2} />
              instagram
            </a>

            <a
              href="https://www.twitch.tv/giftofghav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 font-medium hover:text-black transition-colors"
            >
              <Twitch size={18} strokeWidth={2} />
              twitch
            </a>

            <a
              href="https://soundcloud.com/paulogav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 font-medium hover:text-black transition-colors"
            >
              <Music size={18} strokeWidth={2} />
              soundcloud
            </a>
          </div>

        </div>
      </footer>


    </main>
  );
}