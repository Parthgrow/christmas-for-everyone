export default function Home() {
  return (
    <main className="min-h-svh flex flex-col">
      {/* Quadrant Grid - 2x2 on mobile, fills viewport */}
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

        {/* Section 1: Silent Night - Deaf Experience */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 text-ivory"
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

        {/* Section 2: Touch of Wonder - Blind Experience */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8"
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

        {/* Section 3: Unspoken Joy - Mute Experience */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8"
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

        {/* Section 4: Inner Light - Fourth Perspective */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8"
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

      {/* Footer Quote */}
      <footer className="py-4 px-6 text-center border-t border-gold/20">
        <p className="font-display text-sm md:text-lg italic text-ivory/70">
          &quot;Christmas isn&apos;t just seen — it&apos;s felt, touched,
          shared, and lived.&quot;
        </p>
      </footer>
    </main>
  );
}
