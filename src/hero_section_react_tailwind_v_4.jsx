import React, { useEffect, useRef, useState } from "react";
import {
  Play,
  ArrowRight,
  Sparkles,
  Clapperboard,
  Wand2,
  Check,
  Plus,
  Minus,
  Aperture,
  PanelsTopLeft,
  Send,
  Mail,
  Volume2,
} from "lucide-react";

const navItems = ["Services", "Gallery", "Benefits", "About", "FAQ"];

const services = [
  {
    title: "AI Cinematic Ads",
    description:
      "High-conversion commercial films generated with cinematic direction, visual consistency, and fast iteration cycles.",
  },
  {
    title: "Product Story Videos",
    description:
      "Launch visuals for brands that need premium product storytelling without the time and cost of traditional production.",
  },
  {
    title: "Concept Trailers",
    description:
      "Atmospheric teaser pieces for startups, entertainment projects, and campaigns that need immediate visual impact.",
  },
  {
    title: "Visual Worldbuilding",
    description:
      "Art direction systems, frame language, and scene generation designed to keep every asset feeling part of one universe.",
  },
];

const benefits = [
  "Cinematic quality without full production crews",
  "Rapid creative iteration for campaigns and pitches",
  "Consistent visual language across every scene",
  "Built for brands, founders, studios, and launches",
];

const processSteps = [
  {
    title: "Creative Direction",
    description:
      "We define mood, reference language, narrative intention, and cinematic texture before production begins.",
    icon: Aperture,
  },
  {
    title: "AI Visual Production",
    description:
      "We generate scenes, sequences, and visual routes with strong consistency, tone, and atmosphere.",
    icon: Sparkles,
  },
  {
    title: "Editing & Delivery",
    description:
      "We shape the final piece into launch-ready assets for ads, social campaigns, trailers, or brand storytelling.",
    icon: PanelsTopLeft,
  },
];

const proofItems = [
  "Built for launch campaigns and premium product storytelling",
  "Flexible for speculative visuals, concept trailers, and founder narratives",
  "Designed to compress production time while preserving cinematic intent",
];

const galleryItems = [
  { 
    title: "Launch Film", 
    category: "Brand Narrative",
    videoSrc: "https://pikaso.cdnpk.net/private/production/3759109427/72ec2e3b-b295-4c48-875d-bfd6c192d433-0.mp4?token=exp=1775001600~hmac=b6437014570fa314053fadfd30e868a78ca044f9132202de5bfa4b13ff3e2bf3"
  },
  { 
    title: "Atmosphere Trailer", 
    category: "Concept Worldbuilding",
    videoSrc: "https://pikaso.cdnpk.net/private/production/3759074784/f550961f-a374-4838-86ff-28692251d59f-0.mp4?token=exp=1775001600~hmac=f711656f4d967e53d080651a022dff0007fbec1be852d5cf260ce702d8346ab7"
  },
  { 
    title: "Product Sequence", 
    category: "Commercial Visuals",
    videoSrc: "https://pikaso.cdnpk.net/private/production/3759153348/fa56fcdd-968f-4c0a-8d35-6232452c16c0-0.mp4?token=exp=1775001600~hmac=fcd1ae5b440bd8faa3b9e0e8790e46f4696243c45044133179d7f32ef7bd7585"
  },
];

const faqs = [
  {
    question: "What does an AI cinematic studio actually deliver?",
    answer:
      "We create end-to-end video assets: concept direction, visual development, shot systems, cinematic sequences, trailers, ads, and social edits designed to feel premium and story-led.",
  },
  {
    question: "Is this useful for brands or only for entertainment?",
    answer:
      "Both. Our system works for product launches, brand campaigns, founder stories, speculative trailers, pitch decks, and high-impact social content.",
  },
  {
    question: "How fast can a project move?",
    answer:
      "Much faster than traditional production. Once direction is approved, we can develop visual routes, iterate scenes, and shape deliverables in a compressed timeline.",
  },
  {
    question: "Do you also help with strategy and scripting?",
    answer:
      "Yes. We can support positioning, narrative framing, creative scripting, reference building, and content structure before production starts.",
  },
];

const barlow = { fontFamily: 'Barlow, ui-sans-serif, system-ui, sans-serif' };
const serifItalic = { fontFamily: 'Georgia, Times New Roman, serif', fontStyle: "italic" };

function CornerSquare({ className = "" }) {
  return <span className={`absolute h-[7px] w-[7px] bg-white ${className}`} />;
}

