let lastPlayed = 0;
let unlocked = false;
let soundEnabled = true;

/**
 * Enable/disable all site sounds
 */
export const setSoundEnabled = (enabled: boolean) => {
  soundEnabled = enabled;
};

export const getSoundEnabled = () => soundEnabled;

/**
 * Unlocks audio on first user gesture (required for some browsers)
 */
export const unlockAudio = () => {
  if (unlocked) return;
  const audio = new Audio();
  audio.play().catch(() => {});
  unlocked = true;
};

/**
 * Plays a sound and RETURNS the Audio element (so we can fade it, stop it, etc.)
 * @param src Path to audio file (relative to public/)
 * @param volume Volume 0.0 - 1.0
 */
export const playSound = (src: string, volume = 0.3): HTMLAudioElement | null => {
  if (!soundEnabled) return null;

  const now = Date.now();
  if (now - lastPlayed < 50) return null; // prevent rapid re-trigger spam
  lastPlayed = now;

  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch(() => {});
  return audio;
};

/**
 * Fade out an Audio element over `ms` milliseconds.
 */
export const fadeOutAudio = (audio: HTMLAudioElement, ms = 250) => {
  const startVol = audio.volume;
  const steps = 10;
  const stepMs = Math.max(10, Math.floor(ms / steps));
  let i = 0;

  const id = setInterval(() => {
    i++;
    const t = i / steps;
    audio.volume = Math.max(0, startVol * (1 - t));
    if (i >= steps) {
      clearInterval(id);
      audio.pause();
      audio.currentTime = 0;
    }
  }, stepMs);
};
