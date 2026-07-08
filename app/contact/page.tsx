"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", terms: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
  };

  return (
    <>
      <PageBanner title="Contact" bgImage="/images/contact-banner.png" breadcrumb="Contact" />

      <main className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#293E52]">
                  Get in Touch with <br /> Renfra Energy India Limited
                </h1>
                <p className="text-sm md:text-base text-[#293E52]">
                  We&apos;d love to hear from you! Whether you&apos;re looking for renewable energy solutions, partnership opportunities, or career information – our team is here to help.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Image src="/images/con-loc.png" alt="Location" width={24} height={24} className="h-6 w-6 object-contain flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#293E52]">Office</h3>
                    <p className="text-sm text-[#293E52]">
                      IndiQube Ocean Bay, 5th floor, A-19&20,<br />
                      SIDCO Thiru Vi Ka Industrial Estate,<br />
                      Guindy, Chennai – 600032, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Image src="/images/con-call.png" alt="Phone" width={24} height={24} className="h-6 w-6 object-contain flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#293E52]">Call Us</h3>
                    <p className="text-sm text-[#293E52]">+91 70944 88909</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Image src="/images/con-mail.png" alt="Mail" width={24} height={24} className="h-6 w-6 object-contain flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#293E52]">Email Us</h3>
                    <p className="text-sm text-[#293E52]">info@renfraenergy.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full rounded-lg border bg-card p-8 shadow-md">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    placeholder="Your Name"
                    required
                    className="w-full rounded-md bg-[#F2F3F4] px-4 py-3"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    placeholder="Phone no."
                    required
                    className="w-full rounded-md bg-[#F2F3F4] px-4 py-3"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email id"
                    required
                    className="w-full rounded-md bg-[#F2F3F4] px-4 py-3"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full rounded-md bg-[#F2F3F4] px-4 py-3 resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <div className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.terms}
                      onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                      required
                    />
                    <span>
                      I accept the{" "}
                      <Link href="/terms-conditions" className="text-blue-600 underline hover:text-blue-800" target="_blank">
                        Terms & Conditions
                      </Link>
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#1A60A4] text-white px-4 py-2 rounded-md w-[180px] text-sm font-medium hover:bg-[#1A60A4]/90 transition"
                  >
                    Request A Call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.372429769318!2d80.20644767454719!3d13.011939113993664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679efbaabf3b%3A0x2b1889fc6fc9b276!2sIndiQube%20Ocean%20Bay!5e0!3m2!1sen!2sin!4v1768306189246!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        />
      </section>
    </>
  );
}
