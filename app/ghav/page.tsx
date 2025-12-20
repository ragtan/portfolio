'use client';

import { Instagram, Twitch, Music } from 'lucide-react';

export default function GhavLandingPage() {
  return (
    <main className="font-sans text-gray-900 bg-ghav-offwhite">

      {/* HERO */}
      <section className="ghav-section bg-ghav-offwhite min-h-[80vh] flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl">

          {/* TITLE + IMAGE GROUP */}
          <div className="flex items-center gap-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              hey, glad you're here.
            </h1>

            <img
              src="/ghav/brand/ghav-smiley.png"
              alt="ghav smiley"
              className="w-16 md:w-24 opacity-90"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
            welcome to ghav! — let's listen, laugh, and build something real together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://soundcloud.com/paulogav"
              className="px-8 py-3 bg-[#c7b8f5] text-white rounded-md font-semibold hover:scale-105 transition"
            >
              🎧 listen now
            </a>

            <a
              href="https://linktr.ee/giftofghav"
              className="px-8 py-3 bg-[#ff7c81] text-white rounded-md font-semibold hover:scale-105 transition"
            >
              💬 join the community
            </a>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="bg-ghav-lavender py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">what is ghav?</h2>
          <p className="text-lg text-gray-700">
            ghav! is about being real. about feeling stuck, about laughing anyway.
            it’s music, yes — but also a place for all of us to grow, feel, and heal together.
          </p>
        </div>
      </section>

      {/* LISTEN */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            listen to the latest
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* ALBUM 1 */}
            <a
              href="https://soundcloud.com/paulogav/carry-on-paulo-gav"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-md">
                <img
                  src="/ghav/albums/carry-on.jpg"
                  alt="Album cover 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p className="mt-4 text-center font-medium text-gray-900">
                carry on - ghav!
              </p>
            </a>

            {/* ALBUM 2 */}
            <a
              href="https://soundcloud.com/paulogav/late-night-drive"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-md">
                <img
                  src="/ghav/albums/lnd-cover.JPG"
                  alt="Album cover 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p className="mt-4 text-center font-medium text-gray-900">
                late night drive - ghav!
              </p>
            </a>

            {/* ALBUM 3 */}
            <a
              href="https://soundcloud.com/paulogav/goin-dummy-freestyle-paulogav-x-dolce"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-md">
                <img
                  src="/ghav/albums/goin-dummy.jpg"
                  alt="Album cover 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p className="mt-4 text-center font-medium text-gray-900">
                goin' dummy freestyle - ghav! x dolce
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="bg-ghav-gray py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            a peek behind the scenes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="h-64 bg-white rounded-xl flex items-center justify-center">
              recording
            </div>
            <div className="h-64 bg-white rounded-xl flex items-center justify-center">
              production
            </div>
            <div className="h-64 bg-white rounded-xl flex items-center justify-center">
              writing
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-ghav-coral py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            you’re not alone in this
          </h2>

          <p className="text-lg text-gray-700">
            this is where we hang out, share music, and vibe together.
            it’s not just about listening — it’s about being heard.
          </p>

          <a
            href="https://discord.com/invite/Zn4W9Tqr"
            className="inline-block px-8 py-3 rounded-full bg-[#c7b8f5] text-white font-semibold hover:scale-105 transition"
          >
            join the community
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            let’s grow together
          </h2>

          <p className="text-lg text-gray-700">
            no spam. just updates, music drops, and sometimes memes.
          </p>

          <a
            href="https://commoninja.site/773366b6-ebe0-4dd3-b77a-76bf70f22ba9"
            className="inline-block px-8 py-3 rounded-full bg-[#ff7c81] text-white font-semibold hover:scale-105 transition"
          >
            join the email list
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ghav-lavender py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-8 px-6">

          {/* LEFT — TEXT + IMAGE */}
          <div className="flex items-center gap-4 text-left">
            <p className="text-gray-600 text-sm leading-relaxed">
              ghav! is a feeling, not a person.<br />
              thanks for being here.
            </p>

            <img
              src="/ghav/brand/ghav-smiley.png"
              alt="ghav smiley"
              className="w-14 opacity-80"
            />
          </div>

          {/* RIGHT — SOCIAL LINKS */}
          <div className="flex gap-6 text-gray-600">
            <a
              href="https://www.instagram.com/giftofghav"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <Instagram size={18} />
              instagram
            </a>

            <a
              href="https://www.twitch.tv/giftofghav"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <Twitch size={18} />
              twitch
            </a>

            <a
              href="https://soundcloud.com/paulogav"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <Music size={18} />
              soundcloud
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}
