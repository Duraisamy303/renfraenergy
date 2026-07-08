"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import aboutStatsData from "@/JSON/home/about_stats.json";
import solutionsData from "@/JSON/home/solutions.json";
import projectsData from "@/JSON/home/projects.json";
import testimonialsData from "@/JSON/home/testimonials.json";

const heroSlides = [
  {
    title: "Empowering a Green Revolution",
    subtitle: "Delivering clients' energy needs through solar and wind solutions",
  },
  {
    title: "Clean Energy for a Better Tomorrow",
    subtitle: "End-to-end EPC solutions for solar, wind and energy storage",
  },
  {
    title: "Building a Sustainable Future",
    subtitle: "Trusted renewable energy partner for industrial & commercial needs",
  },
];

const API_BASE = "https://api.renfraenergy.com";

const commitments = [
  { img: "/images/c1.png", title: "Environmental Stewardship", desc: "As a company revolving around designing, manufacturing, developing, building, operating and maintaining renewable plants in the region, we understand the responsibility in safeguarding the environment." },
  { img: "/images/c2.png", title: "Advanced Technology", desc: "To accelerate the transition to renewable sources, we adapt the latest and innovative technologies through R&D and collaborations." },
  { img: "/images/c3.png", title: "Socially Responsible", desc: "Renfra Energy does not just invest and build renewable plants, but rather it invests and develops the communities it works in!" },
  { img: "/images/c4.png", title: "Client-Centric", desc: "Renfra Energy is dedicated to empowering clients with reliable, affordable, and sustainable energy solutions." },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setAnimating(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-gray-900">
        <video
          src="/images/Renfra Banner Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#293E52]" />
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full md:w-1/2 lg:w-6/12">
              {/* Animated title */}
              <div className="relative h-20 sm:h-20 md:h-16 lg:h-40 overflow-hidden mb-2">
                <h1
                  className="absolute text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight transition-all duration-700 ease-in-out"
                  style={{
                    opacity: animating ? 0 : 1,
                    transform: animating ? "translateY(-30px)" : "translateY(0)",
                    color: "transparent",
                    WebkitTextStroke: "2px white",
                    textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  {heroSlides[current].title}
                </h1>
              </div>
              {/* Animated subtitle */}
              <div className="relative h-16 md:h-20 flex items-start overflow-hidden mb-8">
                <p
                  className="absolute text-lg sm:text-xl md:text-2xl text-white font-normal leading-relaxed transition-all duration-700 ease-in-out"
                  style={{
                    opacity: animating ? 0 : 1,
                    transform: animating ? "translateY(20px)" : "translateY(0)",
                    transitionDelay: animating ? "0ms" : "100ms",
                  }}
                >
                  {heroSlides[current].subtitle}
                </p>
              </div>
              {/* Carousel dots */}
              <div className="flex items-center gap-2 mt-8">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 h-1.5 rounded-full ${
                      i === current ? "w-10 bg-[#3CA948]" : "w-6 bg-white hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52]">About Us</h2>
                  <Link href="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#329ACD" />
                          <stop offset="100%" stopColor="#3AB257" />
                        </linearGradient>
                      </defs>
                      <path stroke="url(#grad)" d="M15 3h6v6" />
                      <path stroke="url(#grad)" d="M10 14 21 3" />
                      <path stroke="url(#grad)" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  At Renfra Energy India Limited, our commitment is to make clean energy available and affordable to all, thus reducing the carbon footprint! As a fast-growing turnkey solution provider for clean energy in the region, Renfra Energy India Limited takes pride in being a catalyst in the renewable energy landscape.
                </p>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0D0D0D] mb-3">What We Do</h3>
                  <p className="text-base text-gray-700 mb-4">We are a full-service EPC (Engineering, Procurement & Construction) company delivering:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Solar Power Plants (Utility Scale)</li>
                    <li>Wind Energy Projects</li>
                    <li>Battery Energy Storage Systems (BESS)</li>
                    <li>Hybrid Renewable Solutions (Solar + Wind + BESS)</li>
                  </ul>
                </div>
                <Link href="/about" className="inline-block px-6 py-3  bg-gradient-to-r from-[#329ACD] to-[#3AB257] text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit">
              {/* <Link href="/solutions" className="inline-block px-8 py-3 bg-gradient-to-r from-[#329ACD] to-[#3AB257] text-white rounded-full font-medium hover:opacity-90 hover:scale-105 transition-all duration-300"> */}
                 

                  Know More
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image src="/images/renfra-about.gif" alt="About Renfra" width={700} height={400} className="w-full h-[400px] object-cover rounded-2xl" unoptimized />
              </div>
            </FadeUp>
          </div>

          {/* Stats Row */}
          <FadeUp delay={200}>
            <div className="mt-10 border border-gray-200 rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200">
              {aboutStatsData.data.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center justify-center py-8 px-4 gap-2">
                  <Image
                    src={`${API_BASE}/${stat.image_path}`}
                    alt={stat.title}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain"
                  />
                  <span className="text-2xl md:text-3xl font-bold text-[#293E52]">{stat.value}</span>
                  <span className="text-sm text-gray-500 text-center">{stat.title}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Solutions Section - gradient bg */}
      <section className="w-full py-16" style={{background: "linear-gradient(135deg, #329ACD 0%, #3AB257 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Our Solutions</h2>
                <Link href="/solutions">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </Link>
              </div>
              <p className="text-white/90 max-w-3xl mx-auto text-sm sm:text-base">
                As a leading Independent Service Provider in the clean energy and energy storage landscape, Renfra Energy manufactures, develops, engineers, procures and constructs renewable projects and products for commercial and industrial clients in addition to providing the Operation &amp; Maintenance solutions, thus guaranteeing a sustainable energy transition!
              </p>
              <Link href="/solutions" className="inline-block mt-6 px-8 py-3 bg-white text-[#293E52] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300">
                Know More
              </Link>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {solutionsData.data.map((item, i) => (
              <FadeUp key={item.id} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center h-full shadow-sm">
                  <Image
                    src={`${API_BASE}/${item.image_path}`}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-xl mb-3"
                  />
                  <h3 className="font-bold text-[#293E52] mb-3 text-base">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description.replace(/<[^>]+>/g, "").slice(0, 120) + "..." }} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Projects Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52]">Signature Projects</h2>
                <Link href="/projects">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#329ACD" /><stop offset="100%" stopColor="#3AB257" /></linearGradient></defs>
                    <path stroke="url(#grad2)" d="M15 3h6v6" /><path stroke="url(#grad2)" d="M10 14 21 3" /><path stroke="url(#grad2)" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </Link>
              </div>
              <p className="text-gray-600 max-w-md">Delivering exceptional projects in India and Overseas to clients looking for long time value.</p>
              {/* <Link href="/projects" className="inline-block px-6 py-2 bg-[#3CA948] text-white font-semibold rounded-full hover:bg-[#2e9040] transition-colors duration-300 w-fit"> */}
              <Link href="/about" className="inline-block px-6 py-1  bg-gradient-to-r from-[#329ACD] to-[#3AB257] text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit">
               
                Know More
              </Link>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.data.map((proj, i) => (
              <FadeUp key={proj.id} delay={i * 100}>
                <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-72">
                  <Image src={`${API_BASE}/${proj.image_path}`} alt={proj.title} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-white m-3 rounded-xl p-4">
                    <h3 className="font-bold text-[#293E52] text-sm mb-1">{proj.title}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                      <svg viewBox="0 0 16 16" className="w-3 h-3" fill="#9ca3af"><path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                      {proj.location}
                    </div>
                    <p className="text-gray-500 text-xs" dangerouslySetInnerHTML={{ __html: proj.description.replace(/<[^>]+>/g, "").slice(0, 100) + "..." }} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52] mb-3">Client Testimonials</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Read how Renfra Energy brings a noticeable change to the operations of our clients through our renewable energy solutions</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.data.map((t, i) => (
              <FadeUp key={t.id} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col h-full">
                  <span className="text-[#3CA948] text-4xl font-serif leading-none mb-3">&ldquo;&rdquo;</span>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: t.feedback.replace(/<[^>]+>/g, "") }} />
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-bold text-[#293E52] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-1">{t.designation}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      {/* <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52] mb-4">Our Commitment</h2>
              <p className="text-[#293E52] max-w-3xl mx-auto text-sm sm:text-base">
                Renfra offers corporate training in emerging tech with hands-on projects to build confidence, skills, and industry readiness.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <Image src={item.img} alt={item.title} width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-center font-semibold text-[#293E52] mb-3 text-lg">{item.title}</h3>
                  <p className="text-center text-[#293E52] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