function SectionFrame({ children, className = "" }) {
  return (
    <div className={`relative w-full max-w-[1080px] px-4 py-10 sm:px-8 md:px-12 lg:px-16 ${className}`}>
      <CornerSquare className="left-0 top-0" />
      <CornerSquare className="right-0 top-0" />
      <CornerSquare className="bottom-0 left-0" />
      <CornerSquare className="bottom-0 right-0" />
      {children}
    </div>
  );
}

function CinematicBackground({ className = "" }) {
  return (
    <div
      className={className}
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(248,248,248,0.12), transparent 22%), radial-gradient(circle at 80% 30%, rgba(248,248,248,0.08), transparent 24%), linear-gradient(135deg, #111111 0%, #1b1b1b 30%, #2b2b2b 55%, #171717 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/10 via-transparent to-[#171717]/50" />
    </div>
  );
}

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.volume = 0.18;
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 w-[min(360px,calc(100vw-32px))] rounded-[2px] bg-white/[0.06] p-[1px] backdrop-blur-sm">
      <div className="rounded-[2px] bg-[#171717]/80 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[2px] bg-white/90 text-[#171717]">
              <Volume2 className="h-4 w-4" />
            </div>
            <div>
              <p style={barlow} className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                Ambient score
              </p>
              <p style={barlow} className="text-[14px] font-medium text-white">
                The Room Beneath the Skin
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleAudio}
            style={barlow}
            className="group relative overflow-hidden rounded-[2px] bg-[#f8f8f8] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#171717] transition-all duration-300 hover:bg-white"
          >
            <span className="relative z-10">{isPlaying ? "Sound On" : "Activate"}</span>
            <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)]" />
          </button>
        </div>

        <audio
          ref={audioRef}
          loop
          preload="metadata"
          src="/The_Room_Beneath_the_Skin.mp3"
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
      </div>
    </div>
  );
}

function FeaturedBadge() {
  return (
    <div
      className="mb-8 flex justify-center"
    >
      <div className="rounded-full bg-white/[0.06] p-[3px] backdrop-blur-sm transition-colors duration-300 hover:bg-white/15">
        <div className="rounded-full bg-white/90 px-4 py-2 backdrop-blur-md">
          <p style={barlow} className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#171717]">
            Featured in Fortune
          </p>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 md:px-10 lg:px-14 lg:py-8">
        <a href="#home" style={barlow} className="rounded-[2px] px-3 py-2 text-[15px] font-medium uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-white/5">
          AI CINEMA STUDIO
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={barlow}
              className="group relative px-3 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-white/85 transition-all duration-300"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-x-1 bottom-1 h-px bg-white/0 transition-all duration-300 group-hover:bg-white/40" />
            </a>
          ))}
        </div>

        <a href="#contact" style={barlow} className="group relative overflow-hidden rounded-[2px] bg-[#f8f8f8] px-5 py-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#171717] transition-all duration-300 hover:bg-white">
          <span className="relative z-10">Book a call</span>
          <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)]" />
        </a>
      </nav>
    </header>
  );
}

