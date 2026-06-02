import { useState, useEffect, useRef } from "react";
import { DancingCharacter } from "./components/DancingCharacter";
import { CustomCursor } from "./components/CustomCursor";
import { Particles } from "./components/Particles";
import { Logo } from "./components/Logo";

const gameModes = [
  {
    name: "Coinpocalypse",
    description:
      "Every Hooligan begins with a set number of coins and drops them upon elimination. The player who gathers the most coins within the time limit wins.",
    video: "https://mph-assets.pages.dev/coinpocalypse.mp4",
    poster:
      "https://images.ctfassets.net/hr28nu4t543o/2d4ai6EITBpKyNyPxiNIrK/f33f9f42f3453c26f028a2802d083658/coinpocalypse.jpg",
    color: "#9CFF11",
    icon: "💰",
  },
  {
    name: "Hangout",
    description:
      "For the easy-going Hooligan, Hangout Mode offers a full open-world experience. Battle Zuckbots, perform kick flips, or watch the most epic Hooligan content.",
    video: "https://mph-assets.pages.dev/hangout.mp4",
    poster:
      "https://images.ctfassets.net/hr28nu4t543o/1vxiJbE8LNK1a7y4GEenjv/c61c1eb27deda83a56cdc79b51bbc873/hangout.jpg",
    color: "#00FFBB",
    icon: "🌆",
  },
  {
    name: "Anarchy",
    description:
      "Prepare for an all-out showdown. The Hooligan with the most eliminations wins. Restricted to a designated zone—those who leave face severe consequences.",
    video: "https://mph-assets.pages.dev/anarchy.mp4",
    poster:
      "https://images.ctfassets.net/hr28nu4t543o/7rKSKBGSfvmHdhdtqb5cnC/f09c090887a1f55e501a5b46bfa2ae9f/anarchy.jpg",
    color: "#D800FF",
    icon: "⚡",
  },
  {
    name: "Organized Anarchy",
    description:
      "Engage in a chaotic team deathmatch where rival hooligan crews clash for supremacy! Red vs Blue — teamwork, strategy, and pure mayhem are your keys to victory.",
    video: "https://mph-assets.pages.dev/organized-anarchy.mp4",
    poster:
      "https://images.ctfassets.net/hr28nu4t543o/6UsCxUITc23IeVqljz226D/89f5ad057c95d87907b06c2fe1c62648/organized-anarchy.jpg",
    color: "#FFA100",
    icon: "🔥",
  },
];

const factions = [
  {
    name: "Playboys",
    description:
      "A classy faction of Hooligan, the Playboys gravitate toward the more refined and polished. They enjoy their cigars and cocktail parties.",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/60rtwCOtCuhKsy75ifI0J9/d710cd36848541e6c6fed6035c1fc07d/image_16.png",
    color: "#D800FF",
  },
  {
    name: "Hare Raiser",
    description:
      "Forced to harvest Karrots for MetaZuckBot, this faction left with a vengeance. The Hare Raisers are one of the fiercest of the factions.",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/6e1bW9fIp7izfHDhem4TFQ/daa9162389dd2362d8a31f9d63eca9c1/image_20.png",
    color: "#00FFBB",
  },
  {
    name: "Bunners",
    description:
      "Upon escaping the clutches of MetaZuckBot, these hooligans chose a more relaxed approach to life. Their laid-back attitudes might get them into trouble.",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/5D1qrMnlQzO2AMZd1rlJ4L/cecd96413b7ac094e5cc24daefb1ce68/image_15.png",
    color: "#0084FF",
  },
  {
    name: "Cypher Buns",
    description:
      "A technically savvy group, the Cypherbuns are the result of MetaZuckBot's attempts to create cyborg drone bunnies. Their abilities to decode digital defenses are second to none.",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/4cRK69KBWbSVop3IGQFi8C/4e0204e6da219beb770dd671ee6d1ee5/image_19.png",
    color: "#E96500",
  },
  {
    name: "Rogue Jumpers",
    description:
      "A rough and tumble gang with an affinity for athletic competition. They love a good brawl and never miss an opportunity to place a bet.",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/2RSjr6UU4SLcaHR1ek3pNe/d5e36e75c5dd5a3f9ae3f6edab382959/image_17.png",
    color: "#FFA100",
  },
  {
    name: "Mutants",
    description:
      "Survivors of MetaZuckBot's worst testing, the Mutants remain a secretive faction bent on destruction. This gang is an unpredictable force.",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/4K6370ONr1CzojhNHHQuYN/15e59dc7ebac925833f61fc75c3a00db/image_14.png",
    color: "#5900C7",
  },
  {
    name: "Punk Bunnis",
    description:
      "Survivors of MetaZuckBot's music experimentation program. Anti-establishment to their core, this delinquent crowd is noisy and boisterous.",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/4yjko7UicsDSOcpbcNRaVT/3be1044afd2e1a8de2cba86b8603965b/image_18.png",
    color: "#9CFF11",
  },
];

