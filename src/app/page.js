import React from "react";
import BackgroundSlider from "@/app/components/BackgroundSlider/page";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-screen overflow-hidden">
      {/* Background Slider Only */}
      <div className="w-full h-[65vh] relative">
        <BackgroundSlider />
      </div>

      {/* Content After Slider */}
      <div className="relative z-20 flex flex-col items-center justify-center px-5 py-5 text-center text-white bg-white">
        {/* Center Title */}
        <h1 className="text-3xl md:text-6xl font-bold pt-5 text-secondary drop-shadow-lg mb-7">
          Khadija Tul Zahra Physio Therapy Center
        </h1>

        {/* Short Tagline */}
        <p className="max-w-3xl text-xl md:text-2xl mb-12 text-secondary leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-yellow-300">
            the best physiotherapy Center
          </span>{" "}
          where expert care meets compassion. Our goal is to help you live a
          healthy, pain-free life with modern physiotherapy and rehabilitation
          techniques.
        </p>

        {/* Doctors Info */}
        <div className="bg-white/20 px-7 py-5 rounded-2xl mb-4 shadow-lg backdrop-blur-md max-w-3xl border-2 border-secondary">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
            Our Expert Specialists
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dr Adeela */}
            <div className="flex flex-col items-center">
              <Image
                src="/profilepic.jpg"
                alt="Dr Adeela"
                width={120}
                height={120}
                className="rounded-2xl border-2 border-white mb-3"
              />
              <h3 className="text-2xl font-bold text-yellow-300">
                Dr. Adeela (DPT),(MPPTA)
              </h3>
              <p className="text-xl md:text-xl text-secondary text-center">
                Expert in musculoskeletal & rehabilitation therapy. Passionate
                about patient-centered healing.
              </p>
            </div>

            {/* Dr Waqas */}
            <div className="flex flex-col items-center">
              <Image
                src="/doctor.jpg"
                alt="Dr Waqas"
                width={120}
                height={120}
                className="rounded-2xl border-2 border-white mb-3"
              />
              <h3 className="text-2xl font-bold text-yellow-300">
                Dr. Waqas (DPT),(MPPTA)
              </h3>
              <p className="text-xl md:text-xl text-secondary text-center">
                Certified in CP & Dry Needling <br />
                Specialist in advanced physiotherapy techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timings & Contact */}
      <div className="w-full bg-secondary text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          We Are Always Here For You
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-6 px-4">
          Our mission is to serve you with care, compassion, and modern
          physiotherapy.
          <br />
          <span className="italic text-yellow-300">
            "Healthy life starts with a healthy body and mind."
          </span>
        </p>

        <div className="space-y-3">
          <div className="text-2xl font-bold text-white">
            Timings:{" "}
            <span className="font-semibold text-yellow-300">
              Mon – Thu & Sat – Sun, 9:00am – 5:00pm
            </span>
            <span className="font-semibold text-yellow-300 block">
              Friday: Closed
            </span>
          </div>

          {/* ✅ Fixed: div instead of p */}
          <div className="flex justify-center items-center gap-3 text-2xl font-bold text-white">
            <a
              href="https://wa.me/923291500326?text=Hello%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-600 transition"
            >
              {/* Icon with green circle */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500">
                <FaWhatsapp size={22} className="text-white" />
              </div>

              <span className="text-white font-bold">
                Contact:{" "}
                <span className="font-semibold text-yellow-300">
                  0329-1500326
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
