"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { href: "tel:+917094488909", img: "/images/new-call.svg", alt: "Call", external: false },
  { href: "mailto:info@renfraenergy.com", img: "/images/mail1.svg", alt: "Email", external: false },
  { href: "https://wa.me/917094488909", img: "/images/new-whatsapp.svg", alt: "WhatsApp", external: true },
  { href: "/news", img: "/images/new-down.svg", alt: "Download", external: false },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20">
      <div className="relative flex flex-row items-center gap-0">
        {/* Slide-in buttons */}
        <div className="flex flex-col items-end gap-1 mr-2">
          {menuItems.map((item, i) => (
            <div
              key={item.alt}
              className="transition-all duration-500 ease-out"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(100%)",
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                pointerEvents: open ? "auto" : "none",
              }}
            >
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center" aria-label={item.alt}>
                    <Image src={item.img} alt={item.alt} width={32} height={32} className="w-8 h-8 object-contain" />
                  </button>
                </a>
              ) : (
                <Link href={item.href}>
                  <button className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center" aria-label={item.alt}>
                    <Image src={item.img} alt={item.alt} width={32} height={32} className="w-8 h-8 object-contain" />
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-10 h-16 lg:w-8 lg:h-24 bg-gradient-to-r from-[#329ACD] to-[#3AB257] rounded-l-lg transition-all duration-300 flex items-center justify-center z-10"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-6 h-6 text-white transition-transform duration-500 ${open ? "rotate-180" : "rotate-0"}`}
          >
            <path d="m11 17-5-5 5-5" />
            <path d="m18 17-5-5 5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
