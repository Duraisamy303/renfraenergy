import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Our Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/ims", label: "IMS @ Renfra" },
  { href: "/news", label: "News & Media Page" },
  { href: "/career", label: "Career" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-white mt-48">
      <div className="relative w-full bg-[#293E52] pb-8">
        <Image src="/images/Mobile-Footer.gif" alt="Curved Top" width={1920} height={100} className="absolute top-1 left-0 w-full md:hidden -translate-y-full" unoptimized />
        <Image src="/images/Tab-footer.gif" alt="Curved Top" width={1920} height={100} className="absolute top-1 left-0 w-full hidden md:block lg:hidden -translate-y-full" unoptimized />
        <Image src="/images/Desktop-footer1.gif" alt="Curved Top" width={1920} height={100} className="absolute top-1 left-0 w-full hidden lg:block -translate-y-full" unoptimized />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-2">
            <div className="md:col-span-2 lg:col-span-2 flex flex-col items-start lg:ml-2">
              <div className="mb-4">
                <Image src="/images/logow.svg" alt="Logo" width={160} height={60} />
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-1">
              <h4 className="text-white font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Image src="/images/con-loc.png" alt="Head Office" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Head Office</p>
                    <p className="text-gray-400 text-sm">
                      IndiQube Ocean Bay, 5th floor, A-19&20,<br />
                      SIDCO Thiru Vi Ka Industrial Estate, Guindy,<br />
                      Chennai – 600032, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src="/images/con-call.png" alt="Call Us" width={20} height={20} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Call Us</p>
                    <a href="tel:+917094488909" className="text-gray-400 text-sm">+91 70944 88909</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src="/images/con-mail.png" alt="Email Us" width={20} height={20} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Email Us</p>
                    <a href="mailto:info@renfraenergy.com" className="text-gray-400 text-sm">info@renfraenergy.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-start">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <form className="flex flex-col gap-3">
                <input type="email" placeholder="Your Email" className="px-4 py-2 rounded bg-gray-200 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" required />
                <button type="submit" className="px-6 py-2 w-[120px] bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors text-sm">Subscribe</button>
                <div className="flex gap-8 mt-6">
                  <a href="https://wa.me/917094488909" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a href="https://www.instagram.com/speedteamgroup" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/insta.svg" alt="Instagram" width={20} height={20} className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a href="https://youtube.com/@speedteamgroup" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/youtube.svg" alt="YouTube" width={28} height={28} className="w-7 h-7 hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-2 flex flex-col md:flex-row justify-between items-center text-white text-sm lg:ml-2">
            <p>© 2026 - Renfra Energy India Limited</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms-conditions" className="text-white transition-colors">Terms & Conditions</Link>
              <span className="text-gray-600">|</span>
              <Link href="/privacy-policy" className="text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
