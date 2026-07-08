import PageBanner from "@/components/PageBanner";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" bgImage="/images/policy.png" breadcrumb="Privacy Policy" />
      <section className="w-full py-16 max-w-4xl mx-auto px-4 text-[#293E52]">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          Renfra Energy India Limited is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
        </p>
      </section>
    </>
  );
}
