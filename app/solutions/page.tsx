import Image from "next/image";
import PageBanner from "@/components/PageBanner";

const solutions = [
  {
    img: "/images/sol1.png",
    title: "Solar Power Plants",
    desc: "Utility-scale solar power plants designed for maximum efficiency and long-term performance.",
  },
  {
    img: "/images/sol2.png",
    title: "Wind Energy Projects",
    desc: "End-to-end wind energy solutions from site assessment to commissioning and O&M.",
  },
  {
    img: "/images/sol4.png",
    title: "Battery Energy Storage Systems",
    desc: "Advanced BESS solutions to store and dispatch renewable energy on demand.",
  },
  {
    img: "/images/sol5.png",
    title: "Hybrid Renewable Solutions",
    desc: "Integrated Solar + Wind + BESS hybrid systems for reliable 24/7 clean energy.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageBanner title="Solutions" bgImage="/images/solution-banner.png" breadcrumb="Solutions" />

      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52] mb-4">Our Solutions</h2>
            <p className="text-[#293E52] max-w-3xl mx-auto text-sm sm:text-base">
              Renfra Energy provides end-to-end renewable energy solutions for industrial, commercial and residential needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image src={sol.img} alt={sol.title} width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-[#293E52] mb-2">{sol.title}</h3>
                  <p className="text-sm text-gray-600">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
