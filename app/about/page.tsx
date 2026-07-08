"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";

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

  return <div ref={ref} className={className}>{children}</div>;
}

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" bgImage="/images/banner-about.png" breadcrumb="About Us" />

      {/* About Content */}
      <section className="flex flex-col items-center justify-center px-4 pt-12 pb-4 bg-white">
        <FadeUp className="max-w-6xl text-center mb-10">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Renfra Energy India Limited, our commitment is to make clean energy available and affordable to all, thus reducing the carbon footprint!
          </p>
          <br />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            As a fast-growing turnkey solution provider for clean energy in the region, Renfra Energy India Limited takes pride in the fact that the company has been acting as a catalyst in the renewable energy landscape by bringing positive changes that creates a greener and a sustainable future!
          </p>
          <div className="mt-8 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-[#0D0D0D] mb-3">What We Do</h3>
            <p className="text-base md:text-lg text-gray-700 mb-4">We are a full-service EPC (Engineering, Procurement & Construction) company delivering:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Solar Power Plants (Utility Scale)</li>
              <li>Wind Energy Projects</li>
              <li>Battery Energy Storage Systems (BESS)</li>
              <li>Hybrid Renewable Solutions (Solar + Wind + BESS)</li>
            </ul>
            <p className="text-base md:text-lg text-gray-700 my-4">
              From planning to commissioning — and beyond — we manage your entire energy project under one roof.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={150} className="relative w-full max-w-7xl rounded-2xl overflow-hidden">
          <Image src="/images/about-video-image.png" alt="About Renfra" width={1200} height={400} className="w-full h-[400px] object-cover" />
        </FadeUp>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-[#F6F6F6]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            <FadeUp className="flex flex-col lg:pb-6 pt-6">
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52] mt-4">Mission</h2>
              <p className="text-[#293E52] text-sm md:text-base">
                We are committed to build technologically advanced renewable plants and solutions that are affordable, sustainable and thus making clean energy accessible to people.
              </p>
            </FadeUp>
            <FadeUp delay={100} className="flex items-center justify-center lg:pt-5">
              <Image src="/images/renfra-mission.gif" alt="Mission Vision" width={250} height={250} className="h-auto w-[200px] md:w-[220px] lg:w-[250px] object-contain" unoptimized />
            </FadeUp>
            <FadeUp delay={200} className="flex flex-col pb-6 lg:pt-6">
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52] mt-4">Vision</h2>
              <p className="text-[#293E52] text-sm md:text-base">
                By accelerating the transition to clean energy, Renfra Energy is poised to lead the sustainable energy future landscape of the region that will benefit millions worldwide.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CMD Message */}
      <div className="min-h-screen bg-gradient-to-b from-[#329ACD] to-[#3AB257] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <FadeUp className="flex flex-col items-center lg:items-start h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-full h-full flex flex-col">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-96">
                  <Image src="/images/cmd.png" alt="Dr. Muthuraj Periyasamy" fill className="object-cover p-3 rounded-2xl" />
                </div>
                <div className="p-3 flex flex-col justify-center flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Muthuraj Periyasamy</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Chairman & Managing Director</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150} className="text-white flex flex-col justify-center h-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">CMD Message</h2>
              <div className="space-y-5">
                <p className="text-base md:text-lg font-semibold mb-3">Dear Stakeholders,</p>
                <p className="text-sm md:text-base leading-relaxed text-white/95">
                  At Renfra Energy India Limited, we are committed to building a cleaner and more sustainable future through innovative solar, wind, and energy storage solutions. Our mission is to deliver reliable, efficient, and cost-effective renewable energy that helps businesses achieve energy independence while reducing their environmental impact.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/95">
                  We provide end-to-end renewable energy solutions—from design and engineering to installation, commissioning, and long-term maintenance. Every project is tailored to meet our customers&apos; unique requirements, ensuring maximum performance, long-term savings, and operational excellence.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Commitment */}
      <section className="pt-16 px-4 pb-10">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52] mb-4">Our Commitment</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/images/c1.png", title: "Environmental Stewardship", desc: "As a company revolving around designing, manufacturing, developing, building, operating and maintaining renewable plants in the region, we understand the responsibility in safeguarding the environment." },
              { img: "/images/c2.png", title: "Advanced Technology", desc: "To accelerate the transition to renewable sources, we adapt the latest and innovative technologies through R&D and collaborations." },
              { img: "/images/c3.png", title: "Socially Responsible", desc: "Renfra Energy does not just invest and build renewable plants, but rather it invests and develops the communities it works in!" },
              { img: "/images/c4.png", title: "Client-Centric", desc: "Renfra Energy is dedicated to empowering clients with reliable, affordable, and sustainable energy solutions." },
            ].map((item, i) => (
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
      </section>
    </>
  );
}