const blogs = [
  {
    id: "ioO1hAy4oH8et1oIVLxae",
    title: "The Future of Web3 Gaming: What Trouble-Gan Reveals About What's Next",
    date: "November 24, 2024",
    color: "#9CFF11",
    image:
      "https://images.ctfassets.net/hr28nu4t543o/4c2H3RiIZWMW9iRoOhMRuw/79309c7995a3d8c37744939b7503859a/1815.png",
    description:
      "As gaming continues to evolve, Web3 technology is becoming an undeniable force, and Trouble-Gan stands at the forefront of this transformation.",
  },
];

const partners = [
  "Animoca Brands",
  "YGG",
  "Unreal Engine",
  "IVC",
  "Fenwick & West",
  "Breederdao",
  "Epic Games",
  "Delphi Digital",
  "Bitkraft",
  "Arca",
];

const features = [
  { label: "NEXT-LEVEL ANIMATION", color: "#9CFF11" },
  { label: "AI POWERED", color: "#00FFBB" },
  { label: "UNRIVALED GAMEPLAY", color: "#D800FF" },
  { label: "WEB3 GAMING", color: "#FFA100" },
  { label: "TRUE OWNERSHIP", color: "#0084FF" },
  { label: "PLAY & EARN", color: "#9CFF11" },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0014] text-white overflow-x-hidden selection:bg-[#9CFF11] selection:text-black noise-bg">
      <CustomCursor />
      <Particles count={12} />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#9CFF11]/10 rounded-full blur-[80px] animate-pulse"
          style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#D800FF]/10 rounded-full blur-[80px] animate-pulse"
          style={{ animationDelay: "1s", transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#00FFBB]/8 rounded-full blur-[80px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0014]/90 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <Logo size={42} className="group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight leading-none font-['Aurochs']">
                TROUBLE-GAN
              </span>
              <span className="text-[10px] text-white/40 tracking-widest leading-none mt-0.5">
                UNLEASH CHAOS
              </span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#game-modes" className="relative text-sm text-white/70 hover:text-[#9CFF11] transition-colors duration-300 group">
              Game Modes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9CFF11] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#factions" className="relative text-sm text-white/70 hover:text-[#9CFF11] transition-colors duration-300 group">
              Factions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9CFF11] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#news" className="relative text-sm text-white/70 hover:text-[#9CFF11] transition-colors duration-300 group">
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9CFF11] group-hover:w-full transition-all duration-300" />
            </a>
            <button className="magnetic-btn relative px-6 py-2.5 bg-[#9CFF11] text-black font-black text-sm rounded-full hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#9CFF11]/40 overflow-hidden group">
              <span className="relative z-10">PLAY NOW</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0014]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 space-y-4 animate-slide-up">
            <a href="#game-modes" onClick={() => setMobileMenuOpen(false)} className="block text-white/70 hover:text-[#9CFF11]">Game Modes</a>
            <a href="#factions" onClick={() => setMobileMenuOpen(false)} className="block text-white/70 hover:text-[#9CFF11]">Factions</a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)} className="block text-white/70 hover:text-[#9CFF11]">News</a>
            <button className="w-full px-6 py-2.5 bg-[#9CFF11] text-black font-bold text-sm rounded-full">
              PLAY NOW
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(156,255,17,1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,17,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${loaded ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9CFF11] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9CFF11]"></span>
              </span>
              <span className="text-xs text-white/60 tracking-wider">LIVE • WEB3 GAMING REVOLUTION</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] font-['Aurochs']">
              <span className="block text-white animate-reveal">TROUBLE</span>
              <span 
                className="block bg-gradient-to-r from-[#9CFF11] via-[#00FFBB] to-[#9CFF11] bg-clip-text text-transparent animate-gradient animate-flicker"
                style={{ animationDelay: "0.3s" }}
              >
                -GAN
              </span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-white/60 leading-relaxed animate-slide-up" style={{ animationDelay: "0.5s" }}>
              Experience the future of gaming with{" "}
              <span className="text-[#9CFF11] font-bold">next-level animation</span> and{" "}
              <span className="text-[#00FFBB] font-bold">AI</span>. Unleash chaos and join the rebellion in a revolutionary gaming adventure.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-slide-up" style={{ animationDelay: "0.7s" }}>
              <button className="magnetic-btn group relative px-8 py-4 bg-[#9CFF11] text-black font-black text-lg rounded-full hover:scale-110 transition-all duration-300 shadow-2xl shadow-[#9CFF11]/50 flex items-center gap-3 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  JOIN THE REBELLION
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="magnetic-btn px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                WATCH TRAILER
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 animate-slide-up" style={{ animationDelay: "0.9s" }}>
              {[
                { num: "100K+", label: "PLAYERS" },
                { num: "7", label: "FACTIONS" },
                { num: "4", label: "GAME MODES" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-3xl font-black bg-gradient-to-r from-[#9CFF11] to-[#00FFBB] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.num}
                  </div>
                  <div className="text-xs text-white/40 tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dancing Character */}
          <div className={`relative flex items-center justify-center ${loaded ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Orbiting elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[400px] h-[400px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-orbit text-4xl">💰</div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-orbit-slow text-3xl" style={{ animationDelay: "3s" }}>⚡</div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-orbit-reverse text-3xl" style={{ animationDelay: "6s" }}>🔥</div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-orbit text-2xl" style={{ animationDelay: "9s" }}>💎</div>
                </div>
              </div>

              {/* Glow ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-[#9CFF11] via-[#00FFBB] to-[#D800FF] opacity-20 blur-3xl animate-pulse" />
              </div>

              {/* Character */}
              <div className="relative z-10">
                <DancingCharacter size={350} />
              </div>

              {/* Floating Tags */}
              <div className="absolute -top-4 -right-4 px-3 py-1 bg-[#9CFF11] text-black text-xs font-bold rounded-full animate-float shadow-lg shadow-[#9CFF11]/50">
                +100 KARROTS
              </div>
              <div className="absolute top-1/3 -left-8 px-3 py-1 bg-[#D800FF] text-white text-xs font-bold rounded-full animate-float-reverse shadow-lg shadow-[#D800FF]/50" style={{ animationDelay: "1s" }}>
                LVL UP!
              </div>
              <div className="absolute bottom-1/4 -right-8 px-3 py-1 bg-[#FFA100] text-black text-xs font-bold rounded-full animate-float shadow-lg shadow-[#FFA100]/50" style={{ animationDelay: "2s" }}>
                NEW ITEM
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/30 tracking-widest">SCROLL</span>
            <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Marquee */}
      <section className="relative py-6 border-y border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="flex">
          <div className="animate-marquee flex gap-8 px-8 shrink-0 items-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-4">
                    <span 
                      className="text-base md:text-lg font-black tracking-widest font-['Aurochs'] whitespace-nowrap"
                      style={{ color: f.color }}
                    >
                      {f.label}
                    </span>
                    <span className="text-white/30 text-xl">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section id="game-modes" className="py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9CFF11]/5 rounded-full blur-[80px]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9CFF11]/10 border border-[#9CFF11]/20 mb-6">
              <span className="text-xs text-[#9CFF11] tracking-widest font-bold">04 MODES</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight font-['Aurochs'] mb-6">
              GAME <span className="bg-gradient-to-r from-[#9CFF11] to-[#00FFBB] bg-clip-text text-transparent">MODES</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              From chaotic battles to free-roaming adventures — choose your style of mayhem.
            </p>
          </div>

          <div className="space-y-12">
            {gameModes.map((mode, index) => (
              <GameModeCard key={mode.name} mode={mode} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Factions Section */}
      <section id="factions" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#D800FF]/10 rounded-full blur-[70px] animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#00FFBB]/10 rounded-full blur-[70px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D800FF]/10 border border-[#D800FF]/20 mb-6">
              <span className="text-xs text-[#D800FF] tracking-widest font-bold">07 FACTIONS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight font-['Aurochs'] mb-6">
              CHOOSE YOUR <span className="bg-gradient-to-r from-[#D800FF] to-[#FFA100] bg-clip-text text-transparent">FACTION</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Seven distinct factions, each with unique abilities and rivalries. Who will you fight for?
            </p>
          </div>

          <FactionsGrid factions={factions} />
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight font-['Aurochs']">
                LATEST <span className="bg-gradient-to-r from-[#00FFBB] to-[#0084FF] bg-clip-text text-transparent">NEWS</span>
              </h2>
              <p className="mt-4 text-lg text-white/60">Stay updated with the latest from the rebellion.</p>
            </div>
            <button className="text-[#00FFBB] font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 group">
              VIEW ALL ARTICLES
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-500 hover-lift"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 text-xs font-bold rounded-full border text-black font-['Aurochs'] backdrop-blur-sm"
                      style={{ backgroundColor: blog.color, borderColor: blog.color }}
                    >
                      BLOG
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <time className="block text-sm text-white/40 mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00FFBB]" />
                    {blog.date}
                  </time>
                  <h3 className="text-xl font-black font-['Aurochs'] tracking-tight mb-3 group-hover:text-[#00FFBB] transition-colors duration-300 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {blog.description}
                  </p>
                  <button className="text-sm font-bold text-white/80 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
                    READ MORE
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: `inset 0 0 40px ${blog.color}20` }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 border-y border-white/10 bg-black/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight font-['Aurochs'] text-center text-white/40">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
        </div>
        
        <div className="flex">
          <div className="animate-marquee-slow flex gap-16 items-center px-8 shrink-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="text-2xl md:text-3xl font-black tracking-widest font-['Aurochs'] opacity-40 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hover:scale-110 hover:text-[#9CFF11]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {partners[i % partners.length]}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9CFF11]/10 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D800FF]/10 rounded-full blur-[70px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-xs text-white/60 tracking-widest">JOIN 100,000+ PLAYERS</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tight font-['Aurochs'] mb-8 leading-[0.9]">
            READY TO <br />
            <span className="bg-gradient-to-r from-[#9CFF11] via-[#00FFBB] to-[#D800FF] bg-clip-text text-transparent animate-gradient">
              UNLEASH
            </span>
            <br />
            THE CHAOS?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join thousands of Hooligans already dominating the streets. The rebellion starts now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="magnetic-btn group relative px-12 py-5 bg-[#9CFF11] text-black font-black text-xl rounded-full hover:scale-110 transition-all duration-300 shadow-2xl shadow-[#9CFF11]/50 flex items-center gap-3 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                START PLAYING
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-12 py-5 border border-white/20 text-white font-bold text-xl rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              JOIN DISCORD
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Logo size={36} />
              <div className="flex flex-col">
                <span className="text-sm font-black font-['Aurochs']">
                  TROUBLE-GAN
                </span>
                <span className="text-[10px] text-white/40 tracking-widest">UNLEASH CHAOS</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-white/40 hover:text-[#9CFF11] transition-colors">Privacy</a>
              <a href="#" className="text-sm text-white/40 hover:text-[#9CFF11] transition-colors">Terms</a>
              <a href="#" className="text-sm text-white/40 hover:text-[#9CFF11] transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <SocialIcon path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              <SocialIcon path="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152..." />
              <SocialIcon path="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136..." />
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/30">
              © 2024 Trouble-Gan. All rights reserved. Built with chaos and passion.
            </p>
            <p className="text-xs text-white/20 mt-4">
              Developed By Kulwanth Kotagiri
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GameModeCard({ mode, index }: { mode: any; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-opacity-50 transition-all duration-500 hover:bg-white/[0.04] overflow-hidden ${
        index % 2 === 1 ? "lg:grid-flow-dense" : ""
      }`}
      style={{
        borderColor: tilt.x !== 0 ? `${mode.color}80` : undefined,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${mode.color}, transparent 70%)` }}
      />

      {/* Icon floating in background */}
      <div 
        className="absolute text-9xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ 
          top: "20%", 
          right: index % 2 === 0 ? "5%" : "auto",
          left: index % 2 === 1 ? "5%" : "auto",
        }}
      >
        {mode.icon}
      </div>

      <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
          <img
            src={mode.poster}
            alt={mode.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center group/play">
            <div 
              className="h-20 w-20 rounded-full flex items-center justify-center group-hover/play:scale-125 transition-all duration-300 shadow-2xl backdrop-blur-sm border-2"
              style={{ 
                backgroundColor: `${mode.color}40`,
                borderColor: mode.color,
                boxShadow: `0 0 40px ${mode.color}80`,
              }}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>

          {/* Mode badge */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span 
              className="px-3 py-1 text-xs font-bold rounded-full border text-black font-['Aurochs'] backdrop-blur-sm"
              style={{ backgroundColor: mode.color, borderColor: mode.color }}
            >
              GAME MODE {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-3xl">{mode.icon}</span>
          </div>

          {/* Scanline */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      <div className={`relative space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="text-5xl">{mode.icon}</span>
          <h3 
            className="text-4xl md:text-6xl font-black font-['Aurochs'] tracking-tight glitch-text"
            data-text={mode.name.toUpperCase()}
            style={{ color: mode.color }}
          >
            {mode.name.toUpperCase()}
          </h3>
        </div>
        <p className="text-lg text-white/70 leading-relaxed">
          {mode.description}
        </p>
        <button 
          className="group/btn inline-flex items-center gap-2 text-sm font-bold tracking-widest hover:gap-4 transition-all duration-300"
          style={{ color: mode.color }}
        >
          <span className="relative">
            LEARN MORE
            <span 
              className="absolute -bottom-1 left-0 w-full h-px origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"
              style={{ backgroundColor: mode.color }}
            />
          </span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function FactionsGrid({ factions }: { factions: any[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {factions.map((faction, index) => (
        <FactionCard key={faction.name} faction={faction} index={index} />
      ))}
    </div>
  );
}

function FactionCard({ faction, index }: { faction: any; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHover(false);
      }}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hover ? 1.05 : 1})`,
        transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95 z-10" />
      
      <img
        src={faction.image}
        alt={faction.name}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
      />

      <div className="relative z-20 h-full flex flex-col justify-end p-5">
        <div 
          className="w-3 h-3 rounded-full mb-3 shadow-lg animate-pulse"
          style={{ 
            backgroundColor: faction.color, 
            boxShadow: `0 0 20px ${faction.color}` 
          }}
        />
        
        <h3 
          className="text-2xl font-black font-['Aurochs'] tracking-tight mb-2"
          style={{ color: faction.color, textShadow: `0 0 20px ${faction.color}80` }}
        >
          {faction.name.toUpperCase()}
        </h3>
        
        <p className="text-xs text-white/60 leading-relaxed max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {faction.description}
        </p>
      </div>

      {/* Color overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none mix-blend-overlay z-10"
        style={{ backgroundColor: faction.color }}
      />
      
      {/* Border glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
        style={{ boxShadow: `inset 0 0 30px ${faction.color}60, 0 0 30px ${faction.color}40` }}
      />
    </div>
  );
}

function SocialIcon({ path }: { path: string }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#9CFF11] hover:scale-110 transition-all duration-300 group"
    >
      <svg className="w-4 h-4 group-hover:text-[#9CFF11] transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
}

export default App;
