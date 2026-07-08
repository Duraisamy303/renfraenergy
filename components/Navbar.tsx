"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import investorsData from "@/JSON/home/investors.json";
import solutionsData from "@/JSON/home/solutions.json";

const solutionsDropdown = solutionsData.data.map((item) => ({
  href: `/solutions/${item.uniq_name}`,
  label: item.title,
}));

const investorDropdown = investorsData.data.map((item) => ({
  href: `/investor-relations?tab=${item.uniq_name}`,
  label: item.title,
}));

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Our Solutions", dropdown: solutionsDropdown },
  { href: "/investor-relations", label: "Investor Relations", dropdown: investorDropdown },
  { href: "/projects", label: "Projects" },
  { href: "/ims", label: "IMS @ Renfra" },
  { href: "/news", label: "News & Media" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];

function DropdownMenu({ items, visible }: { items: typeof solutionsDropdown; visible: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 z-50 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-5 py-3 text-sm text-gray-700 hover:text-[#3CA948] hover:bg-gray-50 transition-colors duration-150 border-b border-gray-50 last:border-0"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/renfra-logo.svg" alt="Renfra Energy" width={160} height={58} style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(40%) saturate(600%) hue-rotate(185deg) brightness(90%)" }} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const hasDropdown = !!link.dropdown;
            const isOpen = openDropdown === link.label;

            return (
              <li key={link.href} className="relative">
                {hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                      isActive ? "text-[#3CA948]" : "text-[#293E52] hover:text-[#3CA948]"
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                      isActive ? "text-[#3CA948]" : "text-[#293E52] hover:text-[#3CA948]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {hasDropdown && (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <DropdownMenu items={link.dropdown!} visible={isOpen} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#293E52] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-2 space-y-1">
          {navLinks.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isExpanded = mobileExpanded === link.label;

            return (
              <li key={link.href}>
                {hasDropdown ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[#293E52] hover:text-[#3CA948] transition-colors"
                      onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isExpanded ? "max-h-60" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 pb-1 space-y-1">
                        {link.dropdown!.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#3CA948] transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-[#3CA948]" : "text-[#293E52] hover:text-[#3CA948]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
