import PageBanner from "@/components/PageBanner";

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" bgImage="/images/banner-about.png" breadcrumb="Terms & Conditions" />
      <section className="w-full py-16 max-w-4xl mx-auto px-4 text-[#293E52]">
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing and using the Renfra Energy India Limited website, you accept and agree to be bound by the terms and provisions of this agreement.
        </p>
      </section>
    </>
  );
}
