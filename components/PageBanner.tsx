import Link from "next/link";

interface PageBannerProps {
  title: string;
  bgImage: string;
  breadcrumb: string;
}

export default function PageBanner({ title, bgImage, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative w-full h-[150px] md:h-[250px] lg:h-[360px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          animation: "bannerZoom 8s ease forwards",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#193F3D]" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10">
        <div
          className="text-white space-y-3"
          style={{ animation: "bannerFadeUp 0.8s ease forwards" }}
        >
          <h1 className="text-3xl md:text-5xl font-normal">{title}</h1>
          <div className="max-w-7xl h-[1px] bg-white/70" />
          <div className="text-sm md:text-base text-gray-200">
            <Link href="/" className="text-white font-bold hover:underline">Home</Link>
            <span className="mx-2 text-white">›</span>
            <span className="text-[#1dec50]">{breadcrumb}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
