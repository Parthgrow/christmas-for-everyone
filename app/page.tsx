"use client";

import { useState } from "react";

type ViewState = "normal" | "silent" | "touch" | "joy" | "inner";

const sectionData = {
  silent: {
    icon: "🔔",
    title: "Silent Night",
    tagline: "Christmas felt, not heard",
    description:
      "For those who experience Christmas without sound, the holiday comes alive through twinkling lights dancing in windows, warm embraces that speak louder than carols, the feel of velvet ribbons and crisp wrapping paper, and the pure joy reflected in the faces of loved ones gathered near.",
    background:
      "linear-gradient(135deg, #722F37 0%, #8B3A44 50%, #5C252C 100%)",
    textColor: "#F5EBE0",
  },
  touch: {
    icon: "✨",
    title: "Touch of Wonder",
    tagline: "Christmas through texture",
    description:
      "When sight gives way to touch, Christmas becomes a symphony of sensations — the prickle of pine needles, the smooth coolness of ornaments, the warmth of a mug cradled in hands, the soft brush of snowflakes on cheeks, and the gentle pressure of a loved one's hand guiding you to the tree.",
    background:
      "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #8B6914 100%)",
    textColor: "#2C1810",
  },
  joy: {
    icon: "🤲",
    title: "Unspoken Joy",
    tagline: "Christmas in gesture",
    description:
      "Words aren't the only way to share Christmas spirit. Through expressive hands, warm smiles, and meaningful glances, the deepest holiday wishes flow freely. A signed 'I love you,' a heartfelt hug, a knowing nod across the room — these silent exchanges carry the full weight of the season's magic.",
    background:
      "linear-gradient(135deg, #4A5D4A 0%, #5E755E 50%, #3A4A3A 100%)",
    textColor: "#F5F0E6",
  },
  inner: {
    icon: "🕯️",
    title: "Inner Light",
    tagline: "Christmas within",
    description:
      "Sometimes the most profound Christmas experience happens in stillness and solitude. The quiet contemplation by candlelight, the peace that settles in the heart, the gratitude that wells up unbidden — this inner celebration reminds us that Christmas, at its core, is a light we carry within.",
    background:
      "linear-gradient(135deg, #F5EBE0 0%, #EDE4D9 50%, #E0D6CB 100%)",
    textColor: "#3D2914",
  },
};

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>("normal");

  return (
    <main className="min-h-svh flex flex-col">
      {/* Header Quote */}
      <header className="relative py-6 px-6 text-center border-b border-gold/20 overflow-hidden">
        <span className="absolute top-2 left-4 text-ivory/20 text-xs md:text-sm">
          ❄
        </span>
        <span className="absolute top-4 left-12 text-ivory/15 text-[10px] md:text-xs">
          ✻
        </span>
        <span className="absolute bottom-3 left-8 text-ivory/10 text-xs">
          ❅
        </span>
        <span className="absolute top-2 right-4 text-ivory/20 text-xs md:text-sm">
          ❄
        </span>
        <span className="absolute top-5 right-14 text-ivory/15 text-[10px] md:text-xs">
          ✻
        </span>
        <span className="absolute bottom-2 right-6 text-ivory/10 text-xs">
          ❅
        </span>

        <p
          className="font-display text-base md:text-xl lg:text-2xl italic text-ivory/90 relative z-10"
          style={{
            textShadow:
              "0 0 20px rgba(212,175,55,0.4), 0 0 40px rgba(212,175,55,0.2)",
          }}
        >
          &quot;Christmas isn&apos;t just seen — it&apos;s felt, touched,
          shared, and lived.&quot;
        </p>
      </header>

      {currentView === "normal" ? (
        /* ========== NORMAL VIEW: 4-Quadrant Grid ========== */
        <div className="grid grid-cols-2 grid-rows-2 flex-1 relative">
          {/* Central glowing element */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.95) 0%, rgba(212,175,55,0.4) 40%, transparent 70%)",
              boxShadow: "0 0 40px rgba(212,175,55,0.5)",
            }}
          >
            <span className="text-2xl md:text-3xl drop-shadow-md">✦</span>
          </div>

          {/* Section 1: Silent Night */}
          <section
            onClick={() => setCurrentView("silent")}
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 text-ivory cursor-pointer hover:brightness-110 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #722F37 0%, #8B3A44 50%, #5C252C 100%)",
            }}
          >
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-80"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-3">
              <span className="text-xl md:text-2xl">🔔</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              Silent Night
            </h2>
            <p className="font-body text-xs md:text-sm opacity-80 mt-1 text-center">
              Christmas felt, not heard
            </p>
          </section>

          {/* Section 2: Touch of Wonder */}
          <section
            onClick={() => setCurrentView("touch")}
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 cursor-pointer hover:brightness-110 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #8B6914 100%)",
              color: "#2C1810",
            }}
          >
            <div
              className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
              }}
            />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/25 flex items-center justify-center mb-3">
              <span className="text-xl md:text-2xl">✨</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              Touch of Wonder
            </h2>
            <p className="font-body text-xs md:text-sm opacity-75 mt-1 text-center">
              Christmas through texture
            </p>
          </section>

          {/* Section 3: Unspoken Joy */}
          <section
            onClick={() => setCurrentView("joy")}
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 cursor-pointer hover:brightness-110 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #4A5D4A 0%, #5E755E 50%, #3A4A3A 100%)",
              color: "#F5F0E6",
            }}
          >
            <div
              className="absolute -top-5 -left-5 w-28 h-28 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/12 flex items-center justify-center mb-3">
              <span className="text-xl md:text-2xl">🤲</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              Unspoken Joy
            </h2>
            <p className="font-body text-xs md:text-sm opacity-80 mt-1 text-center">
              Christmas in gesture
            </p>
          </section>

          {/* Section 4: Inner Light */}
          <section
            onClick={() => setCurrentView("inner")}
            className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 cursor-pointer hover:brightness-110 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #F5EBE0 0%, #EDE4D9 50%, #E0D6CB 100%)",
              color: "#3D2914",
            }}
          >
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%)",
              }}
            />
            <div
              className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3"
              style={{ background: "rgba(114,47,55,0.12)" }}
            >
              <span className="text-xl md:text-2xl">🕯️</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              Inner Light
            </h2>
            <p className="font-body text-xs md:text-sm opacity-70 mt-1 text-center">
              Christmas within
            </p>
          </section>
        </div>
      ) : (
        /* ========== EXPANDED VIEW: Full Screen Section ========== */
        <div
          className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12"
          style={{
            background: sectionData[currentView].background,
            color: sectionData[currentView].textColor,
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setCurrentView("normal")}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Close and return to all sections"
          >
            <span className="text-xl md:text-2xl font-light">✕</span>
          </button>

          {/* Decorative glow */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
            {/* Icon */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <span className="text-5xl md:text-6xl">
                {sectionData[currentView].icon}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-wide mb-3">
              {sectionData[currentView].title}
            </h1>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl opacity-85 mb-8">
              {sectionData[currentView].tagline}
            </p>

            {/* Description */}
            <p className="font-body text-base md:text-lg leading-relaxed opacity-80">
              {sectionData[currentView].description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