function CTAButton({ children, icon: Icon, soft = false }) {
  return (
    <a
      href="#contact"
      style={barlow}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-[2px] px-5 py-3 text-[15px] font-medium transition-all duration-500 ${
        soft
          ? "bg-white/[0.06] text-white hover:bg-white/15 [animation:buttonSoftBreath_5.8s_ease-in-out_infinite]"
          : "bg-[#f8f8f8] text-[#171717] hover:bg-white [animation:buttonPulseShadow_4.8s_ease-in-out_infinite]"
      }`}
    >
      <span
        className={`pointer-events-none absolute inset-y-0 left-0 w-[42%] ${
          soft
            ? "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
            : "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.58),transparent)]"
        } [animation:buttonGlowSweep_5.6s_ease-in-out_infinite]`}
      />
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-[1px]">
        <span>{children}</span>
        {Icon ? (
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[2px]" strokeWidth={2} />
        ) : null}
      </span>
    </a>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p style={barlow} className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-white/75">
      {children}
    </p>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="group h-full rounded-[2px] border border-white/10 bg-white/[0.03] p-[1px] backdrop-blur-sm">
      <div className="flex h-full min-h-[280px] flex-col rounded-[2px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-5 py-5 transition-colors duration-300 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] sm:px-6 sm:py-6">
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#f8f8f8] text-[#171717]">
          <Clapperboard className="h-4 w-4" />
        </div>
        <h3 style={barlow} className="max-w-[220px] text-[20px] font-light leading-[1.15] tracking-[-0.025em] text-white sm:text-[22px]">
          {title}
        </h3>
        <p style={barlow} className="mt-5 max-w-[240px] text-[15px] leading-[1.8] text-white/68">
          {description}
        </p>
        <div className="mt-auto pt-8">
          <div className="h-px w-full bg-white/6 transition-colors duration-300 group-hover:bg-white/16" />
        </div>
      </div>
    </div>
  );
}

function VideoDepthCard({ title, category, videoSrc, className = "", rotation = "", translate = "" }) {
  return (
    <div className={`group relative ${className}`}>
      <div className={`relative rounded-[2px] bg-white/[0.06] p-[1px] backdrop-blur-sm transition-transform duration-500 ${rotation} ${translate} md:group-hover:-translate-y-1`}>
        <div className="relative overflow-hidden rounded-[2px] bg-white/5">
          {videoSrc ? (
            <video
              className="aspect-[4/5] w-full object-cover md:aspect-[3/4]"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div
              className="aspect-[4/5] w-full md:aspect-[3/4]"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 18%), linear-gradient(160deg, #2a2a2a 0%, #1c1c1c 35%, #0f0f0f 100%)",
              }}
            />
          )}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#171717]/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-20 p-5">
            <p style={barlow} className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/75">
              {category}
            </p>
            <h3 style={barlow} className="mt-2 text-[22px] font-light tracking-[-0.02em] text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ title, description, icon: Icon, index = 0 }) {
  return (
    <div className="group relative flex h-full flex-col justify-between border-l border-white/10 pl-6">
      <div className="mb-6 flex items-center justify-between">
        <span style={barlow} className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
          0{index + 1}
        </span>
        <div className="ml-4 h-px flex-1 bg-white/10" />
      </div>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-white/90 text-[#171717]">
          <Icon className="h-4 w-4" />
        </div>
        <h3 style={barlow} className="text-[22px] font-light tracking-[-0.02em] text-white">
          {title}
        </h3>
      </div>
      <p style={barlow} className="max-w-[260px] text-[15px] leading-[1.8] text-white/60">
        {description}
      </p>
      <div className="mt-8 h-px w-full bg-white/5 transition-all duration-500 group-hover:bg-white/20" />
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a href={href} style={barlow} className="rounded-[2px] px-2 py-1 text-[14px] text-white/75 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white">
      {children}
    </a>
  );
}

function FAQItem({ question, answer, open, onClick }) {
  return (
    <div className="border-t border-white/15 py-5">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 rounded-[2px] px-1 py-1 text-left transition-colors duration-300 hover:bg-white/5">
        <span style={barlow} className="text-[18px] font-light text-white sm:text-[20px]">{question}</span>
        {open ? <Minus className="h-5 w-5 shrink-0 text-white" /> : <Plus className="h-5 w-5 shrink-0 text-white" />}
      </button>
      {open ? <p style={barlow} className="mt-3 max-w-[820px] text-[15px] leading-[1.7] text-white/75">{answer}</p> : null}
    </div>
  );
}

export default function HeroSection() {
  const unicornRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  const [aboutScrollFx, setAboutScrollFx] = useState({ blur: 0, opacity: 0.9, scale: 1.04 });
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const updateAboutFx = () => {
      const element = aboutRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progressRaw = 1 - rect.top / viewportHeight;
      const progress = Math.max(0, Math.min(1, progressRaw));

      setAboutScrollFx({
        blur: progress * 10,
        opacity: 0.9 + progress * 0.08,
        scale: 1.04 + progress * 0.06,
      });
    };

    updateAboutFx();
    window.addEventListener("scroll", updateAboutFx, { passive: true });
    window.addEventListener("resize", updateAboutFx);

    return () => {
      window.removeEventListener("scroll", updateAboutFx);
      window.removeEventListener("resize", updateAboutFx);
    };
  }, []);

  useEffect(() => {
    // Inject Unicorn Studio background safely (no inline script tags)
    if (typeof window === "undefined") return;
    const load = () => {
      if (!window.UnicornStudio) {
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
        s.onload = () => {
          try {
            if (!window.UnicornStudio?.isInitialized) {
              window.UnicornStudio?.init();
              window.UnicornStudio.isInitialized = true;
            }
          } catch (e) {}
        };
        document.body.appendChild(s);
      } else {
        try {
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        } catch (e) {}
      }
    };
    load();

    const element = footerRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setFooterVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <main id="home" className="relative bg-[#171717] pb-28 text-white">
      {/* subtle grain texture */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.06]" style={{backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=')",backgroundRepeat:'repeat'}} />
      {/* Unicorn Studio global background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div ref={unicornRef} data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{ width: '100%', height: '100%' }} />
      </div>
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }

        @keyframes subtleDrift {
          0% { transform: scale(1.02) translateY(0px); }
          100% { transform: scale(1.08) translateY(-12px); }
        }

        @keyframes buttonGlowSweep {
          0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          18% { opacity: 0.28; }
          50% { transform: translateX(140%) skewX(-18deg); opacity: 0.08; }
          100% { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }

        @keyframes buttonPulseShadow {
          0%, 100% { box-shadow: 0 0 0 rgba(248,248,248,0); }
          50% { box-shadow: 0 0 34px rgba(248,248,248,0.08); }
        }

        @keyframes buttonSoftBreath {
          0%, 100% { background-color: rgba(255,255,255,0.10); }
          50% { background-color: rgba(255,255,255,0.14); }
        }

        @keyframes heroFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroLineReveal {
          0% { opacity: 0; transform: translateY(24px); letter-spacing: -0.06em; }
          100% { opacity: 1; transform: translateY(0); letter-spacing: inherit; }
        }
      `}</style>
      <div className="relative z-10">
      <AudioPlayer />
      <section className="relative min-h-screen overflow-hidden">
        <CinematicBackground className="absolute inset-0 h-full w-full" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://content.pancake.vn/web-media/a1/f5/c8/ac/f495910f879bfa0c504dd90762e4ca6bd27438047cb0fe6a32ca62ce-w:0-h:0-l:3728766-t:video/mp4.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/30 via-transparent to-[#171717]/40" />
        <Navbar />

        <div className="relative z-20 flex min-h-screen items-end justify-center px-4 pb-[250px] sm:px-6 lg:px-8">
          <SectionFrame className="py-8">
            <div className="opacity-0 [animation:heroFadeUp_0.9s_ease-out_0.15s_forwards]">
            <FeaturedBadge />
            </div>

            <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
              <h1 style={barlow} className="opacity-0 [animation:heroLineReveal_1.05s_cubic-bezier(0.16,1,0.3,1)_0.45s_forwards] text-[40px] font-light leading-[0.98] tracking-[-0.03em] text-white sm:text-[48px] md:text-[56px] lg:text-[64px]">
                Studio that crafts your
              </h1>
              <h2 style={serifItalic} className="opacity-0 [animation:heroLineReveal_1.05s_cubic-bezier(0.16,1,0.3,1)_0.72s_forwards] text-[40px] leading-[0.98] tracking-[-0.03em] text-white sm:text-[48px] md:text-[56px] lg:text-[64px]">
                cinematic AI videos
              </h2>

              <p style={barlow} className="mt-6 max-w-[720px] opacity-0 [animation:heroFadeUp_0.95s_ease-out_1.02s_forwards] text-[16px] leading-[1.75] text-white/70 sm:text-[18px]">
                We create cinematic video systems for brands, launches, trailers, and storytelling campaigns using AI-native production built for speed, mood, and visual impact.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 opacity-0 [animation:heroFadeUp_0.95s_ease-out_1.28s_forwards] sm:flex-row">
                <CTAButton icon={ArrowRight}>Start a project</CTAButton>
                <CTAButton icon={Play} soft>
                  View our process
                </CTAButton>
              </div>
            </div>
          </SectionFrame>
        </div>
      </section>

      <section id="services" className="relative flex justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionFrame>
          <SectionEyebrow>Services</SectionEyebrow>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                Cinematic production built for an <span style={serifItalic}>AI-native era</span>
              </h2>
              <p style={barlow} className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-white/75">
                From product films to worldbuilding trailers, we help companies and creators generate premium visual narratives with a faster and more flexible pipeline.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </SectionFrame>
      </section>

      <section id="gallery" className="relative flex justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionFrame>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <SectionEyebrow>Gallery</SectionEyebrow>
              <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                A depth-driven gallery for <span style={serifItalic}>cinematic video worlds</span>
              </h2>
              <p style={barlow} className="mt-5 max-w-[460px] text-[16px] leading-[1.7] text-white/75">
                To make the preview stable, this version uses cinematic placeholder panels instead of external videos, while preserving the same visual system and depth composition.
              </p>
            </div>

            <div className="relative min-h-[560px] [perspective:1600px]">
              <div className="relative mx-auto hidden min-h-[560px] items-center justify-center md:flex">
                <VideoDepthCard {...galleryItems[0]} className="absolute left-0 top-10 w-[42%]" rotation="md:rotate-[-7deg]" translate="md:translate-y-10" />
                <VideoDepthCard {...galleryItems[1]} className="relative z-20 w-[48%]" rotation="md:rotate-[1deg]" />
                <VideoDepthCard {...galleryItems[2]} className="absolute right-0 top-20 w-[42%]" rotation="md:rotate-[8deg]" translate="md:translate-y-16" />
              </div>

              <div className="grid gap-4 md:hidden">
                {galleryItems.map((item) => (
                  <VideoDepthCard key={item.title} {...item} className="w-full" />
                ))}
              </div>
            </div>
          </div>
        </SectionFrame>
      </section>

      <section id="benefits" className="relative flex justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionFrame>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <SectionEyebrow>Benefits</SectionEyebrow>
              <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                Faster output, stronger atmosphere, <span style={serifItalic}>higher creative range</span>
              </h2>
            </div>
            <div className="space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-[2px] bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] bg-white/90 text-[#171717]">
                    <Check className="h-4 w-4" />
                  </div>
                  <p style={barlow} className="text-[16px] leading-[1.6] text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionFrame>
      </section>

      <section ref={aboutRef} id="about" className="relative flex justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <CinematicBackground className="absolute inset-0 h-full w-full" />
        <video
          className="absolute inset-0 h-full w-full object-cover [animation:slowZoom_18s_ease-in-out_infinite_alternate] will-change-transform transition-all duration-300"
          src="https://content.pancake.vn/web-media/87/fc/60/c9/3fe7b845ab6d4f3b3d0490df997553f514b523dc7b9152fa52e67660-w:0-h:0-l:11124137-t:video/mp4.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            filter: `blur(${aboutScrollFx.blur}px)`,
            transform: `scale(${aboutScrollFx.scale})`,
          }}
        />
        <div
          className="absolute inset-0 bg-[#171717]/90 transition-all duration-300"
          style={{ opacity: aboutScrollFx.opacity }}
        />
        <div className="relative z-10 flex w-full justify-center">
          <SectionFrame>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <SectionEyebrow>About My Studio</SectionEyebrow>
                <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                  A visual studio focused on <span style={serifItalic}>emotion, motion, and atmosphere</span>
                </h2>
              </div>
              <div className="space-y-5 text-white/75">
                <p style={barlow} className="text-[16px] leading-[1.8]">
                  This studio was built to create cinematic video experiences with the speed and adaptability of AI, without losing direction, taste, or visual discipline.
                </p>
                <p style={barlow} className="text-[16px] leading-[1.8]">
                  We combine concept design, prompt-driven production, scene consistency, and editorial thinking to craft videos that feel intentional rather than generic.
                </p>
                <p style={barlow} className="text-[16px] leading-[1.8]">
                  The result is a lean production model for founders, brands, and creative teams that need premium storytelling with contemporary tools.
                </p>
                <div className="pt-3">
                  <a href="#contact" style={barlow} className="inline-flex items-center gap-2 rounded-[2px] bg-[#f8f8f8] px-5 py-3 text-[15px] font-medium text-[#171717] transition-colors duration-300 hover:bg-white">
                    <Sparkles className="h-4 w-4" />
                    Discuss your vision
                  </a>
                </div>
              </div>
            </div>
          </SectionFrame>
        </div>
      </section>

      <section className="relative flex justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionFrame>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:items-start">
            <div>
              <SectionEyebrow>Process</SectionEyebrow>
              <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                A production flow designed for <span style={serifItalic}>precision and momentum</span>
              </h2>
              <p style={barlow} className="mt-5 max-w-[470px] text-[16px] leading-[1.7] text-white/75">
                The concept becomes stronger when the experience shows not only what the studio makes, but how it moves from vision to final delivery.
              </p>
              <div className="mt-8 hidden items-center gap-6 md:flex">
                <div className="h-px w-16 bg-white/12" />
                <p style={barlow} className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
                  Three-step studio system
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
              {processSteps.map((step) => (
                <ProcessCard key={step.title} {...step} />
              ))}
            </div>
          </div>
        </SectionFrame>
      </section>

      <section className="relative flex justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <img
          src="https://i.pinimg.com/1200x/ec/cf/a2/eccfa27aafc9983536f36ead73dde3d5.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-25 [animation:subtleDrift_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-[#171717]/90" />
        <div className="relative z-10 w-full flex justify-center">
          <SectionFrame>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <SectionEyebrow>Why This Studio</SectionEyebrow>
              <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                Built to turn ambitious ideas into <span style={serifItalic}>cinematic launch assets</span>
              </h2>
            </div>
            <div className="space-y-4">
              {proofItems.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-[2px] bg-white/5 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.06]">
                  <div style={barlow} className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] bg-white/90 text-[12px] font-medium text-[#171717]">
                    0{index + 1}
                  </div>
                  <p style={barlow} className="text-[16px] leading-[1.7] text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionFrame>
        </div>
      </section>

      <section id="faq" className="relative flex justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionFrame>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[52px]">
                Questions about process, <span style={serifItalic}>scope, and delivery</span>
              </h2>
            </div>
            <div>
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  open={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
              <div className="border-t border-white/15 pt-6">
                <a id="contact" href="mailto:hello@aicinemastudio.com" style={barlow} className="inline-flex items-center gap-2 rounded-[2px] bg-[#f8f8f8] px-5 py-3 text-[15px] font-medium text-[#171717] transition-colors duration-300 hover:bg-white">
                  <Wand2 className="h-4 w-4" />
                  hello@aicinemastudio.com
                </a>
              </div>
            </div>
          </div>
        </SectionFrame>
      </section>

      <section className="relative flex justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionFrame>
          <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
            <SectionEyebrow>Final CTA</SectionEyebrow>
            <h2 style={barlow} className="text-[34px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[42px] md:text-[56px]">
              Ready to turn your next idea into a <span style={serifItalic}>cinematic AI experience</span>
            </h2>
            <p style={barlow} className="mt-5 max-w-[650px] text-[16px] leading-[1.7] text-white/75">
              Bring your launch, campaign, trailer, or concept world to life with a production system designed for speed, aesthetic control, and emotional impact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" style={barlow} className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#f8f8f8] px-5 py-3 text-[15px] font-medium text-[#171717] transition-colors duration-300 hover:bg-white">
                <Send className="h-4 w-4" />
                Start your cinematic brief
              </a>
              <a href="#gallery" style={barlow} className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-white/[0.06] px-5 py-3 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-white/15">
                <Play className="h-4 w-4" />
                Explore the gallery
              </a>
            </div>
          </div>
        </SectionFrame>
      </section>

      <footer ref={footerRef} className="group relative flex justify-center overflow-hidden px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://pikaso.cdnpk.net/private/production/3759227755/904a1641-3c92-4a64-9d17-ad2e6546f6c3-0.mp4?token=exp=1775001600~hmac=1bd961671ba97df236f068a229d1af3c1405a9f679ee00607ca2a82549139017"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className={`absolute inset-0 bg-[#171717]/95 transition-opacity duration-[1400ms] ease-out ${footerVisible ? "opacity-100" : "opacity-0"}`} />
        <div className={`relative z-10 flex w-full justify-center transition-all duration-[1200ms] ease-out ${footerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <SectionFrame className="py-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p style={barlow} className="text-[14px] font-medium uppercase tracking-[0.24em] text-white">AI CINEMA STUDIO</p>
              <h3 style={barlow} className="mt-4 max-w-[520px] text-[28px] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[34px]">
                Visual systems for brands that want to move with <span style={serifItalic}>cinematic presence</span>
              </h3>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#gallery">Gallery</FooterLink>
                <FooterLink href="#benefits">Benefits</FooterLink>
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#faq">FAQ</FooterLink>
              </div>

              <div className="flex items-center gap-2">
                <a href="mailto:hello@aicinemastudio.com" className="rounded-[2px] bg-[#f8f8f8] p-3 text-[#171717] transition-colors duration-300 hover:bg-white">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="#" style={barlow} className="rounded-[2px] bg-white/[0.06] px-3 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/15">
                  IG
                </a>
                <a href="#" style={barlow} className="rounded-[2px] bg-white/[0.06] px-3 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/15">
                  IN
                </a>
              </div>

              <p style={barlow} className="text-[13px] text-white/55">© 2026 AI Cinema Studio. Crafted for cinematic AI storytelling.</p>
            </div>
          </div>
        </SectionFrame>
        </div>
      </footer>
      </div>
    </main>
  );
}
