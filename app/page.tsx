"use client";

import { useState } from "react";

type ViewState = "normal" | "smell" | "touch" | "sound" | "warmth" | "header";

const headerContent = {
  title: "Christmas means different things to different people.",
  paragraphs: [
    "For some, it's a smell that brings back childhood memories.",
    "For others, it's the feeling of warmth, sound, or togetherness.",
    "This space has been designed to make Christmas accessible, inclusive, and emotional — a place where everyone can experience the spirit of the season in their own way.",
    "As you move through the zones, you'll explore Christmas through smell, touch, sound, and warmth, inspired by nostalgic memories that many of us hold close.",
  ],
};

const sectionData = {
  smell: {
    icon: "🌲",
    title: "Smell & Memory",
    tagline: "Christmas through scent",
    openingLine:
      "Smell is one of the strongest triggers of memory. This zone invites you to experience Christmas through familiar festive scents that many of us associate with warmth, home, and celebration.",
    audience: [
      "People with visual impairments",
      "People with heightened sensory memory",
      "Anyone who connects emotions with smell",
    ],
    items: [
      {
        name: "Cinnamon sticks & cloves",
        desc: "Traditionally associated with Christmas baking and warmth, these scents instantly bring back festive memories.",
      },
      {
        name: "Dried orange peels",
        desc: "A natural, nostalgic Christmas scent often used in old festive décor.",
      },
      {
        name: "Pine / Christmas tree fragrance",
        desc: "Reminiscent of real Christmas trees and winter holidays.",
      },
      {
        name: "Fabric sachets & open bowls",
        desc: "Allows visitors to smell without direct contact, keeping it accessible and comfortable.",
      },
    ],
    background:
      "linear-gradient(135deg, #722F37 0%, #8B3A44 50%, #5C252C 100%)",
    textColor: "#F5EBE0",
  },
  touch: {
    icon: "🧶",
    title: "Touch & Texture",
    tagline: "Christmas felt, not seen",
    openingLine:
      "Christmas isn't just seen — it's felt. This zone focuses on textures that bring comfort, warmth, and childhood memories to life.",
    audience: [
      "People with visual impairments",
      "Neurodiverse individuals",
      "People who experience comfort through tactile interaction",
    ],
    items: [
      {
        name: "Woollen scarves & knitted fabrics",
        desc: "Represent winter warmth, handmade love, and nostalgic clothing.",
      },
      {
        name: "Cotton 'snow' layers",
        desc: "Soft and playful, recalling snowy Christmas imagery.",
      },
      {
        name: "Bubble wrap beneath the snow",
        desc: "Adds a gentle, unexpected texture — playful and engaging to touch.",
      },
      {
        name: "Pinecones & wooden elements",
        desc: "Natural textures that ground the experience.",
      },
      {
        name: "Textured ornaments (felt, jute, wood)",
        desc: "Safe, inclusive décor that can be explored by touch.",
      },
    ],
    background:
      "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #8B6914 100%)",
    textColor: "#2C1810",
  },
  sound: {
    icon: "🔔",
    title: "Sound & Belonging",
    tagline: "Christmas comes alive through sound",
    openingLine:
      "For many, Christmas comes alive through sound — music, laughter, bells, and familiar festive rhythms.",
    audience: [
      "People with visual impairments",
      "People with speech or hearing differences",
      "Visitors who connect emotionally through sound",
    ],
    items: [
      {
        name: "Soft Christmas music or carols",
        desc: "Played at a gentle volume to avoid sensory overload.",
      },
      {
        name: "Jingle bells & chimes",
        desc: "Interactive elements that visitors can gently shake or touch.",
      },
      {
        name: "Ambient festive sounds",
        desc: "Bells, crackling warmth, or subtle holiday tones.",
      },
      {
        name: "Shared listening space",
        desc: "Encourages togetherness rather than performance.",
      },
    ],
    background:
      "linear-gradient(135deg, #4A5D4A 0%, #5E755E 50%, #3A4A3A 100%)",
    textColor: "#F5F0E6",
  },
  warmth: {
    icon: "❤️",
    title: "The Warmest Christmas",
    tagline: "It's about emotion",
    openingLine:
      "This zone brings everything together. It's not about decoration — it's about emotion.",
    audience: ["Everyone."],
    items: [
      {
        name: "Memory & affirmation board / Christmas tree",
        desc: "Visitors can write what makes Christmas special to them.",
      },
      {
        name: "Pre-written affirmations",
        desc: "Messages of warmth, kindness, and belonging.",
      },
      {
        name: "Shared memories & words",
        desc: "A reminder that Christmas is shaped by people, not perfection.",
      },
    ],
    background:
      "linear-gradient(135deg, #F5EBE0 0%, #EDE4D9 50%, #E0D6CB 100%)",
    textColor: "#3D2914",
  },
};

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>("normal");

  return (
    <main className="min-h-svh flex flex-col">
      {/* Header Quote - Clickable */}
      <header
        onClick={() => setCurrentView("header")}
        className="relative py-6 px-6 text-center border-b border-gold/20 overflow-hidden cursor-pointer hover:bg-white/5 transition-all duration-300"
      >
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
        <span className="font-body text-xs text-ivory/40 mt-2 block">
          tap to explore
        </span>
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

          {/* Section 1: Smell & Memory */}
          <section
            onClick={() => setCurrentView("smell")}
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
              <span className="text-xl md:text-2xl">🌲</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              Smell & Memory
            </h2>
            <p className="font-body text-xs md:text-sm opacity-80 mt-1 text-center">
              Christmas through scent
            </p>
          </section>

          {/* Section 2: Touch & Texture */}
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
              <span className="text-xl md:text-2xl">🧶</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              Touch & Texture
            </h2>
            <p className="font-body text-xs md:text-sm opacity-75 mt-1 text-center">
              Christmas felt, not seen
            </p>
          </section>

          {/* Section 3: Sound & Belonging */}
          <section
            onClick={() => setCurrentView("sound")}
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
              <span className="text-xl md:text-2xl">🔔</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              Sound & Belonging
            </h2>
            <p className="font-body text-xs md:text-sm opacity-80 mt-1 text-center">
              Christmas comes alive through sound
            </p>
          </section>

          {/* Section 4: The Warmest Christmas */}
          <section
            onClick={() => setCurrentView("warmth")}
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
              <span className="text-xl md:text-2xl">❤️</span>
            </div>
            <h2 className="font-display text-lg md:text-2xl font-semibold tracking-wide text-center">
              The Warmest Christmas
            </h2>
            <p className="font-body text-xs md:text-sm opacity-70 mt-1 text-center">
              It&apos;s about emotion
            </p>
          </section>
        </div>
      ) : currentView === "header" ? (
        /* ========== HEADER EXPANDED VIEW ========== */
        <div
          className="flex-1 relative flex flex-col items-center justify-center px-8 py-12 md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(180deg, #1A1412 0%, #2C1E1A 50%, #1A1412 100%)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setCurrentView("normal")}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Close and return to all sections"
          >
            <span className="text-xl md:text-2xl font-light text-ivory">✕</span>
          </button>

          {/* Decorative star */}
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-8"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
            }}
          >
            <span
              className="text-3xl md:text-4xl"
              style={{
                filter: "drop-shadow(0 0 10px rgba(212,175,55,0.5))",
              }}
            >
              ✦
            </span>
          </div>

          {/* Content */}
          <div className="max-w-xl text-center">
            {/* Title */}
            <h1
              className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-ivory mb-10 leading-relaxed"
              style={{
                textShadow: "0 0 30px rgba(212,175,55,0.3)",
              }}
            >
              {headerContent.title}
            </h1>

            {/* Paragraphs */}
            <div className="space-y-6">
              {headerContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-base md:text-lg text-ivory/75 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ========== SECTION EXPANDED VIEW ========== */
        <div
          className="flex-1 relative overflow-y-auto"
          style={{
            background: sectionData[currentView].background,
            color: sectionData[currentView].textColor,
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setCurrentView("normal")}
            className="fixed top-20 right-4 md:top-24 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Close and return to all sections"
          >
            <span className="text-xl md:text-2xl font-light">✕</span>
          </button>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-6 py-10 md:px-12 md:py-16 max-w-2xl mx-auto">
            {/* Icon */}
            <div
              className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-6"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <span className="text-4xl md:text-5xl">
                {sectionData[currentView].icon}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-2xl md:text-4xl font-semibold tracking-wide mb-4 text-center">
              {sectionData[currentView].title}
            </h1>

            {/* Opening Line */}
            <p className="font-display text-base md:text-lg italic opacity-90 mb-8 text-center leading-relaxed">
              {sectionData[currentView].openingLine}
            </p>

            {/* Divider */}
            <div
              className="w-16 h-px opacity-30 mb-8"
              style={{ background: "currentColor" }}
            />

            {/* Who this zone is for */}
            <div className="w-full mb-8">
              <h3 className="font-display text-sm md:text-base uppercase tracking-widest opacity-60 mb-4 text-center">
                Who this zone is for
              </h3>
              <ul className="space-y-2">
                {sectionData[currentView].audience.map((item, index) => (
                  <li
                    key={index}
                    className="font-body text-sm md:text-base opacity-80 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div
              className="w-16 h-px opacity-30 mb-8"
              style={{ background: "currentColor" }}
            />

            {/* Items you'll find here */}
            <div className="w-full">
              <h3 className="font-display text-sm md:text-base uppercase tracking-widest opacity-60 mb-6 text-center">
                What you&apos;ll find here
              </h3>
              <div className="space-y-6">
                {sectionData[currentView].items.map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-display text-base md:text-lg font-semibold mb-1">
                      {index + 1}. {item.name}
                    </h4>
                    <p className="font-body text-sm md:text-base opacity-75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
